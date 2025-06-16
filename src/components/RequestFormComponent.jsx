"use client";
import React, { useState } from "react";
import Image from "next/image";
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
import { volunteerRequestSchema } from "@/lib/zod/volunteerRequestSchema";
import { createVolunteerAction } from "@/action/VolunteerAction";

export function RequestFormComponent({ contribute, eventId }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(volunteerRequestSchema),
  });

  const onSubmit = async (data) => {
    const formData = {
      eventId: eventId,
      answer: data.answer,
    };
    const result = await createVolunteerAction(formData);
    console.table(formData);
    if (result?.data?.status === 201) {
      reset();
      setIsOpen(false);
    } else {
      console.error("Error creating volunteer request:", result?.data?.detail);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="py-2 cursor-pointer px-8 md:px-11 lg:px-10 bg-light-gray rounded-md w-full flex justify-center items-center gap-2">
          <Image
            src="/assets/volunteer-hand.png" // Update with your volunteer icon
            alt="volunteer-icon"
            width={20}
            height={10}
            className="h-5"
          />
          <p className="text-sm text-dark-green font-bold cursor-pointer">
            Volunteer
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white border-none">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-dark-green font-medium text-lg mb-4.5">
              Volunteer Form
            </DialogTitle>

            <DialogDescription className="text-dark-green text-sm font-normal">
              <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
              Why do you want to volunteer for this event?
            </DialogDescription>

            <hr className="text-meduim-gray my-2" />

            <DialogDescription>
              <label className="block text-dark-green text-sm font-normal mb-2">
                <span className="w-2 h-2 bg-green rounded-full inline-block mr-2" />
                Your answer
              </label>
              <textarea
                className="w-full min-h-[150px] bg-light-gray rounded-2xl p-3 text-sm resize-none focus:outline-none focus:ring-0 focus:border-none"
                placeholder="Type your answer here..."
                {...register("answer")}
              />
              {errors.answer && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.answer.message}
                </p>
              )}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-green hover:bg-meduim-green px-8 py-2 rounded-xl cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
