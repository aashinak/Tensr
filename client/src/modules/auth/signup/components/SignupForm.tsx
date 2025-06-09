// Used to create a signup form with validation and OTP dialog
// Uses react-hook-form for form handling and zod for validation.
// Displays input fields for username, fullname, email, password, and confirm password.

"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../types";
import InputBox from "@/shared/components/InputBox";
import Button from "@/shared/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../validators";
import OtpDialog from "../../shared/components/OtpDialog";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(signupSchema) });
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="w-full">
      <OtpDialog isOpen={isOpen} setIsOpen={setIsOpen} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3 md:gap-5 w-full"
      >
        {/* Row 1: Username & Fullname */}
        <InputBox
          disabled={isLoading}
          onChangeCallback={(value) => {
            console.log(value);
          }}
          required
          name="username"
          placeholder="Enter your username"
          register={register}
          errors={errors}
        />
        <InputBox
          disabled={isLoading}
          required
          name="fullname"
          placeholder="Enter your fullname"
          register={register}
          errors={errors}
        />

        {/* Row 2: Email (spans both columns) */}

        <InputBox
          disabled={isLoading}
          className="col-span-2"
          required
          type="email"
          name="email"
          placeholder="Enter your email"
          register={register}
          errors={errors}
        />

        {/* Row 3: Password & Confirm Password */}
        <InputBox
          disabled={isLoading}
          required
          name="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          errors={errors}
        />
        <InputBox
          disabled={isLoading}
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          register={register}
          errors={errors}
        />

        {/* Submit Button */}
        <Button
          disabled={isLoading}
          className="col-span-2 font-semibold bg-[#d3d3d3] text-black"
          text={isLoading ? "Signing up..." : "Sign Up"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default SignupForm;
