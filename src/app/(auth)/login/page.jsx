import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MailCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <>
      {/* Container */}
      <section className=" h-screen w-full flex justify-center items-center bg-[url('/backgroundLogin.jpg')] bg-contain ">
        <section className=" w-[768px] h-full flex justify-center items-center object-fill bg-no-repeat bg-center p-12 ">
          {/* article */}

          <article>
            <h1>
              Ripple<span>Eco</span>
            </h1>
            <h4>
              Welcome to <br />
              Ripple <span>Eco</span>
            </h4>
            <p className="max-w-[400px]">
              When communities unite, change becomes possible — for people and
              the planet. Awareness is the seed — collective action is the
              growth.
            </p>
          </article>

          {/* form */}

          <form
            action=""
            className="flex justify-center items-center flex-col gap-5 w-[300px] bg-[#ffffff42]   backdrop-blur-md h-full rounded-2xl p-8"
          >
            <h5>Login</h5>

            <section className="flex justify-between items-center flex-col gap-4 w-full">
              <div className="grid w-full items-center gap-1.5 relative ">
                <Label
                  htmlFor="password"
                  className="text-white text-[14px] font-light"
                >
                  Email
                </Label>
                <span className="flex justify-center items-center text-[12px] gap-1 top-[36px] left-2.5 absolute text-gray-500">
                  <Mail size={12} />|
                </span>
                <Input
                  className="text-gray-500 pl-8 py-3  bg-[#F2F2F2] focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 relative ">
                <Label
                  htmlFor="password"
                  className="text-white text-[14px] font-light"
                >
                  Password
                </Label>
                <span className="flex justify-center items-center text-[12px] gap-1 top-[3px] left-2.5 absolute text-gray-500">
                  <Mail size={12} />|
                </span>
                <Input
                  className="text-gray-500 pl-8 py-3  bg-[#F2F2F2] focus-visible:ring-[0px] border-none rounded-md w-full outline-none  "
                  type="password"
                  id="password"
                  placeholder="123"
                />
              </div>
            </section>

            <Link href="#" className="underline text-white text-md">
              Forgot your password?
            </Link>
            <Button className="w-full text text-center">Login</Button>
          </form>
        </section>
      </section>
    </>
  );
}

export default LoginPage;
