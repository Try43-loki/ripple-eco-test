"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CreateDiscussionComponent = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Trigger Button */}
      {/* <DialogTrigger asChild>
        <Button
          variant="default"

          className="py-4 px-5 bg-green text-white rounded-2xl hover:bg-green/80"
        >
          Start the Discussion
        </Button>
      </DialogTrigger> */}

      {/* Dialog Content */}
      <DialogContent className="w-full  bg-white border border-lightes-white">
        <DialogHeader>
          <DialogTitle className="cursor-pointer">
            Create Discussion
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {/* Form Fields */}
        <form>
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter discussion title"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
            />
          </div>

          {/* Tags Input */}
          <div className="mb-4 flex flex-col gap-2">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Add tags"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
              />
              <button
                type="button"
                className="bg-green text-white px-4 py-1 rounded-md hover:bg-green/80 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter discussion"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <div
              className="mt-1 relative cursor-pointer border-2 border-dashed border-orange-400 rounded-md px-6 py-10 text-center"
              style={{ minHeight: "120px" }}
            >
              <Image
                src="/assets/upload-icon.png"
                alt="Upload icon"
                width={24}
                height={24}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-500">Upload image</p>
            </div>
          </div>

          {/* Submit Buttons */}
          <DialogFooter>
            <Button type="submit" className="bg-lighter-white">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green text-white hover:bg-green/80"
            >
              Create Discussion
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDiscussionComponent;
