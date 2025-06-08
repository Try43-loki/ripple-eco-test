import { Clock, Trash2 } from "lucide-react";

const ActivityRowComponent = ({
  activity,
  activityIndex,
  dayIndex,
  register,
  errors,
  onRemove,
  canRemove,
}) => {
  const fieldError = errors?.days?.[dayIndex]?.activities?.[activityIndex];

  return (
    <div className="group relative w-full">
      <div className="flex items-center gap-4 p-4 bg-lighter-white backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300/50 transition-all duration-200">
        {/* Time Circle Indicator */}
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brown to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
          <Clock size={20} className="text-white" />
        </div>

        <div className="flex-1 space-y-3 ">
          <div className="flex gap-4 pb-3">
            {/* Time Input */}
            <div className="relative w-1/5">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                {...register(
                  `days.${dayIndex}.activities.${activityIndex}.time`
                )}
                className={`w-full px-4 py-3 text-sm font-medium bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 ${
                  fieldError?.time
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
              {fieldError?.time && (
                <div className="absolute -bottom-5 left-0 w-[300px]">
                  <p className="text-xs text-red-500 font-medium">
                    {fieldError.time.message}
                  </p>
                </div>
              )}
            </div>

            {/* Task Input */}
            <div className="flex-1 relative">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Task Description
              </label>
              <input
                type="text"
                placeholder="What needs to be done?"
                {...register(
                  `days.${dayIndex}.activities.${activityIndex}.task`
                )}
                className={`w-full px-4 py-3 text-sm bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 ${
                  fieldError?.task
                    ? "border-red-400 bg-red-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
              {fieldError?.task && (
                <div className="absolute -bottom-5 left-0">
                  <p className="text-xs text-red-500 font-medium">
                    {fieldError.task.message}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Remove Activity Button */}
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 opacity-100 cursor-pointer"
            title="Remove activity"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityRowComponent;
