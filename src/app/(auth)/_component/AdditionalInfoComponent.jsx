"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ChevronLeftCircleIcon,
  CircleCheck,
  Eye,
  EyeClosed,
  Lock,
} from "lucide-react";
import { DatePickerComponent } from "./DatePickerComponent";
import { SelectGenderComponent } from "./SelectGenderComponent";
import { useState } from "react";

function AdditonalInfoComponent({ onNext }) {
  const [isOrganizer, setIsOrganizer] = useState(false);
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
          <div className="flex items-center w-full gap-2">
            <ChevronLeftCircleIcon size={18} color="white" />
            <div className="flex gap-2 grow">
              {["1. Verify email", "2. Set Password", "3. Additional Info"].map(
                (step, index) => (
                  <span
                    key={index}
                    className="flex flex-col gap-[2px] w-full items-start"
                  >
                    <p className="text-[12px] text-light-gray font-light">
                      {step}
                    </p>
                    <span
                      className={`h-2 w-full rounded-2xl ${
                        index < 2 ? "bg-green" : "bg-light-gray"
                      }`}
                    ></span>
                  </span>
                )
              )}
            </div>
          </div>
          {/* Form */}
          <form
            action=""
            className="flex justify-center items-center flex-col gap-y-4  w-full  "
          >
            <section className="flex justify-center items-center w-full flex-col gap-y-3">
              <div className="w-full flex justify-center items-center gap-x-3">
                <div className="grid w-full items-center gap-1.5  ">
                  <Label
                    htmlFor="firstName"
                    className=" text-label text-light-gray font-light"
                  >
                    First name
                  </Label>

                  <input
                    required
                    className="text-gray-500 px-3 text-sub-info h-9   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type="text"
                    id="firstName"
                    placeholder="Kim"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5  ">
                  <Label
                    htmlFor="lastName"
                    className=" text-label text-light-gray font-light"
                  >
                    Last name
                  </Label>

                  <input
                    required
                    className="text-gray-500 px-3 text-sub-info h-9   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type="text"
                    id="lastName"
                    placeholder="Hout"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-x-3">
                <div className="grid w-full items-center gap-1.5  ">
                  <Label
                    htmlFor="firstName"
                    className=" text-label text-light-gray font-light"
                  >
                    Date of Birth
                  </Label>
                  <DatePickerComponent />
                </div>
                <div className="grid w-full  items-center gap-1.5  ">
                  <Label
                    htmlFor="gender"
                    className=" text-label text-light-gray font-light"
                  >
                    Gender
                  </Label>

                  <SelectGenderComponent />
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-x-3">
                <div className="grid w-full items-center gap-1.5  ">
                  <Label
                    htmlFor="firstName"
                    className=" text-label text-light-gray font-light"
                  >
                    Address
                  </Label>

                  <input
                    required
                    className="text-gray-500 px-3 text-sub-info h-9   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type="text"
                    id="address"
                    placeholder="PP"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5  ">
                  <Label
                    htmlFor="gender"
                    className=" text-label text-light-gray font-light"
                  >
                    Phone Number
                  </Label>

                  <input
                    required
                    className="text-gray-500 px-3 text-sub-info h-9   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type="text"
                    id="lastName"
                    placeholder="012-345-678"
                  />
                </div>
              </div>
              {/* pick role */}
              <div className="flex justify-center items-center flex-col gap-y-1 w-full ">
                <p className="self-start text-sub-info text-light-white font-light">
                  Pick your role
                </p>
                <div className="flex justify-center items-center w-full gap-x-4">
                  <p
                    onClick={() => setIsOrganizer(true)}
                    className={`cursor-pointer text-center py-1.5 rounded-3xl text-sub-info grow ${
                      isOrganizer
                        ? "bg-green text-white"
                        : "bg-lighter-white text-strong-green"
                    }`}
                  >
                    I'm an Organizer
                  </p>
                  <p
                    onClick={() => setIsOrganizer(false)}
                    className={`cursor-pointer text-center py-1.5 text-sub-info rounded-3xl grow ${
                      isOrganizer
                        ? "bg-lighter-white text-strong-green"
                        : "bg-green text-white"
                    }`}
                  >
                    I'm a Volunteer
                  </p>
                </div>
              </div>
              {isOrganizer && (
                <div className="grid w-full items-center gap-1.5">
                  <Label
                    htmlFor="organizerName"
                    className="text-label text-light-gray font-light"
                  >
                    Organizer's name
                  </Label>
                  <input
                    required
                    className="text-gray-500 px-3 text-sub-info h-9 placeholder:text-strong-gray placeholder:font-light bg-lighter-white focus-visible:ring-0 border-none rounded-md w-full outline-none"
                    type="text"
                    id="organizerName"
                    placeholder="United Nations"
                  />
                </div>
              )}
            </section>
            <Button
              onClick={onNext}
              className="w-full bg-green hover:bg-green-800 text-white rounded-xl subtext-sub-info h-9  text-md"
            >
              Register
            </Button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default AdditonalInfoComponent;
