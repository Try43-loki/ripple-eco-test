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
    <main>
    <form onSubmit={handleSubmit}>
      
        <DialogHeader>
          <DialogTitle className="text-[24px] text-primary">
            Create Take Action
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-[11px] items-start">
            <Label htmlFor="title" className="text-[18px]">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter take action title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-[20px] py-[15px] h-[50px] bg-[#F2F2F2] rounded-[10px] placeholder:text-[14px] placeholder:text-[#848E9B] focus-visible:ring-[1px] focus-visible:ring-[#1da761]"
            />
          </div>

          <div className="flex flex-col gap-y-[11px] items-start">
            <Label htmlFor="send-to" className="text-[18px]">
              Send To
            </Label>
            <Input
              type="text"
              id="send-to"
              placeholder="e.g., @government"
              required
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              className="px-[20px] py-[15px] h-[50px] bg-[#F2F2F2] rounded-[10px] placeholder:text-[14px] placeholder:text-[#848E9B] focus-visible:ring-[1px] focus-visible:ring-[#1da761]"
            />
          </div>

          <div className="flex flex-col gap-y-[11px] items-start">
            <Label htmlFor="description" className="text-[18px]">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter take action description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-[100px] px-[20px] py-[15px] bg-[#F2F2F2] rounded-[10px] placeholder:text-[14px] placeholder:text-[#848E9B] focus-visible:ring-[1px] focus-visible:ring-[#1da761]"
            />
          </div>
          <h4 className="text-[18px] ">
              Image
          </h4>
          <div className="flex flex-col gap-y-[11px] items-center">
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
              className="h-[200px] w-[200px] border-dashed border-[#F97316] border-[1px] flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className=" object-cover h-full w-full"
                />
              ) : (
                <>
                  <ImagePlus className="mb-2 text-description w-[24px] h-[24px]" />
                  <span className="text-description text-[14px]">
                    Upload Image
                  </span>
                </>
              )}
            </Label>
          </div>
        </div>

        <DialogFooter className='mt-2.5'>
          <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            className="w-auto bg-[#FF3F34] hover:bg-[#FF3F34] text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
          >
            Cancel
          </Button>
          </DialogClose>
          
          <Button
            type="submit"
            variant="outline"
            className="w-auto bg-primary hover:bg-[#1da761] text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
          >
            Create Take Action
          </Button>
        </DialogFooter>
      
    </form>
    </main>
  );
};

export default PopupTakeActionForm;
