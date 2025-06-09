"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import Typography from "./Typography";
import gsap from "gsap";
import { X } from "lucide-react";

type DialogProps = {
  closeButton?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  dialogHeader?: string;
  children?: React.ReactNode;
  dialogDescription?: string;
};

function Dialog({
  closeButton,
  setIsOpen,
  isOpen,
  dialogHeader,
  children,
  dialogDescription,
}: DialogProps) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      gsap.fromTo(
        dialogRef.current,
        { scale: 0.9 },
        { scale: 1, duration: 0.5, ease: "power1" }
      );
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/90">
      <Container
        ref={dialogRef}
        className="relative flex flex-col justify-center lg:w-2/5 min-h-1/2 bg-[#292929] p-5 md:p-10 sm:w-3/4 w-11/12 md:w-full"
      >

        {closeButton && (
          <X
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 cursor-pointer rounded-2xl hover:bg-white/5 w-6 h-6 p-1"
          />
        )}

        {dialogHeader && (
          <Typography
            variant="heading"
            className="text-center text-xl md:text-3xl text-[#d1d1d1]"
          >
            {dialogHeader}
          </Typography>
        )}

        <Typography
          variant="subheading"
          className="text-center mt-2 text-xs md:text-sm text-[#909090]"
        >
          {dialogDescription}
        </Typography>
        {children}
      </Container>
    </div>
  );
}

export default Dialog;
