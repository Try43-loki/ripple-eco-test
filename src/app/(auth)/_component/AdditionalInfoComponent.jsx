"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeftCircleIcon } from "lucide-react";
import { SelectGenderComponent } from "./SelectGenderComponent";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createInfoSchema } from "@/lib/zod/RegisterShecma"; // Use the dynamic schema
import {
  addInfamtionAction,
  registerWithGoogleAction,
} from "@/action/auth-action";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function AdditonalInfoComponent({ onPrev, email, session, operator, profile }) {
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [message, setMessage] = useState("");
  const currentPath = usePathname();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    clearErrors,
    reset,
  } = useForm({
    resolver: zodResolver(createInfoSchema(isOrganizer)),
    mode: "onChange",
  });
  const [firstname, lastname] = session.user.name.split(" ");

  // handle route
  if (profile?.code == 200) {
    router.push("/");
  }
  useEffect(() => {
    reset(undefined, {
      keepValues: true,
      resolver: zodResolver(createInfoSchema(isOrganizer)),
    });
  }, [isOrganizer, reset]);

  // Handle role change
  const handleRoleChange = (organizerRole) => {
    setIsOrganizer(organizerRole);

    // Clear organizerName when switching to volunteer
    if (!organizerRole) {
      setValue("organizerName", "");
      clearErrors("organizerName");
    }
  };

  const handleInfomation = async (data) => {
    const formData = {
      ...data,
      isOrganizer: isOrganizer,
      organizerName: isOrganizer ? data.organizerName : null,
      email: email || session?.user?.email,
    };
    if (session?.user?.image) {
      formData.profileImageUrl = session?.user?.image;
    }
    const isSuccess =
      operator == "google"
        ? await registerWithGoogleAction(formData)
        : await addInfamtionAction(formData);
    console.log("Register : ", isSuccess?.data);
    if (isSuccess?.success) {
      localStorage.setItem("authToken", result.token);
      router.push("/completed-register");
    } else {
      setMessage(isSuccess?.message);
    }
    reset();
  };

  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/assets/login_images/bg-login.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen bg-[#00000054] flex gap-20 justify-center items-center p-10 lg:p-20">
        <article className="w-1/4 lg:w-[300px]">
          <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
            Ripple<span className="text-meduim-green">Eco</span>
          </h1>
          <h4 className="text-2xl lg:text-3xl my-4 text-white font-medium">
            Join us. Together for a greener future.
          </h4>
          <p className="mt-2 lg:text-lg font-light text-light-gray">
            Your impact starts here. Every ripple begins with one drop.
          </p>
        </article>

        <section className="flex flex-col justify-center items-center gap-4 w-[400px] bg-gradient-to-r from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md rounded-2xl p-8">
          {/* Stepper */}
          {currentPath == "/register-google" ? (
            <h1 className="text-lg text-white ">Information</h1>
          ) : (
            <div className="flex items-center w-full gap-2">
              <ChevronLeftCircleIcon
                size={18}
                color="white"
                onClick={onPrev}
                className="cursor-pointer"
              />
              <div className="flex gap-2 grow">
                {[
                  "1. Verify email",
                  "2. Set Password",
                  "3. Additional Info",
                ].map((step, index) => (
                  <span
                    key={index}
                    className="flex flex-col gap-[2px] w-full items-start"
                  >
                    <p className="text-[12px] text-light-gray font-light">
                      {step}
                    </p>
                    <span
                      className={`h-2 w-full rounded-2xl ${
                        index < 3 ? "bg-green" : "bg-light-gray"
                      }`}
                    ></span>
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Form */}
          <form
            onSubmit={handleSubmit(handleInfomation)}
            className="flex justify-center items-center flex-col gap-y-4 w-full"
          >
            <section className="flex flex-col gap-y-3 w-full">
              {/* Name */}
              <div className="flex gap-x-3">
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="firstName"
                    className="text-light-gray font-light"
                  >
                    First name
                  </Label>
                  <input
                    id="firstName"
                    defaultValue={
                      currentPath == "/register-google" ? firstname : ""
                    }
                    placeholder="Kim"
                    className="text-gray-500 px-3 h-9 bg-lighter-white placeholder:text-strong-gray border-none rounded-md w-full outline-none"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="lastname"
                    className="text-light-gray font-light"
                  >
                    Last name
                  </Label>
                  <input
                    id="lastName"
                    defaultValue={
                      currentPath == "/register-google" ? lastname : ""
                    }
                    placeholder="Hout"
                    className="text-gray-500 px-3 h-9 bg-lighter-white placeholder:text-strong-gray border-none rounded-md w-full outline-none"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* DOB + Gender */}
              <div className="flex gap-x-3">
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="birthDate"
                    className="text-light-gray font-light"
                  >
                    Date of Birth
                  </Label>
                  <input
                    type="date"
                    id="birthDate"
                    className="text-gray-500 px-3 h-9 bg-lighter-white border-none rounded-md w-full outline-none"
                    {...register("birthDate")}
                  />
                  {errors.birthDate && (
                    <p className="text-red-400 text-xs">
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="gender"
                    className="text-light-gray font-light"
                  >
                    Gender
                  </Label>
                  <SelectGenderComponent control={control} />
                  {errors.gender && (
                    <p className="text-red-400 text-xs">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address + Phone */}
              <div className="flex gap-x-3">
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="address"
                    className="text-light-gray font-light"
                  >
                    Address
                  </Label>
                  <input
                    id="address"
                    placeholder="PP"
                    className="text-gray-500 px-3 h-9 bg-lighter-white border-none rounded-md w-full outline-none"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-400 text-xs">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="phone" className="text-light-gray font-light">
                    Phone Number
                  </Label>
                  <input
                    id="phoneNumber"
                    placeholder="012-345-678"
                    className="text-gray-500 px-3 h-9 bg-lighter-white border-none rounded-md w-full outline-none"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-xs">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Role Picker */}
              <div className="flex flex-col gap-y-1 w-full">
                <p className="text-sub-info text-light-white font-light">
                  Pick your role
                </p>
                <div className="flex gap-x-4">
                  <p
                    onClick={() => handleRoleChange(true)}
                    className={`cursor-pointer text-center py-1.5 rounded-3xl grow ${
                      isOrganizer
                        ? "bg-green text-white"
                        : "bg-lighter-white text-strong-green"
                    }`}
                  >
                    I'm an Organizer
                  </p>
                  <p
                    onClick={() => handleRoleChange(false)}
                    className={`cursor-pointer text-center py-1.5 rounded-3xl grow ${
                      !isOrganizer
                        ? "bg-green text-white"
                        : "bg-lighter-white text-strong-green"
                    }`}
                  >
                    I'm a Volunteer
                  </p>
                </div>
              </div>

              {/* Organizer Name (if selected) */}
              {isOrganizer && (
                <div className="grid w-full gap-1.5">
                  <Label
                    htmlFor="organizerName"
                    className="text-light-gray font-light"
                  >
                    Organizer's name *
                  </Label>
                  <input
                    id="organizerName"
                    placeholder="HRD Center"
                    className="text-gray-500 px-3 h-9 bg-lighter-white border-none rounded-md w-full outline-none"
                    {...register("organizerName")}
                  />
                  {errors.organizerName && (
                    <p className="text-red-400 text-xs">
                      {errors.organizerName.message}
                    </p>
                  )}
                </div>
              )}

              <p className="text-red-400 text-xs">{message}</p>
            </section>

            <Button
              type="submit"
              className="w-full cursor-pointer bg-green hover:bg-green-800 text-white rounded-xl text-md h-9"
            >
              Submit
            </Button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default AdditonalInfoComponent;
