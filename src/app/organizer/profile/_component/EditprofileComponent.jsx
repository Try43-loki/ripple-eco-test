"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImagePlus, SquarePen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
const EditprofileComponent = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-none shadow-none">
            <SquarePen className="w-8 h-8 text-strong-gray" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader className="mx-auto text-green">
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-y-3 py-4 text-green">
            <div className="flex flex-col gap-y-1 items-start w-full">
              <h4 className="text-lg">Image</h4>
              <div className="flex flex-col gap-y-1 items-center w-full">
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
                  className="h-30 w-full border border-dashed border-orange flex flex-col justify-center items-center cursor-pointer rounded-md overflow-hidden"
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
            <div className="flex flex-col items-start gap-y-2">
              <Label htmlFor="name" className="text-right">
                First Name
              </Label>
              <Input
                type="text"
                id="first name"
                placeholder="Pedro"
                className="col-span-3 bg-light-gray placeholder:text-strong-green"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label htmlFor="name" className="text-right text-green">
                Last Name
              </Label>
              <Input
                type="text"
                id="last name"
                placeholder="Duarte"
                className="col-span-3 bg-light-gray placeholder:text-strong-green"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label htmlFor="name" className="text-right">
                Address
              </Label>
              <Input
                type="text"
                id="address"
                placeholder="ect, Pnhom Penh"
                className="col-span-3 bg-light-gray placeholder:text-strong-green "
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label htmlFor="name" className="text-right">
                Phone Number
              </Label>
              <Input
                type="text"
                id="phone number"
                placeholder="ect +855 000 000"
                className="col-span-3 bg-light-gray placeholder:text-strong-green "
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1 text-dark-green">
                Date of Birth
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Day"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
                <Input
                  placeholder="Month"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
                <Input
                  placeholder="Year"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label htmlFor="name" className="text-right">
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Pedro Duarte"
                className="bg-light-gray text-strong-green "
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="text-green border-1 border-green">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditprofileComponent;
