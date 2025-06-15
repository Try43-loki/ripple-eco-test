import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { NotificationManageComponent } from "./NotificatonManageComponent";
import { Bell, Archive, Eye } from "lucide-react";
import NotificationItem from "./NotificationItem";

export default function NotificationTabs({ messages = [] }) {
  // Filter notifications by status
  const allMessages = messages;
  const unreadMessages = messages.filter((item) => item.read_at === null);
  const archivedMessages = messages.filter((item) => item.archived === true);

  // Helper function to format timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "Just now";

    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInMs = now - messageTime;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return messageTime.toLocaleDateString();
  };

  // Notification item component for better reusability

  // Empty state component
  const EmptyState = ({ type }) => {
    const emptyStates = {
      all: {
        icon: Bell,
        title: "No notifications yet",
        description: "When you receive notifications, they'll appear here.",
      },
      unread: {
        icon: Eye,
        title: "All caught up!",
        description: "You have no unread notifications.",
      },
      archived: {
        icon: Archive,
        title: "No archived notifications",
        description: "Archived notifications will appear here.",
      },
    };

    const state = emptyStates[type];
    const Icon = state.icon;

    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {state.title}
        </h3>
        <p className="text-gray-500 max-w-sm">{state.description}</p>
      </div>
    );
  };

  return (
    <div className="w-full  mx-auto mt-2">
      <Tabs defaultValue="all" className="w-full">
        {/* Modern tab navigation */}
        <TabsList className="flex justify-between items-center  ">
          <TabsTrigger
            value="all"
            className="rounded-lg h-10 px-2   font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
          >
            <Bell className="w-4 h-4 mr-2" />
            All
            {allMessages.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
                {allMessages.length}
              </span>
            )}
          </TabsTrigger>

          <TabsTrigger
            value="unread"
            className="rounded-lg h-10 px-2  font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
          >
            <Eye className="w-4 h-4 mr-2" />
            Unread
            {unreadMessages.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                {unreadMessages.length}
              </span>
            )}
          </TabsTrigger>

          <TabsTrigger
            value="archived"
            className="rounded-lg h-10 px-2   font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
          >
            <Archive className="w-4 h-4 mr-2" />
            Archived
            {archivedMessages.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
                {archivedMessages.length}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Enhanced Tab Contents with glassmorphism */}
        <div className="relative overflow-hidden mt-2">
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
          <TabsContent
            value="all"
            className=" data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 duration-300"
          >
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {allMessages.length > 0 ? (
                <div className="p-6 space-y-4">
                  {allMessages.map((item, index) => (
                    <NotificationItem key={index} item={item} index={index} />
                  ))}
                </div>
              ) : (
                <EmptyState type="all" />
              )}
            </div>
          </TabsContent>

          <TabsContent
            value="unread"
            className="m-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 duration-300"
          >
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
              {unreadMessages.length > 0 ? (
                <div className="p-6 space-y-4">
                  {unreadMessages.map((item, index) => (
                    <NotificationItem key={index} item={item} index={index} />
                  ))}
                </div>
              ) : (
                <EmptyState type="unread" />
              )}
            </div>
          </TabsContent>

          <TabsContent
            value="archived"
            className="m-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 duration-300"
          >
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
              {archivedMessages.length > 0 ? (
                <div className="p-6 space-y-4">
                  {archivedMessages.map((item, index) => (
                    <NotificationItem key={index} item={item} index={index} />
                  ))}
                </div>
              ) : (
                <EmptyState type="archived" />
              )}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
