"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import React from "react";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";
import { DatePickerComponent } from "@/app/(auth)/_component/DatePickerComponent";

export default function CreateEventComponent({
  formData,
  setFormData,
  onNext,
}) {
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log("Collected Form Data:", formData);
    onNext();
  };

  return (
    <>
      <h1 className="w-full text-lg text-dark-green font-semibold mb-5">
        Event details
      </h1>
      <form onSubmit={handleNext} className="flex w-full flex-col gap-y-8">
        {/* Section 1 */}
        <div className="flex w-full gap-x-5">
          <div className="grid w-full  gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              placeholder="Tree planting"
              className="bg-lighter-white text-gray-600 border-none h-10"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label>Categories</Label>
            <SelectComponent
              operator="Categories"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label>Event type</Label>
            <SelectComponent
              operator="Event_type"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex gap-x-5">
          <div className="flex w-1/3 gap-x-5">
            <div className="grid w-full  gap-1.5">
              <Label htmlFor="volunteer">Volunteer</Label>
              <Input
                name="volunteer"
                value={formData.volunteer || ""}
                onChange={handleChange}
                placeholder="1000"
                className="bg-lighter-white text-gray-600 border-none h-10"
              />
            </div>
            <div className="grid w-full  gap-1.5">
              <Label>Certificate</Label>
              <SelectComponent
                operator="Certificate"
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
          <div className="flex w-2/3 gap-x-5">
            <div className="grid w-full  gap-1.5">
              <Label>Location</Label>
              <SearchComponent formData={formData} setFormData={setFormData} />
            </div>
            <div className="grid w-full  gap-1.5">
              <Label>Contribute type</Label>
              <SelectComponent
                operator="Contribute_type"
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex gap-x-5">
          <div className="grid w-full  gap-1.5">
            <Label>Start date</Label>
            <DatePickerComponent
              name="start_date"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="grid w-full  gap-1.5">
            <Label>End date</Label>
            <DatePickerComponent
              name="end_date"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="grid w-full  gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input
              type="file"
              name="picture"
              onChange={handleChange}
              className="bg-lighter-white text-gray-600 border-none h-10"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            rows={5}
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Details about your event."
            className="h-40 border border-light-strok bg-lighter-white text-gray-600"
          />
        </div>

        {/* Next Button */}
        <button
          type="submit"
          className="self-end bg-green text-white rounded-xl h-10 w-28 flex items-center justify-center gap-x-1"
        >
          Next <ArrowRight size={15} />
        </button>
      </form>
    </>
  );
}
