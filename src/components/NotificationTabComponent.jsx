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
import Image from "next/image";

export default function NotificationTabs() {
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
        <section>
          <div className="flex justify-between items-center">
            <Image
              src="/assets/profileVolunteer.png"
              width={50}
              height={50}
            ></Image>
            <p>pepeo</p>
          </div>
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
