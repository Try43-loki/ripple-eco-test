"use client";
import React, { useState } from "react";
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
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inviteFriendSchema } from "@/lib/zod/eventShcema";
import { inviteFriendAction } from "@/action/createEventAction";

const InviteFriendFormComponent = ({ eventId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inviteFriendSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    const eventUrl = `https://ripple-ui.kshrd.app/eco-event/${eventId}`;
    const formatData = {
      email: data.email,
      eventUrl,
    };

    console.log("Form submitted:", formatData);

    const result = await inviteFriendAction(formatData);

    if (result?.success) {
      reset();
      setIsOpen(false);
    } else {
      console.error("Invite failed:", result?.error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Mail size={18} className="cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white border-none">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
              Invite Friend Form
            </DialogTitle>

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

              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                {...register("email")}
                className=" py-2 flex justify-end items-end pt-2 text-gray-600 bg-lighter-white pl-9 text-label placeholder:text-strong-gray placeholder:font-light h-10 focus-visible:ring-0 border-none rounded-md w-full outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-end mt-4">
            <Button
              type="submit"
              className="text-white bg-green hover:bg-meduim-green px-8 py-2 rounded-xl cursor-pointer"
            >
              Invite
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteFriendFormComponent;
