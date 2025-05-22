"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../types";
import InputBox from "@/shared/components/InputBox";
import Button from "@/shared/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../validators";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(signupSchema) });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-3 md:gap-5 w-full"
    >
      {/* Row 1: Username & Fullname */}
      <InputBox
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
        required
        name="fullname"
        placeholder="Enter your fullname"
        register={register}
        errors={errors}
      />

      {/* Row 2: Email (spans both columns) */}

      <InputBox
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
        required
        name="password"
        type="password"
        placeholder="Enter your password"
        register={register}
        errors={errors}
      />
      <InputBox
        required
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        register={register}
        errors={errors}
      />

      {/* Submit Button */}
      <Button
        className="col-span-2 font-semibold bg-[#d3d3d3] text-black"
        text="Submit"
        type="submit"
      />
    </form>
  );
}

export default SignupForm;
