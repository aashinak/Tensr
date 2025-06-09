import Button from "@/shared/components/Button";
import Dialog from "@/shared/components/Dialog";
import OtpInput from "@/shared/components/OtpInput";
import Typography from "@/shared/components/Typography";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type OtpDialogProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
function OtpDialog({ setIsOpen, isOpen }: OtpDialogProps) {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on close
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s} mins left`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted OTP:", otp);
    setIsOpen(false); // Close dialog after submission
    router.push("/dashboard"); // Redirect to dashboard on successful OTP verification
    // TODO: Verification API call
  };

  return (
    <Dialog
      closeButton
      dialogDescription="An email with the OTP has been sent to your email address."
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      dialogHeader="Otp verification"
    >
      <form
        onSubmit={handleSubmit}
        className="md:w-3/4 flex flex-col gap-3 mx-auto mt-5 md:mt-10"
      >
        <OtpInput onComplete={(value) => setOtp(value)} />
        <Typography className="text-sm">
          &nbsp;&nbsp;{formatTime(timeLeft)}
        </Typography>
        <div className="flex mx-auto w-full gap-4">
          <Button
            className="bg-[#323232] hover:bg-white/5 w-full"
            text="RESEND"
            onClickHandler={() => {
              console.log("Resend OTP");
              setTimeLeft(120); // Reset timer on resend
            }}
            disabled={timeLeft > 0}
          />
          <Button
            type="submit"
            className="bg-[#f1f1f1] hover:bg-[#f1f1f1]/95 text-black w-full"
            text="VERIFY"
          />
        </div>
      </form>
    </Dialog>
  );
}

export default OtpDialog;
