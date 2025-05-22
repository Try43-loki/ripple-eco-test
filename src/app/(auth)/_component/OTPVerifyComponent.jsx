"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftCircleIcon, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function OTPVerifyCopmponent() {
  return (
    <>
      {/* Container */}
      <section className=" h-screen w-full flex justify-center items-center bg-[url('/assets/bg-login.jpg')] bg-cover bg-no-repeat object-contain bg-center ">
        <section className=" w-full h-screen bg-[#00000054]  gap-15 flex justify-center items-center   p-10 lg:p-20">
          {/* article */}

          <article className="w-[400px] lg:w-[500px]">
            <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
              Ripple<span className="text-finished">Eco</span>
            </h1>
            <h4 className="text-2xl lg:text-3xl  my-4 text-white font-medium">
              Almost there — keep <br />
              the
              <span className="text-red-custome"> ripple </span> going.
            </h4>
            <p className="w-full lg:w-full mt-2  lg:text-lg font-light text-light-gray">
              Your impact starts here. Every ripple begins with one drop.
            </p>
          </article>

          <section className="flex justify-center items-center flex-col gap-2 w-[400px] lg:w-[500px]  bg-linear-to-r/srgb from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md  rounded-2xl p-8">
            {/* form */}
            <form
              action=""
              className="flex justify-center items-start flex-col gap-4  w-full  "
            >
              <div className="flex justify-between items-center w-full gap-2">
                <ChevronLeftCircleIcon size={18} color="white" />
                {/* step */}
                <div className="flex justify-between items-center gap-2 grow">
                  <span className="flex w-full justify-start items-start flex-col gap-[2px]">
                    <p className="text-[12px] text-white font-light">
                      1. Verify email
                    </p>
                    <span className="h-2 w-full rounded-2xl bg-primary"></span>
                  </span>
                  <span className="flex w-full justify-start items-start flex-col gap-[2px]">
                    <p className="text-[12px] text-white font-light">
                      2. Set Password
                    </p>
                    <span className="h-2 w-full rounded-2xl bg-primary"></span>
                  </span>
                  <span className="flex w-full justify-start items-start flex-col gap-[2px]">
                    <p className="text-[12px] text-white font-light">
                      3. Additional Info
                    </p>
                    <span className="h-2 w-full rounded-2xl bg-primary"></span>
                  </span>
                </div>
              </div>
              <section className="flex justify-between items-center flex-col gap-3 w-full">
                {/* input email */}
                <div className="grid w-full items-center gap-1.5 relative ">
                  <Label
                    htmlFor="email"
                    className="text-white text-[14px] font-light"
                  >
                    Email
                  </Label>
                  <span className="flex justify-center items-center text-[14px] gap-1 top-[34px] left-2.5 absolute text-gray-500">
                    <Mail size={14} />|
                  </span>
                  <Input
                    className="text-gray-500 pl-9 text-[14px]  placeholder:text-strong-gray placeholder:font-light  bg-input-color focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    required
                    type="email"
                    id="email"
                    placeholder="exaple@gmaill.com"
                  />
                </div>
                <Button className="w-full text text-center cursor-pointer rounded-2xl p-4">
                  Login
                </Button>
                <div className="flex justify-center items-center gap-x-2 w-full px-2 mt-2">
                  <span className="w-full h-[1.5px] grow bg-light-gray  opacity-50 rounded-3xl"></span>
                  <span className="text-sm text-white">OR</span>
                  <span className="w-full h-[1.5px] grow bg-light-gray opacity-50  rounded-3xl"></span>
                </div>
              </section>
            </form>
            {/* login with google */}

            <Button className="w-full text-center cursor-pointer text-title bg-white backdrop-blur-md  rounded-2xl p-4">
              <img
                src="/icons/flat-color-icons_google.png"
                className="h-5 w-5"
                alt=""
              />
              Login with Google
            </Button>
            <p className="text-[12px] text-light-gray font-light">
              Are you new here?{" "}
              <Link className="underline text-[12px] font-medium" href="#">
                Sign up
              </Link>{" "}
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default OTPVerifyCopmponent;
