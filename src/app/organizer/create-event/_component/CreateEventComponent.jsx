"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import React from "react";
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
} from "@/data";

export default function CreateEventComponent({
  formData,
  setFormData,
  onNext,
}) {
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
    watch,
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
      picture: null,
    },
  });

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue("picture", file);
    setFormData({
      ...formData,
      picture: file,
    });
  };

  // Get all form values
  const getAllFormValues = () => {
    return getValues();
  };

  const handleEventSubmit = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
    console.log("Form data:", data);

    // Validate that all required fields are filled
    // const requiredFields = [
    //   "title",
    //   "categories",
    //   "eventType",
    //   "volunteer",
    //   "certificate",
    //   "location",
    //   "contributeType",
    //   "startDate",
    //   "endDate",
    //   "description",
    // ];
    // const missingFields = requiredFields.filter((field) => !data[field]);

    // if (missingFields.length > 0) {
    //   console.log("Missing fields:", missingFields);
    //   return;
    // }

    // All form data is now available in the data object
    onNext && onNext(data);
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
              name="eventType"
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
            <p className="text-sm text-red">{errors?.eventType?.message}</p>
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
                    operator="Contribute_type"
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
            <Label htmlFor="picture">Picture</Label>
            <Input
              type="file"
              name="picture"
              onChange={handleFileChange}
              className="bg-lighter-white text-gray-600 border-none h-10"
              accept="image/*"
            />
            <p className="text-sm text-red">{errors?.picture?.message}</p>
          </div>
        </div>

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

        {/* Debug section - remove in production */}
        {/* <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Form Values (Debug):</h3>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(watchedValues, null, 2)}
          </pre>
        </div> */}

        {/* Action buttons */}
        <div className="flex gap-x-3 justify-end">
          {/* <button
            type="button"
            onClick={() => console.log("All form values:", getAllFormValues())}
            className="cursor-pointer bg-gray-500 text-white rounded-xl h-10 px-4 flex items-center justify-center"
          >
            Log Values
          </button> */}
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
