"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircleIcon } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";

function OTPVerifyComponent() {
  const [otpCode, setOtpCode] = useState("");

  const handleOTPChange = (value) => {
    setOtpCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted OTP:", otpCode);
  };

  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/assets/bg-login.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen bg-[#00000054] flex justify-center items-center p-10 lg:p-20">
        <article className="w-[400px] lg:w-[300px]">
          <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
            Ripple<span className="text-finished">Eco</span>
          </h1>
          <h4 className="text-2xl lg:text-3xl my-4 text-white font-medium">
            Almost there — keep <br />
            the <span className="text-light-orange-color">ripple</span> going.
          </h4>
          <p className="mt-2 lg:text-lg font-light text-light-gray">
            Your impact starts here. Every ripple begins with one drop.
          </p>
        </article>

        <section className="flex flex-col justify-center items-center gap-4 w-[400px] bg-gradient-to-r from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md rounded-2xl p-8">
          {/* Stepper */}
          <div className="flex items-center w-full gap-2">
            <ChevronLeftCircleIcon size={20} color="white" />
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
                        index === 0 ? "bg-primary" : "bg-light-gray"
                      }`}
                    ></span>
                  </span>
                )
              )}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full pl-9"
          >
            <h3 className="text-lg text-white">Enter Verification Code</h3>

            <div className="w-full">
              <InputOTP
                maxLength={6}
                value={otpCode}
                onChange={handleOTPChange}
                className="flex justify-center w-full"
              >
                <InputOTPGroup className="flex justify-between w-full gap-x-2">
                  {[...Array(6)].map((_, idx) => (
                    <InputOTPSlot
                      key={idx}
                      index={idx}
                      className="border border-light-gray rounded-md"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex flex-col gap-y-3 w-full">
              <Button
                type="submit"
                className="w-full rounded-2xl p-4 h-11 text-lg cursor-pointer"
              >
                Verify
              </Button>
              <Button
                type="button"
                className="w-full cursor-pointer bg-transparent hover:bg-transparent border border-light-gray rounded-2xl p-4 h-11 text-lg"
              >
                Resend Code
              </Button>
              <p className="text-light-gray text-sm text-center">
                Code expires in: <span>3:00</span>
              </p>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}

export default OTPVerifyComponent;
