"use client";
import { setPasswordAction } from "@/action/auth-action";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { setPasswordSchema } from "@/lib/zod/setPasswordShecma";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronLeftCircleIcon,
  CircleCheck,
  CircleX,
  Eye,
  EyeClosed,
  Lock,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function SetPasswordComponent({ onNext, onPrev, email }) {
  const pathName = usePathname();
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [cfPasswordValue, setCfPasswordValue] = useState("");
  const [validationState, setValidationState] = useState({
    minLength: false,
    hasNumber: false,
    hasUpperLower: false,
    hasSpecialChar: false,
    passwordsMatch: false,
  });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(setPasswordSchema),
  });

  // Watch form values
  const watchedPassword = watch("password");
  const watchedCfPassword = watch("cfpassword");

  // Update validation state when password changes
  useEffect(() => {
    if (watchedPassword) {
      setPasswordValue(watchedPassword);
      validatePassword(watchedPassword, watchedCfPassword || "");
    }
  }, [watchedPassword]);

  useEffect(() => {
    if (watchedCfPassword) {
      setCfPasswordValue(watchedCfPassword);
      validatePassword(watchedPassword || "", watchedCfPassword);
    }
  }, [watchedCfPassword]);

  const validatePassword = (password, confirmPassword) => {
    const newValidationState = {
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasUpperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      passwordsMatch: password === confirmPassword && password.length > 0,
    };
    setValidationState(newValidationState);
  };

  const handelPassword = async (formData) => {
    const password = formData.password;
    const isSuccess = await setPasswordAction(password, email);
    if (isSuccess?.success) {
      onNext();
    }
  };

  // show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowCfPassword = () => {
    setShowCfPassword(!showCfPassword);
  };

  // Check if all validations pass
  const isFormValid = Object.values(validationState).every(Boolean);

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
            onSubmit={handleSubmit(handelPassword)}
            className="flex justify-center items-center flex-col w-full"
          >
            <section className="flex justify-between items-center flex-col gap-4 w-full">
              {/* input password */}
              <div className="grid w-full items-center gap-1.5">
                <Label
                  htmlFor="password"
                  className="text-label text-light-gray font-light"
                >
                  Password
                </Label>
                <div className="relative">
                  <input
                    required
                    className={`text-gray-500 pl-9 text-label h-11 placeholder:text-strong-gray placeholder:font-light bg-lighter-white focus-visible:ring-[0px] border-2 rounded-md w-full outline-none ${
                      errors.password ? "border-red-500" : "border-transparent"
                    }`}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    {...register("password")}
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
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm password */}
              <div className="grid w-full items-center gap-1.5 relative">
                <Label
                  htmlFor="cfpassword"
                  className="text-label text-light-gray font-light"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <input
                    required
                    className={`text-gray-500 pl-9 text-label h-11 placeholder:text-strong-gray placeholder:font-light bg-lighter-white focus-visible:ring-[0px] border-2 rounded-md w-full outline-none ${
                      errors.cfpassword
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                    type={showCfPassword ? "text" : "password"}
                    id="cfpassword"
                    placeholder="Confirm your password"
                    {...register("cfpassword")}
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
                {errors.cfpassword && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.cfpassword.message}
                  </p>
                )}
              </div>
            </section>

            {/* Dynamic validation requirements */}
            <article className="flex justify-start items-start flex-col gap-y-2 mt-4 w-full">
              <p className="text-label text-white text-start">
                Your password must contain
              </p>
              <ul className="flex justify-center items-start flex-col gap-y-1">
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center">
                    {validationState.minLength ? (
                      <CircleCheck size={17} className="text-green-400" />
                    ) : (
                      <CircleX size={17} className="text-red-400" />
                    )}
                  </div>
                  <p
                    className={`text-sub-info ${
                      validationState.minLength
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    At least 8 characters
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center">
                    {validationState.hasNumber ? (
                      <CircleCheck size={17} className="text-green-400" />
                    ) : (
                      <CircleX size={17} className="text-red-400" />
                    )}
                  </div>
                  <p
                    className={`text-sub-info ${
                      validationState.hasNumber
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    At least 1 number
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center">
                    {validationState.hasUpperLower ? (
                      <CircleCheck size={17} className="text-green-400" />
                    ) : (
                      <CircleX size={17} className="text-red-400" />
                    )}
                  </div>
                  <p
                    className={`text-sub-info ${
                      validationState.hasUpperLower
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    At least 1 uppercase & lowercase characters
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center">
                    {validationState.hasSpecialChar ? (
                      <CircleCheck size={17} className="text-green-400" />
                    ) : (
                      <CircleX size={17} className="text-red-400" />
                    )}
                  </div>
                  <p
                    className={`text-sub-info ${
                      validationState.hasSpecialChar
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    At least 1 special character ( Example : !@#$ )
                  </p>
                </li>
                <li className="flex item-center justify-center gap-x-2">
                  <div className="flex justify-center items-center">
                    {validationState.passwordsMatch ? (
                      <CircleCheck size={17} className="text-green-400" />
                    ) : (
                      <CircleX size={17} className="text-red-400" />
                    )}
                  </div>
                  <p
                    className={`text-sub-info ${
                      validationState.passwordsMatch
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    Password must be matching
                  </p>
                </li>
              </ul>
            </article>

            {/* Button submit */}
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`w-full text-white rounded-xl mt-4 h-11 text-md ${
                isFormValid
                  ? "bg-strong-green hover:bg-green-800"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
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
