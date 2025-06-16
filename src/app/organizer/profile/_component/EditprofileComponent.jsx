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
import { RefreshCcw, SquarePen } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { getEditUserProfileData } from "@/action/EditUserProfileAction";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const EditprofileComponent = ({ title = "", userData }) => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profileImage", file); // register file with react-hook-form
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    const editProfile = await getEditUserProfileData(data);
    if (editProfile?.code == 200) {
      reset();
      setImagePreview(null);
      setShowForm(false);
      alert("Update profile successfully");
      router.refresh();
    } else {
      alert(editProfile?.message);
    }
  };
  const handleCancel = () => {
    reset();
    setImagePreview(null);
  };

  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-none shadow-none">
            <span>
              {title || <SquarePen className="w-8 h-8 text-strong-gray" />}
            </span>
          </Button>
        </DialogTrigger>

        {showForm && (
          <DialogContent className="lg:w-[600px] border-1 bg-white border-white">
            <DialogHeader className="mx-auto text-dark-gray w-full flex flex-row justify-between items-center">
              <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-3 py-4 text-strong-gray w-full"
            >
              <div className="flex flex-row items-center gap-x-2 w-full">
                <div className="flex flex-col items-start gap-y-2 w-1/2">
                  <Label>First Name</Label>
                  <Input
                    placeholder={userData?.data?.firstName}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("firstName")}
                  />
                </div>
                <div className="flex flex-col items-start gap-y-2 w-1/2">
                  <Label>Last Name</Label>
                  <Input
                    placeholder={userData?.data?.lastName}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div>
                <Label>Date of Birth</Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder={dayjs(userData?.data?.birthDate).format("DD")}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("dobDay")}
                  />
                  <Input
                    placeholder={dayjs(userData?.data?.birthDate).format("MM")}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("dobMonth")}
                  />
                  <Input
                    placeholder={dayjs(userData?.data?.birthDate).format(
                      "YYYY"
                    )}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("dobYear")}
                  />
                </div>
              </div>

              <div className="flex flex-row items-center gap-x-2 w-full">
                <div className="flex flex-col items-start gap-y-2 w-1/2">
                  <Label>Address</Label>
                  <Input
                    placeholder={userData?.data?.address}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("address")}
                  />
                </div>
                <div className="flex flex-col items-start gap-y-2 w-1/2">
                  <Label>Phone Number</Label>
                  <Input
                    placeholder={userData?.data?.phoneNumber}
                    className="bg-light-gray border-none placeholder:text-lighter-green"
                    {...register("phoneNumber")}
                  />
                </div>
              </div>

              <div className="flex flex-row items-start gap-x-3 w-full">
                <div className="w-2/5">
                  <div className="flex flex-col gap-y-2 items-start w-full h-full">
                    <Label className="text-sm">Image</Label>
                    <div className="flex flex-col gap-y-1 items-center w-full h-full">
                      <Input
                        type="file"
                        id="file"
                        className="hidden"
                        accept="image/*"
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
                          <div className=" w-full h-full">
                            <img
                              src={userData?.data?.profileImageUrl}
                              alt="Preview"
                              className="object-cover h-full w-full rounded-full"
                            />
                          </div>
                        )}
                      </Label>
                      <span className="absolute bottom-27 left-40 bg-strong-gray p-1 rounded-full shadow-md cursor-pointer hover:bg-gray text-white">
                        <RefreshCcw className="w-4 h-4 text-white" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-3/5 flex flex-col items-center gap-y-2">
                  <div className="flex flex-col items-start gap-y-2 w-full">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="your password"
                      className="bg-light-gray border-none placeholder:text-lighter-green"
                      {...register("password")}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-y-2 w-full">
                    <Label>Bio</Label>
                    <Textarea
                      placeholder={userData?.bio}
                      className="bg-light-gray border-none placeholder:text-lighter-green
                                w-full h-[60px] px-3 py-2 rounded-lg resize-none placeholder:text-sm 
                                focus-visible:ring-1 focus-visible:ring-meduim-green
                                whitespace-pre-wrap break-words overflow-y-auto scrollbar-hide"
                      {...register("bio")}
                    />
                  </div>
                </div>
              </div>

              <DialogFooter className="flex justify-end pt-4">
                <div className="flex flex-row gap-x-5 w-1/2 justify-end">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      className="border-1 border-red text-red"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="text-green border-1 border-green"
                  >
                    Save changes
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default EditprofileComponent;
