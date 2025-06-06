import { doSocialLogin } from "@/action/loginSocialAction";
import React from "react";

function LoginFormComponent() {
  return (
    <form
      action={doSocialLogin}
      className="flex mt-5 justify-center items-center gap-x-5"
    >
      <button
        type="submit"
        name="action"
        value="google"
        className="px-2 py-1  rounded-md bg-white text-black text-xl font-medium"
      >
        sign in with google
      </button>
      <button
        type="submit"
        name="action"
        value="github"
        className="px-2 py-1  border border-white rounded-md bg-black text-white text-xl font-medium"
      >
        sign in with github
      </button>
    </form>
  );
}

export default LoginFormComponent;
