"use client";
import { registerAction } from "@/action/auth-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema } from "@/lib/zod/RegisterShecma";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function RegisterCopmponent({ onNext, handleEmailChange }) {
  const [isVerified, setIsVerified] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const handleRegister = async (formData) => {
    const isSuccess = await registerAction(formData);
    handleEmailChange(formData.email);
    if (isSuccess?.success) {
      setIsVerified(false);
      reset();
      onNext();
    } else {
      setIsVerified(true);
      setMessage(isSuccess?.message);
    }
  };
  return (
    <>
      {/* Container */}
      <section className=" h-screen w-full flex justify-center items-center bg-[url('/assets/login_images/bg-login.jpg')] bg-cover bg-no-repeat object-contain bg-center ">
        <section className=" w-full h-screen bg-[#00000054]  gap-15 flex justify-center items-center   p-10 lg:p-20">
          {/* article */}

          <article className="w-1/4 lg:w-[300px]">
            <h1 className="text-4xl lg:text-5xl mb-2 font-bold text-white">
              Ripple<span className="text-green">Eco</span>
            </h1>
            <h4 className="text-2xl lg:text-3xl  my-4 text-white font-medium">
              Join us. Together for a greener future.
            </h4>
            <p className="w-full lg:w-full mt-2  lg:text-lg font-light text-light-gray">
              Your impact starts here. Every ripple begins with one drop.
            </p>
          </article>

          <section className="flex justify-center items-center flex-col gap-3 w-[400px]  bg-linear-to-r/srgb from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md  rounded-2xl p-8">
            {/* form */}
            <form
              action={handleSubmit(handleRegister)}
              className="flex justify-center items-center flex-col gap-3  w-full  "
            >
              <h1 className="text-3xl font-semibold text-white text-center">
                Sign up
              </h1>
              <section className="flex justify-between items-center flex-col gap-5 w-full">
                {/* input email */}
                <div className="grid w-full items-center gap-1.5 relative ">
                  <Label
                    htmlFor="email"
                    className="text-white text-[14px] font-light"
                  >
                    Email
                  </Label>
                  <span className="flex justify-center items-center gap-1.5 top-[38px] left-3 absolute text-strong-gray">
                    <Mail size={18} className="text-strong-gray" />|
                  </span>
                  <input
                    className="text-strong-gray pl-12 h-11 text-lg font-normal placeholder:text-200-gray placeholder:font-light bg-lighter-white focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                    required
                    type="email"
                    id="email"
                    placeholder="example@gmaill.com"
                    {...register("email")}
                  />
                  <span
                    className={clsx("flex justify-start gap-x-2 items-center", {
                      hidden: !isVerified,
                    })}
                  >
                    <span className="text-red-400 text-sm">{message}</span>
                  </span>
                </div>
                <Button
                  type="submit"
                  className="w-full text-white bg-strong-green hover:bg-green-800 text text-center cursor-pointer rounded-2xl p-4 h-11 text-lg"
                >
                  Sent OTP
                </Button>
              </section>
            </form>
            <div className="flex justify-center items-center gap-x-2 w-full px-2 ">
              <span className="w-full h-[1.5px] grow bg-light-gray  opacity-50 rounded-3xl"></span>
              <span className="text-sm text-white">OR</span>
              <span className="w-full h-[1.5px] grow bg-light-gray opacity-50  rounded-3xl"></span>
            </div>
            {/* login with google */}

            <Button className="w-full  text-center cursor-pointer text-dark-green text-lg hover:bg-light-gray  bg-lighter-white backdrop-blur-md  rounded-2xl p-4 h-11 ">
              <img
                src="/icons/flat-color-icons_google.png"
                className="h-5 w-5"
                alt=""
              />
              Login with Google
            </Button>
            <div className="flex justify-center items-center gap-2">
              <p className="text-sm text-light-gray font-light">
                Already have an account?
              </p>
              <Link
                className="underline text-sm font-medium text-white"
                href="/login"
              >
                Sign in
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default RegisterCopmponent;
