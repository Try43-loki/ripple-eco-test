"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { createTakeAction } from "@/action/Take-actionAction";
import { useRouter } from "next/navigation";

// Zod schema

const PopupTakeActionForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      isAnonymous,
      image: imageFile,
    };
    const create = await createTakeAction(formData);
    if (create?.code == 200) {
      reset();
      setImagePreview(null);
      setShowForm(false);
      alert("Create action successfully");
      router.refresh();
    }
  };
  const handleCancel = () => {
    reset();
    setImagePreview(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-auto bg-green cursor-pointer hover:bg-strong-green text-light-white hover:text-lighter-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:px-5 md:py-4">
          Create Take Action
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:w-140 bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <DialogHeader>
            <DialogTitle className="text-lg text-primary">
              Create Survey
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-row gap-x-3 py-3 w-full">
            <div className="flex flex-col gap-y-3 w-3/5">
              {/* Title */}
              <div className="flex flex-col gap-y-1 items-start">
                <Label htmlFor="title" className="text-sm">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter take action title"
                  className="px-3 border-none py-2 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
                  {...register("title")}
                  required
                />
                {errors.title && (
                  <p className="text-red-500 text-xs">{errors.title.message}</p>
                )}
              </div>

              {/* Send To */}
              <div className="flex flex-col gap-y-1 items-start">
                <Label htmlFor="sendTo" className="text-sm">
                  Send To
                </Label>
                <Input
                  id="sendTo"
                  placeholder="e.g., @government"
                  className="px-3 border-none py-2 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
                  {...register("sendTo")}
                  required
                />
                {errors.sendTo && (
                  <p className="text-red-500 text-xs">
                    {errors.sendTo.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-y-1 items-start">
                <Label htmlFor="description" className="text-sm">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter take action description"
                  className="border-none px-3 py-2 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green"
                  {...register("description")}
                  required
                />
                {errors.description && (
                  <p className="text-red-500 text-xs">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-y-1 items-start w-2/5">
              <h4 className="text-sm">Image</h4>
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
                className={` h-52 w-full ${
                  imagePreview ? "" : "border border-dashed border-orange"
                } flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden`}
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
                    <span className="text-description text-sm">
                      Upload Image
                    </span>
                  </>
                )}
              </Label>
            </div>
          </div>

          {/* Anonymous Switch */}
          <div className="flex items-center justify-end space-x-2">
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
              className=" w-10 h-5 rounded-full"
            />
            <Label
              htmlFor="anonymous"
              className="text-sm font-medium text-dark-green"
            >
              Anonymous
            </Label>
          </div>

          <DialogFooter className="mt-2.5 flex flex-row gap-x-7 items-end justify-end w-full">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="w-auto bg-red hover:bg-red text-light-white hover:text-lighter-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-lg px-4 py-5 md:py-4.5"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              variant="outline"
              className="w-auto bg-meduim-green hover:bg-green hover:text-white text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-lg px-4 py-5 md:py-4.5"
            >
              Create Survey
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupTakeActionForm;
