import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Clock, Mail, MapPin, MessagesSquare, Phone, SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";
import CardEcoEvnentOrgProfile from "./CardEcoEvnentOrgProfile";

const OrganizerProfileComponent = () => (
    <>
        <section className="rounded-2xl px-5 py-6 w-200 border-light-gray border-1 drop-shadow-lg">
            <div className="flex items-start justify-between">
                <Image
                    src="/assets/profileVolunteer.png"
                    alt="Picture of the author"
                    width={110}
                    height={110}
                    className="rounded-full" />
                <SquarePen className="w-6 h-6 text-strong-gray" />
            </div>
            <article className="flex flex-col items-start gap-y-2 mt-2.5">
                <h2 className="text-xl">United Nations Environment Program (UNEP)</h2>
                <p className="text-strong-gray text-sm">
                    We Interesting to apply our support to the earth.It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout{" "}
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

        <section className="w-200 mt-5">
            <Tabs defaultValue="earned-badge" className="w-full">
                <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-1.5 border-1 border-border w-85">
                    <TabsTrigger
                        value="earned-badge"
                        className={cn(
                            "text-sm sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
                            "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
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
                <TabsContent value="earned-badge" className="mt-2.5 w-full">
                    <CardEcoEvnentOrgProfile />
                </TabsContent>
            </Tabs>
        </section>
    </>
);

export default OrganizerProfileComponent;
