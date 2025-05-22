import Typography from "@/shared/components/Typography";
import Link from "next/link";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <div className="h-dvh flex flex-col items-center gap-4 md:gap-10 pt-5 md:pt-10">
      <Link href={"/"}>
        <Typography className="bg-[#272727] px-6 py-2 rounded-2xl" variant="tensr">Tensr</Typography>
      </Link>
      {children}
    </div>
  );
}

export default layout;
