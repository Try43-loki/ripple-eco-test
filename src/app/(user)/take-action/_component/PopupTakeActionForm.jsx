"use client";

import React, { useState } from "react";
import { ImagePlus } from "lucide-react";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PopupTakeActionForm = () => {
  const [title, setTitle] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">
            Create Take Action
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="title" className="text-lg">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter take action title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-5 py-3 h-12 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
            />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="send-to" className="text-lg">
              Send To
            </Label>
            <Input
              type="text"
              id="send-to"
              placeholder="e.g., @government"
              required
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              className="px-5 py-3 h-12 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
            />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="description" className="text-lg">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter take action description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-24 px-5 py-3 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
            />
          </div>

          <h4 className="text-lg">Image</h4>

          <div className="flex flex-col gap-3 items-center">
            <Input
              type="file"
              id="file"
              className="hidden"
              accept="image/*"
              required
              onChange={handleFileChange}
            />
            <Label
              htmlFor="file"
              className="h-52 w-52 border border-dashed border-orange flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover h-full w-full"
                />
              ) : (
                <>
                  <ImagePlus className="mb-2 text-description w-6 h-6" />
                  <span className="text-description text-sm">Upload Image</span>
                </>
              )}
            </Label>
          </div>
        </div>

        <DialogFooter className="mt-2.5">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="w-auto bg-red hover:bg-red text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="submit"
            variant="outline"
            className="w-auto bg-meduim-green hover:bg-green hover:text-white text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
          >
            Create Take Action
          </Button>
        </DialogFooter>
      </form>
    </main>
  );
};

export default PopupTakeActionForm;
