"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { discussionSchema } from "@/lib/zod/DiscussionSchema";
import { updateDiscussionAction } from "@/action/DiscussionAction";

export default function UpdateDiscussionComponent({
  open,
  onOpenChange,
  defaultValues,
}) {
  const [preview, setPreview] = useState(null);
  const [tagInput, setTagInput] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(discussionSchema),
    defaultValues: {
      id: "",
      title: "",
      tag: [],
      description: "",
      image: undefined,
    },
  });

  const tags = watch("tag");

  useEffect(() => {
    if (defaultValues) {
      reset({
        id: defaultValues.id || "",
        title: defaultValues.title || "",
        tag: defaultValues.tags || [],
        description: defaultValues.description || "",
        image: undefined,
      });
      setPreview(defaultValues.image || null);
    }
  }, [defaultValues, reset]);

  const handleAddTag = () => {
    const cleaned = tagInput.trim();
    if (
      cleaned &&
      !tags.includes(cleaned) &&
      cleaned.startsWith("#") &&
      cleaned.length <= 15
    ) {
      if (tags.length < 3) {
        setValue("tag", [...tags, cleaned]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setValue(
      "tag",
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const closeDialog = () => onOpenChange(false);

  const onSubmit = async (data) => {
    const result = await updateDiscussionAction({
      ...data,
      id: defaultValues.id,
    });
    if (result.success) {
      closeDialog();
    } else {
      alert(result.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent className="w-full lg:min-w-[600px] sm:max-w-[600px] bg-white border border-lightes-white cursor-pointer">
        <DialogHeader>
          <DialogTitle className="text-dark-green">
            Update Discussion
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* Title */}
          <div className="py-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-dark-green"
            >
              Title <span className="text-red">*</span>
            </label>
            <Input
              id="title"
              placeholder="Environment"
              className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-dark-green placeholder:text-lighter-green placeholder:text-sm"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-col gap-2">
            <label className="block text-sm font-medium text-dark-green">
              Tags <span className="text-red">*</span>
            </label>
            <div className="flex items-center gap-2">
              <Input
                placeholder="#climate-change"
                value={tagInput}
                className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-dark-green placeholder:text-lighter-green placeholder:text-sm"
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <Button
                type="button"
                onClick={handleAddTag}
                className="bg-green hover:bg-green text-white cursor-pointer"
              >
                +
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            {errors.tag && (
              <p className="text-red text-sm">{errors.tag.message}</p>
            )}
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
              placeholder="These hands-on initiatives empower locals to remove debris"
              rows={4}
              className="mt-1 block w-full border border-lightes-white rounded-md px-3 py-2 focus:outline-none focus:border-dark-green placeholder:text-lighter-green placeholder:text-sm"
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
              onChange={handleImageChange}
            />
            <label
              htmlFor="file"
              className="h-full w-full border border-dashed border-orange flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
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
              <p className="text-red text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Buttons */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeDialog}
              className="hover:bg-lighter-white bg-light-gray border-none cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green text-white hover:bg-green cursor-pointer"
            >
              Update Discussion
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
