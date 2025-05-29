import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eclipse, Ellipsis } from "lucide-react";
import Image from "next/image";
import { NotificationManageComponent } from "./NotificatonManageComponent";

export default function NotificationTabs({ messages }) {
  const unreadItems = messages?.filter((item) => item.read_at === null);
  const readItems = messages?.filter((item) => item.read_at !== null);
  return (
    <Tabs defaultValue="account" className="w-full mt-4">
      <TabsList className="flex justify-between items-center w-full text-dark-green rounded-none">
        <TabsTrigger value="All">All</TabsTrigger>
        <TabsTrigger value="Unread">Unread</TabsTrigger>
        <TabsTrigger value="Mention">Mention</TabsTrigger>
        <TabsTrigger value="Archived">Archived</TabsTrigger>
      </TabsList>
      <hr className="border border-light-strok " />
      <TabsContent
        className="border border-light-strok rounded-2xl p-4"
        value="All"
      >
        <section className="flex justify-center items-center flex-col gap-2">
          {messages?.map((item, index) => (
            <article
              key={index}
              className="flex justify-center flex-col items-center border-b border-lighter-green py-2 w-full"
            >
              <div className="flex justify-start items-start gap-x-4 w-full">
                <Image
                  src="/assets/profileVolunteer.png"
                  width={50}
                  height={50}
                  alt="profileVolunteer"
                ></Image>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-start flex-col">
                      <p className="text-sm text-lighter-green font-light ">
                        <span className="font-semibold text-meduim-green">
                          Kimhout
                        </span>{" "}
                        {item?.data?.category}
                      </p>
                      <p className="text-[12px] text-meduim-gray">Just now</p>
                    </div>
                    <NotificationManageComponent />
                  </div>
                  <article className="bg-meduim-green rounded-lg p-2 mt-2 text-white text-sm w-full">
                    <p>{item.data.message}</p>
                  </article>
                </div>
              </div>
            </article>
          ))}
        </section>
      </TabsContent>
      <TabsContent value="Unread">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
