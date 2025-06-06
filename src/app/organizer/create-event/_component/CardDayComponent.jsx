import { PlusCircleIcon, TrashIcon } from "lucide-react";
import ActivityRowComponent from "./ActivityRowComponent";

const DayCardComponent = ({
  day,
  dayIndex,
  onRemoveDay,
  onAddActivity,
  onRemoveActivity,
  onUpdateActivity,
  canRemoveDay,
}) => (
  <div className=" border border-light-strok rounded-xl p-6">
    {/* Day Header */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center flex-grow space-x-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Day {dayIndex + 1}
        </h2>
      </div>
      {canRemoveDay && (
        <button
          type="button"
          onClick={() => onRemoveDay(day.id)}
          className="p-2 cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
          aria-label="Remove day"
        >
          <TrashIcon size={18} />
        </button>
      )}
    </div>

    {/* Activities */}
    <div className="space-y-4">
      {day.activities.map((activity, activityIndex) => (
        <ActivityRowComponent
          key={activity.id}
          activity={activity}
          activityIndex={activityIndex}
          dayId={day.id}
          onUpdate={onUpdateActivity}
          onRemove={onRemoveActivity}
          canRemove={day.activities.length > 1}
        />
      ))}
    </div>

    {/* Add Activity Button */}
    <button
      type="button"
      onClick={() => onAddActivity(day.id)}
      className="flex  gap-x-2 cursor-pointer items-center text-green-600 hover:text-green-700 font-medium mt-4 transition-colors"
    >
      <PlusCircleIcon size={18} />
      Add Activity
    </button>
  </div>
);

export default DayCardComponent;
