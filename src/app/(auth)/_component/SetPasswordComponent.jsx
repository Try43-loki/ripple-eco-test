"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeftCircleIcon, Eye, EyeClosed, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function SetPasswordComponent() {
  const [showPassword, setShowPassword] = useState(false);
  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/assets/bg-login.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen bg-[#00000054] flex justify-center items-center p-10 lg:p-20">
        <article className="w-[400px] lg:w-[300px]">
          <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
            Ripple<span className="text-finished">Eco</span>
          </h1>
          <h4 className="text-2xl lg:text-3xl my-4 text-white font-medium">
            Join us. Together for <br />a greener future.
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
                        index < 2 ? "bg-primary" : "bg-light-gray"
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
            className="flex justify-center items-center flex-col  w-full  "
          >
            <h5 className="text-3xl text-white">Login</h5>

            <section className="flex justify-between items-center flex-col gap-2 w-full">
              {/* input password */}
              <div className="grid w-full items-center gap-1.5 relative ">
                <Label
                  htmlFor="password"
                  className="text-white text-[14px] font-light"
                >
                  Password
                </Label>
                <span className="flex justify-center items-center text-[14px] gap-1 top-[34px] left-2.5 absolute text-gray-500">
                  <Lock size={14} />|
                </span>
                <span
                  onClick={handleShowPassword}
                  className="flex justify-center items-center text-[14px] gap-1 top-[37px] right-2.5 absolute text-gray-500 cursor-pointer"
                >
                  {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
                </span>
                <input
                  required
                  className="text-gray-500 pl-9 text-[14px]   placeholder:text-strong-gray placeholder:font-light  bg-input-color focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="123"
                />
              </div>

              <Link
                href="#"
                className="underline text-end w-full my-2 font-light  text-white text-[12px] "
              >
                Forgot your password?
              </Link>
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
        </section>
      </section>
    </section>
  );
}

export default SetPasswordComponent;
