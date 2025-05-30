import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Clock,
  Edit,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  SquarePen,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ArchivesComponent from "./ArchivesComponent";
import EditprofileComponent from "./EditprofileComponent";

const OrganizerProfileComponent = () => (
  <>
    <section className="rounded-2xl px-5 py-6 w-full border-light-gray border-1 drop-shadow-lg">
      <div className="flex items-start justify-between">
        <Image
          src="/badges/no profile icon.jpg"
          alt="Picture of the author"
          width={110}
          height={110}
          className="rounded-full"
        />
        <EditprofileComponent/>
      </div>
      <article className="flex flex-col items-start gap-y-2 mt-2.5">
        <h2 className="text-xl">United Nations Environment Program (UNEP)</h2>
        <p className="text-strong-gray text-sm">
          We Interesting to apply our support to the earth.It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout
        </p>
      </article>
      <hr className="h-0.5 text-light-gray my-2" />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
          <Phone className="w-4.5 h-4.5" />
          <p>012-333-334</p>
        </div>
        <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
          <MapPin className="w-4.5 h-4.5" />
          <p>Phnom Penh</p>
        </div>
        <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
          <Mail className="w-4.5 h-4.5" />
          <p>UNEP@gmail.com</p>
        </div>
      </div>
    </section>

    <section className="w-full mt-5">
      <Tabs defaultValue="earned-badge" className="w-full">
        <section className="flex flex-row items-center gap-x-0.5 w-full">
          <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-1.5 border-2 border-light-gray drop-shadow-light-gray">
          <TabsTrigger
            value="earned-badge"
            className={cn(
              "text-sm sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
              "data-[state=active]:bg-meduim-green data-[state=active]:text-white", "w-45"
            )}  
          >
            <Clock className="w-4.5 h-4.5" />
            <p>Earned Badge</p>
          </TabsTrigger>

          <TabsTrigger
            value="archive-post"
            className={cn(
              "text-sm sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
              "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
            )}
          >
            <MessagesSquare className="w-4.5 h-4.5" />
            <p>Archives</p>
          </TabsTrigger>
        </TabsList>
        <hr className="border-t-2 border-light-gray w-full" />
        </section>
        
        <TabsContent value="archive-post" className="mt-5 w-full">
          <ArchivesComponent />
        </TabsContent>
        <TabsContent
          value="earned-badge"
          className="mt-5 w-full flex flex-row items-center"
        >
          <Image
            src="/badges/eco organizer.png"
            width={110}
            height={110}
            alt="Eco Organizer"
          />
          <Image
            src="/badges/green leader.png"
            width={110}
            height={110}
            alt="Eco Organizer"
          />
          <Image
            src="/badges/hero organizer.png"
            width={110}
            height={110}
            alt="Eco Organizer"
          />
        </TabsContent>
      </Tabs>
    </section>
  </>
);

export default OrganizerProfileComponent;
