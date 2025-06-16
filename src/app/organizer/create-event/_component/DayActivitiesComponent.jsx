import { useFieldArray } from "react-hook-form";
import ActivityRowComponent from "./ActivityRowComponent";
import { PlusCircle, Trash2 } from "lucide-react";

const DayActivitiesComponent = ({
  dayIndex,
  control,
  register,
  errors,
  onRemoveDay,
  canRemoveDay,
}) => {
  const {
    fields: activityFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `days.${dayIndex}.activities`,
  });

  const dayError = errors?.days?.[dayIndex];

  const addActivity = () => {
    append({ time: "", task: "" });
  };

  const removeActivity = (activityIndex) => {
    if (activityFields.length > 1) {
      remove(activityIndex);
    }
  };

  return (
    <div className="relative group w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>

      {/* Card Content */}
      <div className="relative p-4 bg-white/60 backdrop-blur-sm  rounded-3xl  transition-all duration-300 border border-light-strok">
        {/* Day Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Day Number Badge */}
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">
                {dayIndex + 1}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 ">
                Day {dayIndex + 1}
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                {activityFields.length}{" "}
                {activityFields.length === 1 ? "activity" : "activities"}{" "}
                planned
              </p>
            </div>
          </div>

          {canRemoveDay && (
            <button
              type="button"
              onClick={onRemoveDay}
              className="w-12 h-12 flex items-center cursor-pointer justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 opacity-100 "
              title="Remove day"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>

        {/* Activities */}
        <div className="space-y-6">
          {activityFields.map((activity, activityIndex) => (
            <ActivityRowComponent
              key={activity.id}
              activity={activity}
              activityIndex={activityIndex}
              dayIndex={dayIndex}
              register={register}
              errors={errors}
              onRemove={() => removeActivity(activityIndex)}
              canRemove={activityFields.length > 1}
            />
          ))}
        </div>

        {/* Day-level errors */}
        {dayError?.activities?.message && (
          <div className="mt-6 p-4 bg-red-50/80 border border-red-200/50 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-red-600 font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              {dayError.activities.message}
            </p>
          </div>
        )}

        {/* Add Activity Button */}
        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={addActivity}
            className="flex items-center gap-3 px-6 py-3 text-green cursor-pointer"
          >
            <PlusCircle size={20} />
            Add Activity
          </button>
        </div>
      </div>
    </div>
  );
};
export default DayActivitiesComponent;
