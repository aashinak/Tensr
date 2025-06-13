"use client";
import Button from "@/shared/components/Button";
import React from "react";
import { useResetPasswordContext } from "../context/ResetPasswordContext";
import PasswordResetForm from "./PasswordResetForm";

// ConfirmationButton component to handle the confirmation of password reset
// This component checks if the token and email are valid before showing the reset form
function ConfirmationButton() {
  const { token, email } = useResetPasswordContext();

  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleButtonClick = () => {
    if (token && email) {
      setIsFormOpen(true);
    } else {
      alert("Invalid request. Please check the URL.");
    }
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      {/* If the form is open, show the PasswordResetForm component */}
      {isFormOpen && <PasswordResetForm />}
      {/* If the form is not open, show the confirmation button */}
      {!isFormOpen && (
        <Button
          onClickHandler={handleButtonClick}
          className="bg-[#f1f1f1] hover:bg-[#f1f1f1]/95 text-black"
          text="Click here to reset password"
        />
      )}
    </div>
  );
}

export default ConfirmationButton;
