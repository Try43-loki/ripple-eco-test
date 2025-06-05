import { doSocialLogin } from "@/action/loginSocialAction";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React from "react";

function LoginSocialComponent() {
  const currentPath = usePathname();
  return (
    <form action={doSocialLogin} className="w-full">
      <Button
        type="submit"
        name="action"
        value="google"
        className="w-full h-11 text-center cursor-pointer text-md bg-white backdrop-blur-md hover:bg-white  rounded-2xl p-4"
      >
        <img
          src="/icons/flat-color-icons_google.png"
          className="h-5 w-5"
          alt=""
        />
        {currentPath === "/login" ? "Login with Google" : "Sign in with Google"}
      </Button>
    </form>
  );
}

export default LoginSocialComponent;
