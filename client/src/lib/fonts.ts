import { Poppins, Protest_Strike } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // This creates a CSS variable
  display: "swap",
});

export const protestStrike = Protest_Strike({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-protest-strike",
  display: "swap",
});
