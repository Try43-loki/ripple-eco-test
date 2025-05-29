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

const NotificationItem = () => {
  const knockClient = useKnockClient();
  const feedClient = useNotifications(
    knockClient,
    process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID
  );

  const { items, metadata } = useNotificationStore(feedClient);

  useEffect(() => {
    feedClient.fetch();
  }, [feedClient]);

  console.log("items", items);
  console.log("metadata", metadata);

  const MarkReadAll = () => {
    feedClient.markAllAsRead();
  };

  const MarkRead = (item) => {
    feedClient.markAsRead(item);
  };
  {
    items?.map((item) => (
      <div key={item.id}>
        <div dangerouslySetInnerHTML={{ __html: item.blocks[0].rendered }} />
      </div>
    ));
  }
  return (
    <div className="notifications">
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="w-96 border border-light-strok">
          You have {metadata.total_count} unread items
          <section className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-meduim-green text-xl font-semibold">
                Notification
              </h1>
              <p>Mark all as read</p>
            </div>
            <NotificationTabs />
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default NotificationItem;
