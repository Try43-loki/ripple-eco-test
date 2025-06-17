import EmptyState from "./EmptyStateComponent";
import NotificationItem from "./NotificationItem";

const NotificationListComponent = ({
  notifications,
  onMarkAsRead,
  onArchive,
  type,
}) => {
  if (notifications.length === 0) {
    return <EmptyState type={type} />;
  }

  return (
    <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <div className="space-y-1 px-2">
        {notifications.map((item) => (
          <NotificationItem
            key={item.__key}
            item={item}
            onMarkAsRead={onMarkAsRead}
            onArchive={onArchive}
          />
        ))}
      </div>
    </div>
  );
};
export default NotificationListComponent;
