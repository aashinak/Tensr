"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignInFormInput } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../validators";
import InputBox from "@/shared/components/InputBox";
import Button from "@/shared/components/Button";

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormInput>({ resolver: zodResolver(signInSchema) });
  const onSubmit: SubmitHandler<ISignInFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-3 md:gap-5 w-full"
    >
      <InputBox
        onChangeCallback={(value) => {
          console.log(value);
        }}
        className="col-span-2"
        required
        name="identifier"
        placeholder="Enter your username or email"
        register={register}
        errors={errors}
      />
      <InputBox
        className="col-span-2"
        required
        name="password"
        type="password"
        placeholder="Enter your password"
        register={register}
        errors={errors}
      />
      <Button
        className="col-span-2 font-semibold bg-[#d3d3d3] text-black"
        text="Sign In"
        type="submit"
      />
    </form>
  );
}

export default SigninForm;
