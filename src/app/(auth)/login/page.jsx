"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
              Welcome to <br />
              Ripple <span className="text-finished">Eco</span>
            </h4>
            <p className="w-full lg:w-full mt-2  lg:text-lg font-light text-light-gray">
              When communities unite, change becomes possible — for people and
              the planet. Awareness is the seed — collective action is the
              growth.
            </p>
          </article>

          <section className="flex justify-center items-center flex-col gap-4 w-[400px] lg:w-[500px]  bg-linear-to-r/srgb from-[#c4c4c463] to-[#5e5e5e69] backdrop-blur-md  rounded-2xl p-8">
            {/* form */}
            <form
              action=""
              className="flex justify-center items-center flex-col  w-full  "
            >
              <h5 className="text-3xl text-white">Login</h5>

              <section className="flex justify-between items-center flex-col gap-2 w-full">
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
                  <Input
                    required
                    className="text-gray-500 pl-9 text-[14px]  placeholder:text-strong-gray placeholder:font-light  bg-input-color focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
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

export default LoginPage;
