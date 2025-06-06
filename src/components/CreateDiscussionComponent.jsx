"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { discussionSchema } from "@/lib/zod/DiscussionSchema";
import { insertDiscussionAction } from "@/action/DiscussionAction";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const CreateDiscussionComponent = ({ open, onOpenChange }) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(discussionSchema),
    mode: "onChange", // Enables real-time validation
    defaultValues: {
      title: "",
      description: "",
      tag: [],
      image: undefined,
    },
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle image file change & preview
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Add new tag
  const addTag = () => {
    const inputEl = document.getElementById("tag-input");
    const rawTag = inputEl?.value.trim();

    if (!rawTag) return;

    const tag = rawTag.startsWith("#") ? rawTag : `#${rawTag}`;

    const currentTags = getValues("tag") || [];
    const newTags = [...currentTags, tag];

    setValue("tag", newTags, { shouldValidate: true });
    inputEl.value = ""; // Clear input
  };

  // Remove a tag
  const removeTag = (tagToRemove) => {
    const currentTags = getValues("tag").filter((tag) => tag !== tagToRemove);
    setValue("tag", currentTags, { shouldValidate: true });
  };

  // Submit handler
  const handleAddDiscussion = (data) => {
    const formatData = {
      ...data,
      tag: data.tag,
    };
    insertDiscussionAction(formatData);
    setImagePreview(null);
    reset();
    onOpenChange(false);
  };

  // Reset and close dialog
  const closeDialog = () => {
    setImagePreview(null);
    reset(); // Reset form values
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent className="w-full lg:min-w-[600px] sm:max-w-[600px] bg-white border border-lightes-white">
        <DialogHeader>
          <DialogTitle className="text-dark-green">
            Create Discussion
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handleAddDiscussion)}
          encType="multipart/form-data"
        >
          {/* Title */}
          <div className="py-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-dark-green"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter discussion title"
              className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-dark-green placeholder:text-lighter-green"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-col gap-2">
            <label className="block text-sm font-medium text-dark-green">
              Tags
            </label>
            <div className="flex items-center gap-2">
              <Input
                id="tag-input"
                placeholder="Add tag"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag();
                  }
                }}
                className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-green placeholder:text-lighter-green"
              />
              <Button
                type="button"
                className="bg-green hover:bg-green text-white"
                onClick={addTag}
              >
                +
              </Button>
            </div>
            {errors.tag && (
              <p className="text-red text-sm mt-1">{errors.tag.message}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {getValues("tag")?.map((tag, index) => (
                <Badge
                  key={index}
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {tag}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-dark-green"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter discussion"
              rows={4}
              className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-dark-green placeholder:text-lighter-green"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-y-1 items-start w-full h-52 mb-5">
            <h4 className="text-sm text-dark-green">Image</h4>
            <input
              type="file"
              id="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className={`h-full w-full border border-dashed border-orange flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden`}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover h-full w-full"
                />
              ) : (
                <>
                  <ImagePlus className="mb-2 text-lighter-green w-6 h-6" />
                  <span className="text-lighter-green text-sm">
                    Upload Image
                  </span>
                </>
              )}
            </label>
            {errors.image && (
              <span className="text-red text-sm mt-4">
                {errors.image.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeDialog}
              className="hover:bg-lighter-white bg-light-gray border-none"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green text-white hover:bg-green"
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
