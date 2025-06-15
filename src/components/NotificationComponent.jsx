"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useKnockClient,
  useNotifications,
  useNotificationStore,
} from "@knocklabs/react";
import { useEffect } from "react";
import NotificationTabs from "./NotificationTabComponent";
import { Bell } from "lucide-react";

const NotificationComponent = () => {
  const knockClient = useKnockClient();
  const feedClient = useNotifications(
    knockClient,
    process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID
  );

  const { items, metadata } = useNotificationStore(feedClient);

  useEffect(() => {
    feedClient.fetch();
  }, [feedClient]);

  const MarkReadAll = () => {
    feedClient.markAllAsRead();
  };
  const Archived = (item) => {
    feedClient.markAllAsArchived(item);
  };
  const MarkRead = (item) => {
    feedClient.markAsRead(item);
  };

  return (
    <div className="notifications">
      <Popover>
        <PopoverTrigger>
          <Bell className="cursor-pointer text-light-green" size={20} />
        </PopoverTrigger>
        <PopoverContent className="w-[400px] border border-light-strok bg-white">
          <section className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-meduim-green text-xl font-semibold">
                Notification
              </h1>
              <p className="cursor-pointer" onClick={MarkReadAll}>
                Mark all as read
              </p>
            </div>
            <NotificationTabs messages={items} markRead={MarkRead} />
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default NotificationComponent;
