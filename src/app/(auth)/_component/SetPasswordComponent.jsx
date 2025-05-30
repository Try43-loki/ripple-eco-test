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
import { usePathname } from "next/navigation";
import { useState } from "react";

function SetPasswordComponent({ onNext, onPrev }) {
  const pathName = usePathname();
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);
  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowCfPassword = () => {
    setShowCfPassword(!showCfPassword);
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
                        index < 2 ? "bg-green" : "bg-light-gray"
                      }`}
                    ></span>
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Form */}
          <form
            action=""
            className="flex justify-center items-center flex-col  w-full  "
          >
            <section className="flex justify-between items-center flex-col gap-4 w-full">
              {/* input password */}
              <div className="grid w-full items-center gap-1.5  ">
                <Label
                  htmlFor="password"
                  className=" text-label text-light-gray font-light"
                >
                  Password
                </Label>

                <div className="relative">
                  <input
                    required
                    className="text-gray-500 pl-9 text-label h-11   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="123"
                  />
                  <span className="flex justify-center items-center text-label gap-1 top-[11px] left-2.5 absolute text-gray-500">
                    <Lock size={14} />|
                  </span>
                  <span
                    onClick={handleShowPassword}
                    className="flex justify-center items-center text-label gap-1 top-[15px] right-2.5 absolute text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
                  </span>
                </div>
              </div>
              {/* Confirm password */}
              <div className="grid w-full items-center gap-1.5 relative ">
                <Label
                  htmlFor="cfpassword"
                  className=" text-label text-light-gray font-light"
                >
                  Confirm Password
                </Label>

                <div className="relative">
                  <input
                    required
                    className="text-gray-500 pl-9 text-label h-11   placeholder:text-strong-gray placeholder:font-light  bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    type={showCfPassword ? "text" : "password"}
                    id="cfpassword"
                    placeholder="123"
                  />
                  <span className="flex justify-center items-center text-label gap-1 top-[11px] left-2.5 absolute text-gray-500">
                    <Lock size={14} />|
                  </span>
                  <span
                    onClick={handleShowCfPassword}
                    className="flex justify-center items-center text-label gap-1 top-[15px] right-2.5 absolute text-gray-500 cursor-pointer"
                  >
                    {showCfPassword ? (
                      <Eye size={16} />
                    ) : (
                      <EyeClosed size={16} />
                    )}
                  </span>
                </div>
              </div>
            </section>
            {/* condition */}
            <article className="flex justify-start items-start flex-col gap-y-2 mt-2 w-full">
              <p className="text-label text-white text-start ">
                Your password must contain
              </p>
              <ul className="flex justify-center items-start flex-col gap-y-1">
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center ">
                    <CircleCheck size={17} className="text-white" />
                  </div>
                  <p className="text-white text-sub-info">
                    At least 8 characters
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center ">
                    <CircleCheck size={17} className="text-white" />
                  </div>
                  <p className="text-white text-sub-info">At least 1 number</p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center ">
                    <CircleCheck size={17} className="text-white" />
                  </div>
                  <p className="text-white text-sub-info">
                    At least 1 uppercase & lowercase characters
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center ">
                    <CircleCheck size={17} className="text-white" />
                  </div>
                  <p className="text-white text-sub-info">
                    At least 1 special character ( Example : !@#$ )
                  </p>
                </li>
              </ul>
            </article>
            {/* Button submit */}
            <Button
              onClick={onNext}
              className="w-full text-white bg-strong-green hover:bg-green-800 rounded-xl mt-4 h-11  text-md"
            >
              Next
            </Button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default SetPasswordComponent;
