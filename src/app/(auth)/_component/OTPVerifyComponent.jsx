"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircleIcon } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function OTPVerifyComponent({ onNext, onPrev }) {
  const pathName = usePathname();
  const [otpCode, setOtpCode] = useState();
  const [resendOtp, setResendOtp] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleOTPChange = (value) => {
    setOtpCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted OTP:", otpCode);
  };

  useEffect(() => {
    let timer;

    if (resendOtp) {
      setTimeLeft(5);

      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setResendOtp(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [resendOtp]);

  const handleSendOtp = () => {
    setResendOtp(true);
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/assets/login_images/bg-login.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen bg-[#00000054] flex justify-center items-center p-10 lg:p-20">
        <article className="w-1/4 lg:w-[300px]">
          <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
            Ripple<span className="text-green">Eco</span>
          </h1>
          <h4 className="text-2xl lg:text-3xl my-4 text-white font-medium">
            Almost there — keep <br />
            the <span className="text-orange">ripple</span> going.
          </h4>
          <p className="mt-2 lg:text-lg font-light text-light-gray">
            Your impact starts here. Every ripple begins with one drop.
          </p>
        </article>

        <section className="flex flex-col justify-center items-center gap-4 w-[400px] bg-gradient-to-r from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md rounded-2xl p-8">
          {/* Stepper */}
          <div className="flex items-center w-full gap-2">
            <ChevronLeftCircleIcon size={20} color="white" onClick={onPrev} />
            {pathName === "/register" && (
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
                        index < 1 ? "bg-green" : "bg-light-gray"
                      }`}
                    ></span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full px-4"
          >
            <h3 className="text-lg text-white text-center">
              Enter Verification Code
            </h3>

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
                      className="border caret-white text-lg text-white border-light-gray rounded-md"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex flex-col gap-y-3 w-full">
              <Button
                type="submit"
                onClick={onNext}
                className="w-full text-white  bg-strong-green hover:bg-green-800 rounded-2xl p-4 h-10 text-md cursor-pointer"
              >
                Verify
              </Button>
              <p className="text-light-gray text-sm text-center">
                {resendOtp ? (
                  `Code expires in: ${formatTime(timeLeft)}`
                ) : (
                  <Button
                    type="button"
                    onClick={() => setResendOtp(true)}
                    className="w-full text-white cursor-pointer bg-transparent hover:bg-transparent border border-light-gray rounded-2xl p-4 h-10 text-md"
                  >
                    Resend Code
                  </Button>
                )}
              </p>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}

export default OTPVerifyComponent;
