import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordSchema } from "../validators";
import { IResetPasswordFormInput } from "../types";
import InputBox from "@/shared/components/InputBox";
import Button from "@/shared/components/Button";
import { useResetPasswordContext } from "../context/ResetPasswordContext";
import Typography from "@/shared/components/Typography";

// PasswordResetForm component for resetting the password
function PasswordResetForm(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { clearAuthInfo } = useResetPasswordContext();

  const onSubmit: SubmitHandler<IResetPasswordFormInput> = async (data) => {
    // Handle the form submission logic here
    console.log("Form submitted with data:", data);
    clearAuthInfo(); // Clear the auth info after submission
    // You can call an API to reset the password here
    // For example: api.resetPassword(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 md:gap-5 w-3/4 md:w-1/3"
    >
      <InputBox
        className="col-span-2"
        required
        name="password"
        type="password"
        placeholder="Enter your new password"
        register={register}
        errors={errors}
      />
      <InputBox
        className="col-span-2"
        required
        name="confirmPassword"
        type="password"
        placeholder="Confirm your new password"
        register={register}
        errors={errors}
      />
      <Typography className="text-center text-xs md:text-sm text-[#808080]">
        Please ensure your password is at least 8 characters long and contains a
        mix of letters, numbers, and special characters.
      </Typography>
      <Button
        text="Reset Password"
        type="submit"
        className="col-span-2 font-semibold bg-[#d3d3d3] text-black p-2 rounded"
      />
    </form>
  );
}

export default PasswordResetForm;
