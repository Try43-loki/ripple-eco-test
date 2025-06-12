"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CalendarDays,
  PlusCircle,
  Trash2,
  Clock,
  RefreshCcw,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { agendaSchema } from "@/lib/zod/AgendaSchema";
import DayActivitiesComponent from "./DayActivitiesComponent";
import ResetButtonComponent from "./ResetButtonComponent";
import { createEventAction } from "@/action/createEventAction";
// Main Component
function CreateAgendaComponent({ setFormData, formData, onBack }) {
  const [showResetDialog, setShowResetDialog] = useState(false);

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

  // Form handlers
  const onSubmit = async (data) => {
    try {
      // Clean and format the data
      const cleanedAgenda = data.days.map((day) => ({
        activities: day.activities.map((activity) => ({
          time: activity.time,
          task: activity.task.trim(),
        })),
      }));

      setFormData((prevFormData) => ({
        ...prevFormData,
        agenda: cleanedAgenda,
      }));
      const res = await createEventAction(formData);
      console.log("Form data submitted:", res);
      performReset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  console.log("Form data submitted:", formData);
  const performReset = () => {
    reset({
      days: [
        {
          activities: [{ time: "", task: "" }],
        },
      ],
    });
  };

  const handleResetClick = () => {
    setShowResetDialog(true);
  };

  const confirmReset = () => {
    performReset();
    setShowResetDialog(false);
  };

  const addDay = () => {
    appendDay({
      activities: [{ time: "", task: "" }],
    });
  };

  const handleRemoveDay = (dayIndex) => {
    if (dayFields.length > 1) {
      removeDay(dayIndex);
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

  return (
    <>
      <section className=" mb-10  w-full">
        {/* Header */}
        <header className=" text-dark-green mb-4">
          <h1 className="text-2xl font-semibold">Event Agenda</h1>
        </header>

        {/* Main Content */}
        <div className="w-full mx-auto">
          {/* Action Buttons */}
          <div className="flex justify-start items-center gap-4  mb-10">
            <button
              type="button"
              onClick={addDay}
              className="flex items-center cursor-pointer gap-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <CalendarDays size={20} />
              Add New Day
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
              <DayActivitiesComponent
                key={day.id}
                dayIndex={dayIndex}
                control={control}
                register={register}
                errors={errors}
                onRemoveDay={() => handleRemoveDay(dayIndex)}
                canRemoveDay={dayFields.length > 1}
              />
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
                className="px-4 py-3 cursor-pointer    bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none"
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
