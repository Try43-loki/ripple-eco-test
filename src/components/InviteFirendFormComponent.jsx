"use client";
import React from "react";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

const handleClickInvite = (eventId) => {
  const url = `https://ripple-ui.kshrd.app/eco-event/${eventId}`;
  console.log("Event URL:", url);
};

const InviteFirendFormComponent = ({ eventId }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Mail size={18} />
        </DialogTrigger>

        <DialogContent className="sm:max-w-md bg-white border-none">
          <DialogHeader>
            <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
              Invite Friend Form
            </DialogTitle>

            <div className="">
              <DialogDescription className="grid w-full items-center gap-1.5 relative">
                <label
                  htmlFor="email"
                  className="block text-light-green text-sm font-normal mb-2"
                >
                  Email
                </label>

                <span className="flex text-label gap-1 top-[36px] left-2.5 absolute text-gray-500">
                  <span className="pt-3">
                    <Mail size={14} />
                  </span>

                  <span className="pt-2">|</span>
                </span>
                <form action="">
                  <textarea
                    className="flex justify-end items-end pt-2 text-gray-600 bg-lighter-white pl-9 text-label  placeholder:text-strong-gray placeholder:font-light h-10 focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    required
                    type="email"
                    id="email"
                    placeholder="exaple@gmaill.com"
                  />
                </form>
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter className="sm:justify-end">
            {/* <button className="text-white bg-green px-8 py-2 rounded-xl cursor-pointer">
              Invite
            </button> */}

            <DialogClose asChild>
              <Button
                onClick={() => handleClickInvite(eventId)}
                type="button"
                // variant="secondary"
                className="text-white bg-green hover:bg-meduim-green px-8 py-2 rounded-xl cursor-pointer"
              >
                Invite
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InviteFirendFormComponent;
