import SearchBarComponent from "@/components/SearchBarComponent";
import { ImagePlus, SearchCheck } from "lucide-react";
import React from "react";
import DiscussionButton from "../discussion-forums/_component/DiscussionButton";
import TakeActionCard from "./_component/TakeActionCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TakeActionPage = () => {
  return (
    <main>
      <HeroSection title={"Take Action"} />
      <section className="mt-[48px] flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-4 md:px-12 lg:px-32 my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent placeholder={"Search Discussion"} />

        {/* Create Discussion Button */}
        <Dialog>
          <DialogTrigger asChild className="bg-amber-400 w-[300px]">
            <Button
              variant="outline"
              className="w-auto bg-primary hover:bg-[#1da761] text-white hover:text-white  text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
            >
              Create Take Action
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[567px] p-[35px] rounded-[20px]">
            <DialogHeader>
              <DialogTitle className="text-[24px] text-primary">
                Create Take Action
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-y-[11px] items-start">
                <Label htmlFor="name" className="text-[18px]">
                  Title
                </Label>
                <Input
                  type={"text"}
                  id="title"
                  placeholder="Enter take action title"
                  className="px-[20px] focus-visible:ring-[1px] focus-visible:ring-[#1da761] py-[15px] h-[50px] placeholder:text-description placeholder:text-[14px] bg-[#F2F2F2] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-y-[11px] items-start">
                <Label htmlFor="username" className="text-right text-[18px]">
                  Send To
                </Label>
                <Input
                  type={"text"}
                  id="sent-to"
                  placeholder="e.g., @government"
                  className="px-[20px] py-[15px] h-[50px] focus-visible:ring-[1px] focus-visible:ring-[#1da761] placeholder:text-description placeholder:text-[14px] bg-[#F2F2F2] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-y-[11px] items-start ">
                <Label htmlFor="username" className="text-right text-[18px]">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter take action description"
                  rows={20}
                  resize="none"
                  className="h-[150px] px-[20px] py-[15px] focus-visible:ring-[1px] focus-visible:ring-[#1da761] bg-[#F2F2F2] placeholder:text-description placeholder:text-[14px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-y-[11px] items-start">
                <Label htmlFor="file" className="text-right text-[18px]">
                  Image
                </Label>
                <Input type={"file"} id="file" className="h-[97px] hidden" />
                <Label
                  htmlFor="file"
                  className="h-[97px] w-full border-dashed border-[#F97316] border-1 flex flex-col justify-center items-center cursor-pointer rounded-md"
                >
                  <ImagePlus className="mb-2 text-description w-[24px] h-[24px]" />
                  <span className="text-description text-[14px]">
                    Upload Image
                  </span>
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                className="w-auto bg-[#FF3F34] hover:bg-[#FF3F34] text-white hover:text-white  text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                className="w-auto bg-primary hover:bg-[#1da761] text-white hover:text-white  text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
              >
                Create Take Action
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="mt-[48px] mb-[48px] flex flex-row flex-wrap md:px-20 px-[150px] md:gap-y-10 gap-[20px] justify-center md:justify-evenly lg:justify-evenly">
        <TakeActionCard
          image={"/sub-banner.jpg"}
          title={"Stand Up to Plastic Pollution"}
          description={
            "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
          }
          support={"11,376"}
        />
        <TakeActionCard
          image={"/sub-banner.jpg"}
          title={"Stand Up to Plastic Pollution"}
          description={
            "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
          }
          support={"11,376"}
        />
        <TakeActionCard
          image={"/sub-banner.jpg"}
          title={"Stand Up to Plastic Pollution"}
          description={
            "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
          }
          support={"11,376"}
        />
        <TakeActionCard
          image={"/sub-banner.jpg"}
          title={"Stand Up to Plastic Pollution"}
          description={
            "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
          }
          support={"11,376"}
        />
      </section>
    </main>
  );
};

export default TakeActionPage;
