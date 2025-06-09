import React, { useRef, useState, useEffect } from "react";

type OtpInputProps = {
  length?: number;
  onComplete?: (otp: string) => void;
};

function OtpInput({ length = 5, onComplete }: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(""));
  const nextFocusIndex = useRef<number | null>(null);

  useEffect(() => {
    inputsRef.current = Array(length).fill(null);
  }, [length]);

  useEffect(() => {
    if (
      nextFocusIndex.current !== null &&
      nextFocusIndex.current < length &&
      inputsRef.current[nextFocusIndex.current]
    ) {
      inputsRef.current[nextFocusIndex.current]?.focus();
      nextFocusIndex.current = null;
    }
  }, [otpValues, length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1); // only digit
    if (!value) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Queue focus for next input after state update
    if (index < length - 1) {
      nextFocusIndex.current = index + 1;
    }

    const otpString = newOtpValues.join("");
    if (otpString.length === length && !newOtpValues.includes("")) {
      onComplete?.(otpString);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newOtpValues = [...otpValues];
      if (otpValues[index]) {
        newOtpValues[index] = "";
        setOtpValues(newOtpValues);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (pastedData.length === length) {
      const newOtp = pastedData.split("");
      setOtpValues(newOtp);
      onComplete?.(pastedData);
      inputsRef.current[length - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 w-full p-2 rounded">
      {Array.from({ length }).map((_, index) => (
        <input
          required
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otpValues[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onFocus={(e) => e.target.select()}
          autoFocus={index === 0}
          aria-label={`Digit ${index + 1}`}
          className="font-poppins text-center w-full px-3 py-5 md:p-5 rounded-[19px] bg-[#323232] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      ))}
    </div>
  );
}

export default OtpInput;
