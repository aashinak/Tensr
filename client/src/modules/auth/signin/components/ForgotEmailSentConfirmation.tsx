import Button from "@/shared/components/Button";
import Loading from "@/shared/components/Loading";
import Typography from "@/shared/components/Typography";
import React, { useEffect, useState } from "react";

type ForgotEmailSentConfirmationProps = {
  setIsOpen: (isOpen: boolean) => void;
  setIsEmailSent: (isEmailSent: boolean) => void;
};

function ForgotEmailSentConfirmation({
  setIsOpen,
  setIsEmailSent,
}: ForgotEmailSentConfirmationProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second intentional delay

    return () => clearTimeout(timeout);
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-6 text-center px-4">
      <div className="inline-flex items-center bg-[#303030] p-4 md:p-10 rounded-2xl justify-center gap-2 text-green-600">
        <svg
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <Typography variant="heading" className="text-lg font-medium">
          Success! Reset link sent
        </Typography>
      </div>

      <Typography variant="subheading" className="text-sm text-[#808080]">
        Please check your inbox and follow the instructions to reset your
        password. It may take a few moments to arrive.
      </Typography>

      <Button
        text="Close"
        type="button"
        className="w-1/2 mx-auto bg-green-100 text-green-700 hover:bg-green-200"
        onClickHandler={() => {
          setIsOpen(false);
          setIsEmailSent(false);
        }}
      />
    </div>
  );
}

export default ForgotEmailSentConfirmation;
