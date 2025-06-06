import { TrashIcon } from "lucide-react";

// Activity Row Component
const ActivityRowComponent = ({
  activity,
  activityIndex,
  dayId,
  onUpdate,
  onRemove,
  canRemove,
}) => (
  <div className="grid grid-cols-12 gap-4 items-end">
    {/* Time Input */}
    <div className="col-span-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Time *
      </label>
      <input
        type="time"
        value={activity.time}
        onChange={(e) => onUpdate(dayId, activity.id, "time", e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>

    {/* Task Input */}
    <div className="col-span-8">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Activity Description *
      </label>
      <input
        type="text"
        placeholder="Describe what happens during this time"
        value={activity.task}
        onChange={(e) => onUpdate(dayId, activity.id, "task", e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
        minLength={3}
      />
    </div>

    {/* Remove Button */}
    <div className="col-span-1 flex justify-end">
      {canRemove && (
        <button
          type="button"
          onClick={() => onRemove(dayId, activity.id)}
          className="p-2 cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
          aria-label="Remove activity"
        >
          <TrashIcon size={18} />
        </button>
      )}
    </div>
  </div>
);

export default ActivityRowComponent;
