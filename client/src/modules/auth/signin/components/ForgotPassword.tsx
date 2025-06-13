"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/shared/components/Button";
import Dialog from "@/shared/components/Dialog";
import InputBox from "@/shared/components/InputBox";
import Typography from "@/shared/components/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotEmailSchema } from "../validators";
import ForgotEmailSentConfirmation from "./ForgotEmailSentConfirmation";

type FormData = {
  forgotEmail: string;
};

function ForgotPassword() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEmailSent, setIsEmailSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(forgotEmailSchema) });

  const handleForgotPassword = () => {
    setIsOpen(true);
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted Email:", data.forgotEmail);
    setIsEmailSent(true);
    // TODO: Trigger your password reset API
    // setIsOpen(false);
    reset(); // reset form after submission
  };

  return (
    <div>
      <Dialog
        closeButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dialogHeader="Forgot Password"
        dialogDescription={
          !isEmailSent ? "Enter your email to reset your password" : ""
        }
      >
        {!isEmailSent ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-3/4 flex flex-col gap-3 mx-auto mt-5 md:mt-10"
          >
            <InputBox
              placeholder="Enter your email address"
              name="forgotEmail"
              type="email"
              required
              register={register}
              errors={errors}
            />

            <div className="flex justify-end mt-5">
              <Button
                style={{ padding: "15px" }}
                className="bg-[#f1f1f1] hover:bg-[#f1f1f1]/95 text-black"
                text="Send Reset Link"
                type="submit"
              />
            </div>
          </form>
        ) : (
          // Show confirmation message after email is sent
          <ForgotEmailSentConfirmation
            setIsEmailSent={setIsEmailSent}
            setIsOpen={setIsOpen}
          />
        )}
      </Dialog>

      <Typography
        onClick={handleForgotPassword}
        className="text-xs cursor-pointer hover:underline text-center md:text-sm text-[#9a9a9a] mt-4"
      >
        Forgot Password?
      </Typography>
    </div>
  );
}

export default ForgotPassword;
