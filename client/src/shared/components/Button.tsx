"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Typography from "./Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ButtonProps = {
  // Icon props
  iconPosition?: "left" | "right";
  iconSize?: number;
  iconColor?: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  iconWidth?: number;
  iconHeight?: number;
  iconAlt?: string;
  iconSrc?: string;

  // Button props
  className?: string;
  style?: React.CSSProperties;
  text: string;
  onClickHandler?: () => void;
  type?: "button" | "submit" | "reset";
};

function Button({
  iconPosition = "left",
  iconSize = 20,
  iconColor,
  iconClassName = "",
  iconStyle = {},
  iconWidth = 20,
  iconHeight = 20,
  iconAlt = "button icon",
  iconSrc = "",
  className = "",
  style = {},
  onClickHandler,
  type = "button",
  text,
}: ButtonProps) {
  // Animation
  const buttonRef = useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    const el = buttonRef.current;
    if (!el) return;

    const handleClick = () => {
      gsap.fromTo(
        el,
        { scale: 0.90, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        }
      );
    };

    el.addEventListener("click", handleClick);

    return () => {
      el.removeEventListener("click", handleClick); // cleanup
    };
  }, []);
  
  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClickHandler}
      className={`${className} font-poppins flex justify-center items-center gap-4 hover:shadow-md cursor-pointer rounded-[19px] p-5`}
      style={style}
    >
      {iconPosition === "left" && iconSrc && (
        <Image
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          src={iconSrc}
          className={iconClassName}
          style={{
            ...iconStyle,
          }}
        />
      )}

      <Typography className="md:font-medium font-semibold text-xs md:text-base">
        {text}
      </Typography>

      {iconPosition === "right" && iconSrc && (
        <Image
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          src={iconSrc}
          className={iconClassName}
          style={{
            width: iconSize,
            height: iconSize,
            color: iconColor,
            ...iconStyle,
          }}
        />
      )}
    </button>
  );
}

export default Button;
