import { Archive, Bell, Eye } from "lucide-react";

const EmptyState = ({ type }) => {
  const messages = {
    all: "No notifications yet",
    unread: "All caught up! No unread notifications",
    archived: "No archived notifications",
  };

  const icons = {
    all: Bell,
    unread: Eye,
    archived: Archive,
  };

  const Icon = icons[type];

  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-gray-400" />
      </div>
      <p className="text-gray-500 font-medium text-sm">{messages[type]}</p>
      <p className="text-gray-400 text-xs mt-1">
        {type === "all"
          ? "You'll see new notifications here"
          : "Check back later"}
      </p>
    </div>
  );
};
export default EmptyState;
