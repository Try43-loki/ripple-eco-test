import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import React from "react";

function CreateEventComponent() {
  return (
    <>
      <form
        action=""
        className="flex justify-center items-center flex-col gap-y-5"
      >
        {/* section one */}
        <div className="flex justify-center items-center w-full gap-x-5">
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </div>
        {/* section two */}
        <div className="flex justify-center items-center w-full gap-x-5">
          <div className="flex justify-center items-center w-1/3 gap-x-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="flex justify-center items-center w-2/3 gap-x-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
        </div>
        {/* section tree */}
        <div className="flex justify-center items-center w-full gap-x-5">
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </div>
        {/* section four */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            className="h-20"
            placeholder="Type your message here."
            id="message"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center gap-x-1 text-lg text-white bg-green rounded-xl h-10 w-28 self-end"
        >
          Next <ArrowRight size={15} />
        </button>
      </form>
    </>
  );
}

export default CreateEventComponent;
