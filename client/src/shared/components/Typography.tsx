// src/shared/components/Typography.tsx
import React from "react";
import type { JSX } from "react";

type Variant = "heading" | "subheading" | "body" | "tensr";

type TypographyProps = {
  variant?: "heading" | "subheading" | "body" | "tensr";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

// Maps variants to semantic HTML tags
const variantTagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  heading: "h1",
  subheading: "h2",
  tensr: "h3",
  body: "p",
};

export default function Typography({
  className = "",
  style = {},
  variant = "body",
  children,
}: TypographyProps) {
  let baseClass = "";
  const Component: keyof JSX.IntrinsicElements = variantTagMap[variant] || "p";

  switch (variant) {
    case "heading":
      baseClass = `font-poppins  text-3xl font-semibold`;
      break;
    case "subheading":
      baseClass = `font-poppins  text-2xl font-medium`;
      break;
    case "tensr":
      baseClass = `font-protest-strike  text-3xl text-[#a2a2a2] `;
      break;
    default:
      baseClass = `font-poppins  text-base`;
  }

  return (
    <Component className={`${baseClass} ${className}`} style={style}>
      {children}
    </Component>
  );
}
