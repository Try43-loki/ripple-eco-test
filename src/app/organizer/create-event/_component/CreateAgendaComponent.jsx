"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Calendar,
  CalendarDays,
  PlusCircleIcon,
  RefreshCcw,
} from "lucide-react";
import ResetButtonComponent from "./ResetButtonComponent";
import CardDayComponent from "./CardDayComponent";
import ActivityRowComponent from "./ActivityRowComponent";

// Utility function to generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 11);

// Validation Schema
const AgendaSchema = {
  validateDay: (day, dayIndex) => {
    const errors = [];

    if (!day.activities || day.activities.length === 0) {
      errors.push(`Day ${dayIndex + 1}: At least one activity is required`);
    }

    return errors;
  },

  validateActivity: (activity, activityIndex, dayIndex) => {
    const errors = [];

    if (!activity.time) {
      errors.push(
        `Day ${dayIndex + 1}, Activity ${activityIndex + 1}: Time is required`
      );
    } else if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(activity.time)) {
      errors.push(
        `Day ${dayIndex + 1}, Activity ${
          activityIndex + 1
        }: Invalid time format`
      );
    }

    if (!activity.task || activity.task.trim() === "") {
      errors.push(
        `Day ${dayIndex + 1}, Activity ${
          activityIndex + 1
        }: Task description is required`
      );
    } else if (activity.task.trim().length < 3) {
      errors.push(
        `Day ${dayIndex + 1}, Activity ${
          activityIndex + 1
        }: Task description must be at least 3 characters`
      );
    }

    return errors;
  },

  validateAgenda: (days) => {
    const errors = [];

    if (!days || days.length === 0) {
      errors.push("At least one day is required");
      return errors;
    }

    // Validate each day
    days.forEach((day, dayIndex) => {
      // errors.push(...AgendaSchema.validateDay(day, dayIndex));

      // Validate activities for this day
      if (day.activities) {
        day.activities.forEach((activity, activityIndex) => {
          errors.push(
            ...AgendaSchema.validateActivity(activity, activityIndex, dayIndex)
          );
        });
      }
    });

    // Check for duplicate dates
    const dates = days.map((day) => day.date).filter((date) => date);
    const duplicates = dates.filter(
      (date, index) => dates.indexOf(date) !== index
    );
    if (duplicates.length > 0) {
      errors.push(
        `Duplicate dates found: ${[...new Set(duplicates)].join(", ")}`
      );
    }

    return errors;
  },
};

// Initial data structures
const createNewActivity = () => ({
  id: generateId(),
  time: "",
  task: "",
});

const createNewDay = () => ({
  id: generateId(),
  activities: [createNewActivity()],
});

function CreateAgendaComponent({ setFormData, formData, onBack }) {
  // State management
  const [days, setDays] = useState([createNewDay()]);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear errors when data changes
  const clearErrors = () => {
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  // Function to reset form to initial state
  const resetForm = () => {
    setDays([createNewDay()]);
    setErrors([]);
    setIsSubmitting(false);
  };

  // Day management functions
  const addDay = () => {
    setDays((prevDays) => [...prevDays, createNewDay()]);
    clearErrors();
  };

  const removeDay = (dayId) => {
    if (days.length > 1) {
      setDays((prevDays) => prevDays.filter((day) => day.id !== dayId));
      clearErrors();
    }
  };

  // Activity management functions
  const addActivity = (dayId) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? { ...day, activities: [...day.activities, createNewActivity()] }
          : day
      )
    );
    clearErrors();
  };

  const removeActivity = (dayId, activityId) => {
    setDays((prevDays) =>
      prevDays.map((day) => {
        if (day.id === dayId && day.activities.length > 1) {
          return {
            ...day,
            activities: day.activities.filter(
              (activity) => activity.id !== activityId
            ),
          };
        }
        return day;
      })
    );
    clearErrors();
  };

  const updateActivity = (dayId, activityId, field, value) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              activities: day.activities.map((activity) =>
                activity.id === activityId
                  ? { ...activity, [field]: value }
                  : activity
              ),
            }
          : day
      )
    );
    clearErrors();
  };

  // Form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the agenda
      const validationErrors = AgendaSchema.validateAgenda(days);

      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }

      // Clean and prepare data
      const cleanedAgenda = days.map((day) => ({
        activities: day.activities
          .filter((activity) => activity.time && activity.task?.trim())
          .map((activity) => ({
            time: activity.time,
            task: activity.task.trim(),
          })),
      }));

      // Update parent form data
      setFormData((prevFormData) => ({
        ...prevFormData,
        agenda: cleanedAgenda,
      }));

      // Clear the form after successful submission
      resetForm();

      console.log("Agenda submitted successfully:", cleanedAgenda);
    } catch (error) {
      setErrors([`Submission failed: ${error.message}`]);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if reset button should be shown
  const shouldShowResetButton = () => {
    return (
      days.length > 1 || (days.length === 1 && days[0].activities.length > 1)
    );
  };

  return (
    <section className="w-full  mx-auto">
      <div className="w-full">
        {/* Action Buttons */}
        <div className="flex space-x-3 mb-6">
          <button
            type="button"
            onClick={addDay}
            className="flex items-center px-4 py-2 gap-2 bg-blue cursor-pointer hover:bg-cyan-700 text-white rounded-lg"
          >
            <CalendarDays size={20} />
            Add Day
          </button>
          {shouldShowResetButton() && (
            <ResetButtonComponent onReset={resetForm} disabled={isSubmitting} />
          )}
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {days.map((day, dayIndex) => (
            <CardDayComponent
              key={day.id}
              day={day}
              dayIndex={dayIndex}
              onRemoveDay={removeDay}
              onAddActivity={addActivity}
              onRemoveActivity={removeActivity}
              onUpdateActivity={updateActivity}
              canRemoveDay={days.length > 1}
            />
          ))}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateAgendaComponent;
