"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { createTakeAction } from "@/action/Take-actionAction";
import { useForm } from "react-hook-form";

export default function CreateTakeActionFormComponent({ type, isVerify }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    reset();
    setImagePreview(null);
    setImageFile(null);
    setIsAnonymous(false);
  };

  const onSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = {
        ...data,
        isAnonymous,
        image: imageFile,
      };

      const result = await createTakeAction(formData);
    } catch (error) {
      console.error("Error creating take action:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    resetForm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={!isVerify}
          variant="outline"
          className="bg-green cursor-pointer text-white rounded-xl px-6 py-3 hover:bg-green/80 border-none hover:text-white"
        >
          {type}
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
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  })}
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
                  {...register("sendTo", {
                    required: "Send To is required",
                  })}
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
                  className="border-none px-3 py-2 bg-light-gray rounded-lg placeholder:text-sm placeholder:text-strong-gray focus-visible:ring-1 focus-visible:ring-meduim-green resize-none"
                  rows={4}
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
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
              <Label className="text-sm">Image</Label>
              <Input
                type="file"
                id="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <Label
                htmlFor="file"
                className={`h-52 w-full ${
                  imagePreview ? "" : "border border-dashed border-orange"
                } flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden transition-colors hover:bg-gray-50`}
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
          <div className="flex items-center justify-end space-x-2 py-2">
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
              className="w-10 h-5 rounded-full"
            />
            <Label
              htmlFor="anonymous"
              className="text-sm font-medium text-dark-green cursor-pointer"
            >
              Anonymous
            </Label>
          </div>

          <DialogFooter className="mt-2.5 flex flex-row gap-x-7 items-end justify-end w-full">
            <Button
              type="button"
              variant="outline"
              className="w-auto bg-gray-700 text-white hover:bg-gray-700/80 cursor-pointer hover:text-lighter-white text-xs md:text-sm lg:text-base rounded-lg px-4 py-5 md:py-4.5"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-auto cursor-pointer bg-meduim-green hover:bg-green hover:text-white text-white text-xs md:text-sm lg:text-base rounded-lg px-4 py-5 md:py-4.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create Survey"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
