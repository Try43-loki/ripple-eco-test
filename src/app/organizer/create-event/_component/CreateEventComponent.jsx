"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, X, AlertCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";
import { DatePickerComponent } from "@/app/(auth)/_component/DatePickerComponent";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createEventSchemaFromData,
  getMinimumStartDate,
  validatePicturesArray,
} from "@/lib/zod/eventShcema";
import {
  categories,
  certificates,
  contributeType,
  contributeTypeRestrictions,
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
  const [fileValidationError, setFileValidationError] = useState("");

  // Get minimum start date (7 days from today)
  const minStartDate = getMinimumStartDate();

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
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      categories: "",
      eventTypes: "", // Fixed: was eventType, should be eventTypes to match schema
      volunteer: "",
      certificate: "",
      location: "",
      contributeType: "",
      startDate: null,
      endDate: null,
      description: "",
      pictures: [],
    },
  });

  const watchStartDate = watch("startDate");
  const watchEventTypes = watch("eventTypes");
  const watchContributeType = watch("contributeType");
  useEffect(() => {
    if (watchEventTypes && watchContributeType) {
      const eventType = eventTypes.find((et) => et.value === watchEventTypes);
      const eventTypeId = eventType ? eventType.id : null;

      if (eventTypeId) {
        const isValidContributeType = contributeTypeRestrictions.some(
          (restriction) =>
            restriction.eventTypeId === eventTypeId &&
            restriction.contributeTypeName === watchContributeType
        );

        if (!isValidContributeType) {
          setValue("contributeType", "");
        }
      }
    }
  }, [watchEventTypes, setValue, watchContributeType]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileValidationError("");

    if (files.length > 0) {
      const allFiles = [...selectedImages, ...files];

      const validation = validatePicturesArray(allFiles);

      if (!validation.isValid) {
        setFileValidationError(validation.errors.join(", "));
        return;
      }

      setSelectedImages(allFiles);
      setValue("pictures", allFiles);

      // Create preview URLs for all files
      const newPreviews = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        id: Math.random().toString(36).substr(2, 9),
      }));

      setImagePreviews((prev) => [...prev, ...newPreviews]);

      // Update form data
      setFormData({
        ...formData,
        pictures: allFiles,
      });
    }
  };

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
    setFileValidationError("");

    setFormData({
      ...formData,
      pictures: newImages,
    });
  };

  const clearAllImages = () => {
    imagePreviews.forEach((preview) => {
      URL.revokeObjectURL(preview.url);
    });

    setImagePreviews([]);
    setSelectedImages([]);
    setValue("pictures", []);
    setFileValidationError("");

    setFormData({
      ...formData,
      pictures: [],
    });
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => {
        URL.revokeObjectURL(preview.url);
      });
    };
  }, []);

  const handleEventSubmit = async (data) => {
    try {
      const validation = validatePicturesArray(selectedImages);
      if (!validation.isValid) {
        setFileValidationError(validation.errors.join(", "));
        return;
      }

      // Include the selected images in the form data
      const finalData = {
        ...data,
        pictures: selectedImages,
      };

      // Upload images
      const res = await multipleFileUploadAction(selectedImages);

      const updatedFormData = {
        ...formData,
        ...finalData,
        pictures: res || selectedImages,
      };

      setFormData(updatedFormData);
      onNext && onNext(updatedFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFileValidationError(
        "An error occurred while uploading images. Please try again."
      );
    }
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
        <div className="flex w-full gap-x-5 justify-between items-start">
          <div className=" w-full gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              placeholder="Tree planting"
              className="bg-lighter-white text-gray-600 border-none h-10 mt-2"
              {...register("title")}
            />
            {errors?.title && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors.title.message}
              </p>
            )}
          </div>
          <div className=" w-full gap-1.5">
            <Label className="mb-2">Categories</Label>
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
            {errors?.categories && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors.categories.message}
              </p>
            )}
          </div>
          <div className=" w-full gap-1.5">
            <Label className="mb-2">Event type</Label>
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
            {errors?.eventTypes && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors.eventTypes.message}
              </p>
            )}
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex gap-x-5 justify-between items-start">
          <div className="flex w-1/3 gap-x-5 justify-between items-start">
            <div className=" w-full gap-1.5">
              <Label className="mb-2" htmlFor="volunteer">
                Volunteer
              </Label>
              <Input
                name="volunteer"
                placeholder="1000"
                type="number"
                min="1"
                className="bg-lighter-white text-gray-600 border-none h-10"
                {...register("volunteer")}
              />
              {errors?.volunteer && (
                <p className="text-sm text-red flex items-start gap-1">
                  <AlertCircle size={12} className="mt-1" />
                  {errors.volunteer.message}
                </p>
              )}
            </div>
            <div className=" w-full gap-1.5">
              <Label className="mb-2">Certificate</Label>
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
              {errors?.certificate && (
                <p className="text-sm text-red flex items-start gap-1">
                  <AlertCircle size={12} className="mt-1" />
                  {errors.certificate.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-2/3 gap-x-5 justify-between items-start">
            <div className=" w-full gap-1.5">
              <Label className="mb-2">Location</Label>
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
              {errors?.location && (
                <p className="text-sm text-red flex items-start gap-1">
                  <AlertCircle size={12} className="mt-1" />
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className=" w-full gap-1.5">
              <Label className="mb-2">Contribute type</Label>
              <Controller
                name="contributeType"
                control={control}
                render={({ field }) => (
                  <SelectComponent
                    operator="contributeType"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={
                      watchEventTypes
                        ? "Choose contribution type"
                        : "Select event type first"
                    }
                    selectedEventType={watchEventTypes}
                    disabled={!watchEventTypes}
                  />
                )}
              />
              {errors?.contributeType && (
                <p className="text-sm text-red flex items-start gap-1">
                  <AlertCircle size={12} className="mt-1" />
                  {errors.contributeType.message}
                </p>
              )}
              {!watchEventTypes && (
                <p className="text-xs text-gray-500 mt-1">
                  Please select an event type first to see available
                  contribution options.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex gap-x-5 justify-between items-start">
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
                  minDate={minStartDate}
                  error={errors?.startDate}
                />
              )}
            />
            {errors?.startDate && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors.startDate.message}
              </p>
            )}
            <p className="text-xs text-gray-500">
              Minimum start date: {minStartDate.toLocaleDateString()}
            </p>
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
                  minDate={watchStartDate || minStartDate}
                  error={errors?.endDate}
                />
              )}
            />
            {errors?.endDate && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors.endDate.message}
              </p>
            )}
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="pictures">
              Pictures ({selectedImages.length}/5)
            </Label>
            <Input
              type="file"
              name="pictures"
              onChange={handleFileChange}
              className="bg-lighter-white text-gray-600 border-none h-10"
              accept="image/jpeg,image/jpg,image/png"
              multiple
            />
            {(errors?.pictures || fileValidationError) && (
              <p className="text-sm text-red flex items-start gap-1">
                <AlertCircle size={12} className="mt-1" />
                {errors?.pictures?.message || fileValidationError}
              </p>
            )}
            <p className="text-xs text-gray-500">
              Supported formats: JPG, JPEG, PNG • Max size: 5MB per image • Max
              5 images
            </p>
          </div>
        </div>

        {/* Image Previews Section */}
        {imagePreviews.length > 0 && (
          <div className="grid w-full gap-1.5">
            <div className="flex items-center justify-between">
              <Label>Selected Images ({imagePreviews.length})</Label>
              <button
                type="button"
                onClick={clearAllImages}
                className="text-sm text-red hover:text-red-600 flex items-center gap-1"
              >
                <X size={14} />
                Clear all
              </button>
            </div>
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
                  <div className="absolute top-1 left-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                    {(preview.file.size / (1024 * 1024)).toFixed(1)}MB
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
          {errors?.description && (
            <p className="text-sm text-red flex items-start gap-1">
              <AlertCircle size={12} className="mt-1" />
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-x-3 justify-end">
          <button
            type="submit"
            className="cursor-pointer bg-green text-white rounded-xl h-10 w-28 flex items-center justify-center gap-x-1 hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ArrowRight size={15} />
          </button>
        </div>
      </form>
    </>
  );
}
