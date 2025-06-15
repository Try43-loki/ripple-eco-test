const NotificationItem = ({ item, index }) => {
  const isUnread = item.read_at === null;

  return (
    <article
      key={index}
      className={`
          group relative p-4 rounded-xl border transition-all duration-200 hover:shadow-md
          ${
            isUnread
              ? "bg-blue-50/50 border-blue-200 hover:bg-blue-50"
              : "bg-white border-gray-200 hover:bg-gray-50"
          }
        `}
    >
      {/* Unread indicator dot */}
      {isUnread && (
        <div className="absolute top-3 right-3 w-2 h-2 bg-green rounded-full"></div>
      )}

      <div className="flex gap-4">
        {/* Avatar with online status */}
        <div className="relative flex-shrink-0">
          <img
            src="/assets/profileVolunteer.png"
            width={48}
            height={48}
            alt="Profile"
            className="rounded-full ring-2 ring-white shadow-sm"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header with name, action, and timestamp */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 text-sm">
                {item?.data?.sender_name || "Kimhout"}
              </span>
              <span className="text-gray-500 text-sm">
                {item?.data?.category || "mentioned you"}
              </span>
            </div>
          </div>

          {/* Message content */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 text-white text-sm shadow-sm">
            <p className="leading-relaxed">
              {item?.data?.message || "No message content available"}
            </p>
          </div>

          {/* Action buttons (show on hover) */}
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex gap-2">
              {isUnread && (
                <button className="px-3 cursor-pointer py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                  Mark as read
                </button>
              )}
              <button className="px-3 cursor-pointer py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NotificationItem;
