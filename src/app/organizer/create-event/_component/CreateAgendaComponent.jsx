"use client";
import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CalendarDays } from "lucide-react";

import { agendaSchema } from "@/lib/zod/AgendaSchema";
import DayActivitiesComponent from "./DayActivitiesComponent";
import ResetButtonComponent from "./ResetButtonComponent";
import { createEventAction } from "@/action/createEventAction";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

// Helper function to calculate days between two dates
const calculateDaysBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Reset time to avoid timezone issues
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const timeDifference = end.getTime() - start.getTime();
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1; // +1 to include both start and end dates
  return dayDifference;
};

// Helper function to format date for display
const formatDate = (dateString) => {
  try {
    return format(new Date(dateString), "EEEE, MMMM d, yyyy");
  } catch (error) {
    // Fallback to basic formatting if date-fns fails
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};

// Helper function to get date for specific day in range
const getDateForDay = (startDate, dayIndex) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + dayIndex);
  return date.toISOString().split("T")[0];
};

// Main Component
function CreateAgendaComponent({ setFormData, formData, onBack }) {
  const router = useRouter();
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [maxDays, setMaxDays] = useState(1);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [hasSubmitAttempt, setHasSubmitAttempt] = useState(false);

  // Calculate max days based on date range from formData
  useEffect(() => {
    if (formData?.startDate && formData?.endDate) {
      const days = calculateDaysBetween(formData.startDate, formData.endDate);
      setMaxDays(days);
      setDateRange({ start: formData.startDate, end: formData.endDate });
    }
  }, [formData?.startDate, formData?.endDate]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(agendaSchema),
    defaultValues: {
      days: [
        {
          activities: [{ time: "", task: "" }],
        },
      ],
    },
  });

  const {
    fields: dayFields,
    append: appendDay,
    remove: removeDay,
  } = useFieldArray({
    control,
    name: "days",
  });

  // Watch form data to determine if reset button should show
  const watchedDays = watch("days");

  // Validation function to check if all days are filled
  const validateAllDaysRequired = () => {
    const currentDayCount = dayFields.length;
    const requiredDayCount = maxDays;

    if (currentDayCount < requiredDayCount) {
      const missingDays = requiredDayCount - currentDayCount;

      const toastId = toast.error(
        `Please add all days for your event! You're missing ${missingDays} day${
          missingDays > 1 ? "s" : ""
        }.`,
        {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#FEF2F2",
            color: "#DC2626",
            border: "1px solid #FECACA",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            padding: "16px",
            minWidth: "300px",
          },
          icon: "📅",
        }
      );

      console.log("Toast created with ID:", toastId);
      return false;
    }

    // Check if any day has empty activities
    let hasEmptyActivities = false;
    for (let dayIndex = 0; dayIndex < watchedDays.length; dayIndex++) {
      const day = watchedDays[dayIndex];
      const hasValidActivities =
        day.activities &&
        day.activities.some(
          (activity) =>
            activity &&
            activity.time &&
            activity.time.trim() !== "" &&
            activity.task &&
            activity.task.trim() !== ""
        );

      if (!hasValidActivities) {
        console.log(
          `Day ${dayIndex + 1} has no valid activities, showing toast...`
        );

        const toastId = toast.error(
          `Day ${dayIndex + 1}${
            dateRange.start
              ? ` (${formatDate(getDateForDay(dateRange.start, dayIndex))})`
              : ""
          } needs at least one complete activity!`,
          {
            duration: 5000,
            position: "top-center",
            style: {
              background: "#FEF2F2",
              color: "#DC2626",
              border: "1px solid #FECACA",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "500",
              padding: "16px",
              minWidth: "300px",
            },
            icon: "⚠️",
          }
        );

        console.log("Toast created with ID:", toastId);
        hasEmptyActivities = true;
        break; // Show only the first error to avoid spam
      }
    }

    return !hasEmptyActivities;
  };

  // Form handlers
  const onSubmit = async (data) => {
    try {
      // Mark that user has attempted to submit
      setHasSubmitAttempt(true);

      // Add a small delay to ensure state is updated
      await new Promise((resolve) => setTimeout(resolve, 100));

      const isValid = validateAllDaysRequired();

      if (!isValid) {
        console.log("Validation failed, stopping submission");
        return;
      }

      // Show loading toast
      const loadingToast = toast.loading("Creating your event agenda...", {
        style: {
          background: "#F0F9FF",
          color: "#1E40AF",
          border: "1px solid #DBEAFE",
          borderRadius: "12px",
          padding: "16px",
        },
      });

      // Clean and format the data with dates
      const cleanedAgenda = data.days.map((day, index) => ({
        date: dateRange.start ? getDateForDay(dateRange.start, index) : null,
        activities: day.activities
          .filter((activity) => activity.time.trim() && activity.task.trim()) // Filter out empty activities
          .map((activity) => ({
            time: activity.time,
            task: activity.task.trim(),
          })),
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        agenda: cleanedAgenda,
      }));

      const res = await createEventAction({
        ...formData,
        agenda: cleanedAgenda,
      });

      toast.dismiss(loadingToast);

      if (res?.success) {
        toast.success("Event agenda created successfully! 🌿", {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#F0FDF4",
            color: "#166534",
            border: "1px solid #BBF7D0",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
          },
        });
        router.push("/organizer/eco-event");
      } else {
        console.log("Server response:", res);
        toast.error(
          res?.message || "Failed to create event. Please try again.",
          {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FEF2F2",
              color: "#DC2626",
              border: "1px solid #FECACA",
              borderRadius: "12px",
              padding: "16px",
            },
          }
        );
      }
      performReset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An unexpected error occurred. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#FEF2F2",
          color: "#DC2626",
          border: "1px solid #FECACA",
          borderRadius: "12px",
        },
      });
    }
  };

  const performReset = () => {
    reset({
      days: [
        {
          activities: [{ time: "", task: "" }],
        },
      ],
    });
    // Reset submit attempt flag when form is reset
    setHasSubmitAttempt(false);
  };

  const handleResetClick = () => {
    setShowResetDialog(true);
  };

  const confirmReset = () => {
    performReset();
    setShowResetDialog(false);
    toast.success("Agenda reset successfully!", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#F0F9FF",
        color: "#1E40AF",
        border: "1px solid #DBEAFE",
        borderRadius: "12px",
      },
    });
  };

  const addDay = () => {
    if (dayFields.length < maxDays) {
      appendDay({
        activities: [{ time: "", task: "" }],
      });

      // Test toast to verify it's working
      const toastId = toast.success(`Day ${dayFields.length + 1} added!`, {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#F0F9FF",
          color: "#1E40AF",
          border: "1px solid #DBEAFE",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "16px",
        },
        icon: "📅",
      });
      console.log("Add day toast ID:", toastId);
    } else {
      const toastId = toast.error(
        `Maximum ${maxDays} days allowed for this event!`,
        {
          duration: 3000,
          position: "top-center",
          style: {
            background: "#FEF2F2",
            color: "#DC2626",
            border: "1px solid #FECACA",
            borderRadius: "12px",
            padding: "16px",
          },
        }
      );
      console.log("Max days toast ID:", toastId);
    }
  };

  const handleRemoveDay = (dayIndex) => {
    if (dayFields.length > 1) {
      removeDay(dayIndex);
      toast.success(`Day ${dayIndex + 1} removed!`, {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#FFF7ED",
          color: "#C2410C",
          border: "1px solid #FDBA74",
          borderRadius: "12px",
          fontSize: "14px",
        },
        icon: "🗑️",
      });
    }
  };

  // Calculate if reset button should be shown
  const hasMultipleDays = dayFields.length > 1;
  const hasMultipleActivitiesInFirstDay =
    watchedDays?.[0]?.activities?.length > 1;
  const hasAnyFormData = watchedDays?.some((day) =>
    day.activities?.some((activity) => activity.time || activity.task)
  );

  const showResetButton =
    hasMultipleDays || hasMultipleActivitiesInFirstDay || hasAnyFormData;

  // Check if user can add more days
  const canAddMoreDays = dayFields.length < maxDays;

  // Check if all days are added
  const allDaysAdded = dayFields.length === maxDays;
  const missingDaysCount = maxDays - dayFields.length;

  // Only show warnings after submit attempt
  const shouldShowMissingDaysWarning = hasSubmitAttempt && !allDaysAdded;

  return (
    <>
      <section className="mb-10 w-full">
        {/* Header */}
        <header className="text-dark-green mb-4">
          <h1 className="text-2xl font-semibold">Event Agenda</h1>
          {dateRange.start && dateRange.end && (
            <div className="mt-2 p-4 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl">
              <p className="text-blue-700 font-medium">
                📅 Event Duration: {formatDate(dateRange.start)} to{" "}
                {formatDate(dateRange.end)}
              </p>
              <p className="text-blue-600 text-sm mt-1">
                You can plan activities for up to {maxDays} day
                {maxDays > 1 ? "s" : ""} ({dayFields.length}/{maxDays} days
                added)
              </p>
            </div>
          )}
        </header>

        {/* Main Content */}
        <div className="w-full mx-auto">
          {/* Action Buttons */}
          <div className="flex justify-start items-center gap-4 mb-10">
            <button
              type="button"
              onClick={addDay}
              disabled={!canAddMoreDays}
              className={`flex items-center cursor-pointer gap-3 px-5 py-3 font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-xl transform ${
                canAddMoreDays
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500/50 hover:shadow-2xl hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-md"
              }`}
            >
              <CalendarDays size={20} />
              {canAddMoreDays ? "Add New Day" : `Max ${maxDays} Days Reached`}
            </button>

            {showResetButton && (
              <ResetButtonComponent
                confirmReset={confirmReset}
                handleResetClick={handleResetClick}
              />
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {dayFields.map((day, dayIndex) => (
              <div key={day.id} className="relative">
                {/* Day Header with Date */}
                {dateRange.start && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl">
                    <h3 className="text-emerald-700 font-semibold">
                      Day {dayIndex + 1} -{" "}
                      {formatDate(getDateForDay(dateRange.start, dayIndex))}
                    </h3>
                  </div>
                )}

                <DayActivitiesComponent
                  dayIndex={dayIndex}
                  control={control}
                  register={register}
                  errors={errors}
                  onRemoveDay={() => handleRemoveDay(dayIndex)}
                  canRemoveDay={dayFields.length > 1}
                />
              </div>
            ))}

            {/* Form-level errors */}
            {errors.days?.message && (
              <div className="p-6 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <p className="text-red-600 font-medium">
                    {errors.days.message}
                  </p>
                </div>
              </div>
            )}

            {/* Missing Days Warning - Only show after submit attempt */}
            {shouldShowMissingDaysWarning && (
              <div className="p-4 bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-amber-700 font-medium">
                    Please add {missingDaysCount} more day
                    {missingDaysCount > 1 ? "s" : ""} to complete your event
                    agenda
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-12">
              <button
                type="button"
                onClick={onBack}
                className="px-4 py-3 cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-medium rounded-2xl hover:bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                ← Previous
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-3 cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit 🌿"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateAgendaComponent;
