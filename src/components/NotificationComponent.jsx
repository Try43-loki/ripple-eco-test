"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useKnockClient,
  useNotifications,
  useNotificationStore,
} from "@knocklabs/react";
import { useEffect, useState } from "react";
import { Bell, Eye, Archive } from "lucide-react";
import NotificationListComponent from "./NotifcationLIstComponent";

const CountBadge = ({ count, variant = "default" }) => {
  if (count === 0) return null;

  const variants = {
    default: "bg-gray-200 text-gray-700",
    unread: "bg-blue-500 text-white",
  };

  return (
    <span
      className={`px-1 py-0.5 text-xs rounded-full min-w-[16px] text-center leading-none ${variants[variant]}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
};

const NotificationComponent = () => {
  const knockClient = useKnockClient();
  const feedClient = useNotifications(
    knockClient,
    process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID
  );

  const { items = [], metadata } = useNotificationStore(feedClient);

  const [filteredNotifications, setFilteredNotifications] = useState({
    all: [],
    unread: [],
    archived: [],
  });

  const [counts, setCounts] = useState({
    all: 0,
    unread: 0,
    archived: 0,
  });

  // Fetch notifications on mount
  useEffect(() => {
    feedClient.fetch();
  }, [feedClient]);

  // Filter notifications when items change
  useEffect(() => {
    const itemsWithKeys = items.map((item, index) => ({
      ...item,
      __key: item.id || `item-${index}-${item.inserted_at || Date.now()}`,
    }));

    const filtered = {
      all: itemsWithKeys,
      unread: itemsWithKeys.filter((item) => !item.read_at),
      archived: itemsWithKeys.filter((item) => !item.archived_at === null),
    };

    setFilteredNotifications(filtered);

    setCounts({
      all: filtered.all.length,
      unread: filtered.unread.length,
      archived: filtered.archived.length,
    });
  }, [items]);

  // Handler functions
  const handleMarkAllAsRead = () => {
    feedClient.markAllAsRead();
  };

  const handleArchive = (item) => {
    feedClient.markAsArchived(item);
  };

  const handleMarkAsRead = (item) => {
    feedClient.markAsRead(item);
  };

  return (
    <div className="notifications">
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative p-1 rounded-md hover:bg-gray-100 transition-colors">
            <Bell
              className="text-light-green hover:text-light-green/80 transition-colors"
              size={20}
            />
            {counts.unread > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[380px] border border-light-strok bg-white shadow-lg p-0"
          align="end"
          sideOffset={5}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-meduim-green text-lg font-semibold">
                Notifications
              </h2>
              {counts.all > 0 && (
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors px-2 py-1 rounded hover:bg-blue-50"
                  onClick={handleMarkAllAsRead}
                >
                  Mark all read
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <div className="px-4 pt-3">
              <TabsList className="grid w-full grid-cols-3 bg-gray-50 rounded-md p-0.5 h-9">
                <TabsTrigger
                  value="all"
                  className="flex items-center gap-1.5 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all py-1.5"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>All</span>
                  <CountBadge count={counts.all} />
                </TabsTrigger>

                <TabsTrigger
                  value="unread"
                  className="flex items-center gap-1.5 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all py-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Unread</span>
                  <CountBadge count={counts.unread} variant="unread" />
                </TabsTrigger>

                <TabsTrigger
                  value="archived"
                  className="flex items-center gap-1.5 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all py-1.5"
                >
                  <Archive className="w-3.5 h-3.5" />
                  <span>Archived</span>
                  <CountBadge count={counts.archived} />
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="mt-2">
              <TabsContent value="all" className="m-0">
                <NotificationListComponent
                  notifications={filteredNotifications.all}
                  onMarkAsRead={handleMarkAsRead}
                  onArchive={handleArchive}
                  type="all"
                />
              </TabsContent>

              <TabsContent value="unread" className="m-0">
                <NotificationListComponent
                  notifications={filteredNotifications.unread}
                  onMarkAsRead={handleMarkAsRead}
                  onArchive={handleArchive}
                  type="unread"
                />
              </TabsContent>

              <TabsContent value="archived" className="m-0">
                <NotificationListComponent
                  notifications={filteredNotifications.archived}
                  onMarkAsRead={handleMarkAsRead}
                  onArchive={handleArchive}
                  type="archived"
                />
              </TabsContent>
            </div>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NotificationComponent;
