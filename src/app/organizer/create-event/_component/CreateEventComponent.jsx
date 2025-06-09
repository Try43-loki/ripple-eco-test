"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, X } from "lucide-react";
import React, { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";
import { DatePickerComponent } from "@/app/(auth)/_component/DatePickerComponent";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEventSchemaFromData } from "@/lib/zod/eventShcema";
import {
  categories,
  certificates,
  contributeType,
  eventTypes,
  locations,
} from "@/utils/data";
import { multipleFileUploadAction } from "@/action/FileUploadAction";

export default function CreateEventComponent({
  formData,
  setFormData,
  onNext,
}) {
  // State for image previews
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const eventSchema = createEventSchemaFromData({
    categories,
    eventTypes,
    certificates,
    contributeType,
    locations,
  });

  const {
    handleSubmit,
    control,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      categories: "",
      eventType: "",
      volunteer: "",
      certificate: "",
      location: "",
      contributeType: "",
      startDate: null,
      endDate: null,
      description: "",
      pictures: [], // Changed from picture to pictures (array)
    },
  });

  // Handle multiple file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      setSelectedImages(files);
      setValue("pictures", files);

      // Create preview URLs
      const previews = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        id: Math.random().toString(36).substr(2, 9),
      }));

      setImagePreviews(previews);

      // Update form data
      setFormData({
        ...formData,
        pictures: files,
      });
    }
    console.log("Selected Images:", formData);
  };

  // Remove specific image
  const removeImage = (indexToRemove) => {
    const newPreviews = imagePreviews.filter(
      (_, index) => index !== indexToRemove
    );
    const newImages = selectedImages.filter(
      (_, index) => index !== indexToRemove
    );

    // Clean up URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviews[indexToRemove].url);

    setImagePreviews(newPreviews);
    setSelectedImages(newImages);
    setValue("pictures", newImages);

    setFormData({
      ...formData,
      pictures: newImages,
    });
  };

  // Get all form values
  const getAllFormValues = () => {
    return getValues();
  };

  const handleEventSubmit = async (data) => {
    // Include the selected images in the form data
    const finalData = {
      ...data,
      pictures: selectedImages,
    };

    const res = await multipleFileUploadAction(selectedImages);
    setFormData({
      ...formData,
      ...finalData,
      pictures: res?.data,
    });

    onNext && onNext(finalData);
  };

  return (
    <>
      <h1 className="w-full text-lg text-dark-green font-semibold mb-5">
        Event details
      </h1>
      <form
        onSubmit={handleSubmit(handleEventSubmit)}
        className="flex w-full flex-col gap-y-8"
      >
        {/* Section 1 */}
        <div className="flex w-full gap-x-5">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              placeholder="Tree planting"
              className="bg-lighter-white text-gray-600 border-none h-10"
              {...register("title")}
            />
            <p className="text-sm text-red">{errors?.title?.message}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label>Categories</Label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  operator="Categories"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Choose category"
                />
              )}
            />
            <p className="text-sm text-red">{errors?.categories?.message}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label>Event type</Label>
            <Controller
              name="eventTypes"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  operator="Event_type"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Choose event type"
                />
              )}
            />
            <p className="text-sm text-red">{errors?.eventTypes?.message}</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex gap-x-5">
          <div className="flex w-1/3 gap-x-5">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="volunteer">Volunteer</Label>
              <Input
                name="volunteer"
                placeholder="1000"
                className="bg-lighter-white text-gray-600 border-none h-10"
                {...register("volunteer")}
              />
              <p className="text-sm text-red">{errors?.volunteer?.message}</p>
            </div>
            <div className="grid w-full gap-1.5">
              <Label>Certificate</Label>
              <Controller
                name="certificate"
                control={control}
                render={({ field }) => (
                  <SelectComponent
                    operator="Certificate"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Choose certificate"
                  />
                )}
              />
              <p className="text-sm text-red">{errors?.certificate?.message}</p>
            </div>
          </div>
          <div className="flex w-2/3 gap-x-5">
            <div className="grid w-full gap-1.5">
              <Label>Location</Label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <SelectComponent
                    operator="Location"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Choose location"
                  />
                )}
              />
              <p className="text-sm text-red">{errors?.location?.message}</p>
            </div>
            <div className="grid w-full gap-1.5">
              <Label>Contribute type</Label>
              <Controller
                name="contributeType"
                control={control}
                render={({ field }) => (
                  <SelectComponent
                    operator="contributeType"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Choose contribution type"
                  />
                )}
              />
              <p className="text-sm text-red">
                {errors?.contributeType?.message}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex gap-x-5">
          <div className="grid w-full gap-1.5">
            <Label>Start date</Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePickerComponent
                  name="start_date"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select start date"
                  error={errors?.startDate}
                />
              )}
            />
            <p className="text-sm text-red">{errors?.startDate?.message}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label>End date</Label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePickerComponent
                  name="end_date"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select end date"
                  error={errors?.endDate}
                />
              )}
            />
            <p className="text-sm text-red">{errors?.endDate?.message}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="pictures">Pictures</Label>
            <Input
              type="file"
              name="pictures"
              onChange={handleFileChange}
              className="bg-lighter-white text-gray-600 border-none h-10"
              accept="image/*"
              multiple // Enable multiple file selection
            />
            <p className="text-sm text-red">{errors?.pictures?.message}</p>
          </div>
        </div>

        {/* Image Previews Section */}
        {imagePreviews.length > 0 && (
          <div className="grid w-full gap-1.5">
            <Label>Selected Images ({imagePreviews.length})</Label>
            <div className="flex flex-wrap gap-3 p-4 bg-lighter-white rounded-lg">
              {imagePreviews.map((preview, index) => (
                <div key={preview.id} className="relative group">
                  <img
                    src={preview.url}
                    alt={`Preview ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200 hover:border-green transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <X size={12} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg truncate">
                    {preview.file.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4 */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            rows={5}
            placeholder="Details about your event."
            className="h-40 border border-light-strok bg-lighter-white text-gray-600"
            {...register("description")}
          />
          <p className="text-sm text-red">{errors?.description?.message}</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-x-3 justify-end">
          <button
            type="submit"
            className="cursor-pointer bg-green text-white rounded-xl h-10 w-28 flex items-center justify-center gap-x-1"
          >
            Next <ArrowRight size={15} />
          </button>
        </div>
      </form>
    </>
  );
}
