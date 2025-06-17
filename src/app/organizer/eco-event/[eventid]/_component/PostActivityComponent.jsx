"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ImagePlus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postActivitySchema } from "@/lib/zod/PostActivitySchema";
import { insertPostActivityAction } from "@/action/PostActivityAction";

const PostActivityComponent = ({ eventId }) => {
  const [imagePreview, setImagePreview] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postActivitySchema),
    defaultValues: {
      title: "",
      activity: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "activity",
  });
  const handleFileChange = (e, index) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPreviews = [...imagePreview];
      newPreviews[index] = URL.createObjectURL(file);
      setImagePreview(newPreviews);
      setValue(`activity.${index}.image`, file, { shouldValidate: true });
    }
  };

  const handleAddActivity = (data) => {
    insertPostActivityAction(data, eventId);
    setImagePreview([]);
    reset();
  };
  return (
    <main>
      {/* Header Section */}
      <article className="flex items-center justify-between w-full bg-white py-4 px-5 mt-10 rounded-2xl">
        <p className="text-dark-green font-medium">Event Activity</p>

        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (open && fields.length === 0) {
              append({ title: "", image: "", description: "" });
            }
            if (!open) {
              reset();
              setImagePreview([]);
            }
          }}
        >
          <DialogTrigger asChild>
            <button className="bg-green text-white py-3 px-5 rounded-3xl hover:bg-green/80 transition cursor-pointer">
              Post Activity
            </button>
          </DialogTrigger>

          <DialogContent className="!min-w-[500px] max-h-[100vh] px-8 overflow-y-scroll scrollbar-hide overflow-x-hidden bg-white border-green">
            <DialogHeader>
              <DialogTitle className="text-green font-semibold">
                Post Take Activity
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <form
              className="space-y-4"
              onSubmit={handleSubmit(handleAddActivity)}
              encType="multipart/form-data"
            >
              {fields?.map((field, index) => (
                <div key={field.id} className="mb-4 relative">
                  {/* Close button in top-right */}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="absolute top-0 right-0 bg-red text-white rounded-full w-4 h-4 flex items-center justify-center text-sm hover:bg-red cursor-pointer"
                      title="Remove activity"
                    >
                      ×
                    </button>
                  )}

                  {/* Title Input */}
                  {index === 0 && (
                    <div>
                      <label
                        htmlFor={`title-${index}`}
                        className="block text-sm font-medium text-dark-green"
                      >
                        Title<span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id={`title-${index}`}
                        placeholder="RippleEco"
                        className="mt-1 block w-full bg-lighter-white placeholder:text-lighter-green rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
                        {...register(`activity.${index}.title`)}
                      />
                      {errors?.activity?.[index]?.title && (
                        <p className="text-red text-xs mt-1">
                          {errors?.activity?.[index]?.title.message}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Image and Description */}
                  <div className="flex gap-4 mt-4">
                    {/* Image Upload */}
                    <div className="flex flex-col">
                      <h4 className="text-sm text-dark-green">Image</h4>
                      <input
                        type="file"
                        id={`file-${index}`}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                      <label
                        htmlFor={`file-${index}`}
                        className="h-42 w-52 mt-1 border border-dashed border-orange flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden"
                      >
                        {imagePreview[index] ? (
                          <img
                            src={imagePreview[index]}
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
                      {errors?.activity?.[index]?.image && (
                        <span className="text-red text-xs mt-4">
                          {errors.activity[index].image.message}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor={`description-${index}`}
                        className="block text-sm font-medium text-dark-green"
                      >
                        Description
                      </label>
                      <textarea
                        id={`description-${index}`}
                        placeholder="This event is amazing"
                        rows={6}
                        className="h-42 w-52 mt-1 block bg-lighter-white placeholder:text-sm text-sm resize-y placeholder:text-lighter-green rounded-md px-3 py-2 focus:outline-none focus:border-dark-green"
                        {...register(`activity.${index}.description`)}
                      ></textarea>
                      {errors?.activity?.[index]?.description && (
                        <p className="text-red text-xs mt-1">
                          {errors.activity[index].description.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* add activity */}
              <div>
                <button
                  type="button"
                  onClick={() => append({ image: "", description: "" })}
                  className="py-2 text-green text-sm cursor-pointer"
                >
                  + Add more activity
                </button>
              </div>
              {/* Submit */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-green text-white px-4 py-2 rounded-md hover:bg-green/80 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </article>
    </main>
  );
};

export default PostActivityComponent;
