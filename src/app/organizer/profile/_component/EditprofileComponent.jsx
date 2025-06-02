"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImagePlus, SquarePen, XCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
const EditprofileComponent = ({ title, operator }) => {
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
            {title === "" ? (
              <SquarePen className="w-8 h-8 text-strong-gray" />
            ) : (
              title
            )}
            {/* <SquarePen className="w-8 h-8 text-strong-gray" /> */}
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:w-[600px] border-1 bg-white border-white">
          <DialogHeader className="mx-auto text-dark-gray w-full flex flex-row justify-between items-center">
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-y-3 py-4 text-strong-gray w-full">
            <div className="flex flex-row items-center gap-x-2 w-full">
              <div className="flex flex-col items-start gap-y-2 w-1/2">
                <Label htmlFor="name" className="text-right">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="first name"
                  placeholder="Pedro"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
              </div>
              <div className="flex flex-col items-start gap-y-2 w-1/2">
                <Label htmlFor="name" className="text-right">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="last name"
                  placeholder="Duarte"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1 text-strong-gray">
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
            <div className="flex flex-row items-center gap-x-2 w-full">
              <div className="flex flex-col items-start gap-y-2 w-1/2">
                <Label htmlFor="name" className="text-right">
                  Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="ect, Pnhom Penh"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
              </div>
              <div className="flex flex-col items-start gap-y-2  w-1/2">
                <Label htmlFor="name" className="text-right">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="phone number"
                  placeholder="ect +855 000 000"
                  className="bg-light-gray border-none placeholder:text-lighter-green"
                />
              </div>
            </div>

            <div className="flex flex-row items-start gap-x-3 w-full ">
              <div className="w-2/5">
                <div className="flex flex-col gap-y-2 items-start w-full h-full">
                  <Label className="text-sm">Image</Label>
                  <div className="flex flex-col gap-y-1 items-center w-full h-full">
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
                      className="h-32 w-32 border-2 border-strong-gray flex flex-col justify-center items-center cursor-pointer rounded-full overflow-hidden"
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
              </div>

              <div className="w-3/5 flex flex-col items-center gap-y-2">
                <div className="flex flex-col items-start gap-y-2 w-full">
                  <Label htmlFor="name" className="text-right">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="your password"
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                  />
                </div>
                <div className="flex flex-col items-start gap-y-2 w-full">
                  <Label htmlFor="name" className="text-right">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Pedro Duarte"
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            <div className="flex flex-row gap-x-5 justify-end items-end w-1/2">
              <DialogClose>
                <Button className="border-1 border-red text-red">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                className="text-green border-1 border-green"
              >
                Save changes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditprofileComponent;
