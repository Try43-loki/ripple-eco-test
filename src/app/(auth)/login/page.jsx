import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <>
      <section className=" h-screen bg-[url('/backgroundLogin.jpg')]  flex justify-center items-center bg-center bg-no-repeat object-cover">
        <article>
          <h1>
            Ripple<span>Eco</span>
          </h1>
          <h4>
            Welcome to <br />
            Ripple <span>Eco</span>
          </h4>
          <p>
            When communities unite, change becomes possible — for people and the
            planet. Awareness is the seed — collective action is the growth.
          </p>
        </article>

        <form
          action=""
          className="flex justify-center items-center flex-col gap-5"
        >
          <h5>Login</h5>
          <Link href="#" className="underline text-white text-md">
            Forgot your password?
          </Link>
          <Button className="w-full text text-center">Login</Button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
