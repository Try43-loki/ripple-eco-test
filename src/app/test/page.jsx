"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (res?.status === 200) {
      router.push("/book");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <h2 className="font-bold text-3xl text-orange-500 text-center">
        KSHRD Login Page
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-lg flex-col gap-6 border p-10 mt-10 border-orange-500 rounded-xl"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <Link
            href="/register"
            className="text-sm text-blue-600 font-semibold"
          >
            Sign Up
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
