"use client";
import Button from "@/shared/components/Button";
import React from "react";

type SocialButtonsProps = {
  method?: "signin" | "signup";
}

function SocialButtons({
  method = "signin",
}: SocialButtonsProps) {
    return (

    <div className="w-11/12 flex flex-col justify-center mx-auto mt-4 space-y-3 md:space-y-5">
      <Button
        iconSrc="/google.svg"
        className="w-full font-semibold shadow-[inset_0_0_0_0.8px_#414141] text-[#d1d1d1]"
        text={`SIGN ${method === "signin" ? "IN" : "UP"} WITH GOOGLE`}
      />
      <Button
        iconSrc="/github_1.svg"
        iconHeight={22}
        iconWidth={22}
        onClickHandler={() => {
          console.log("Github signup clicked");
        }}
        className="w-full font-bold shadow-[inset_0_0_0_0.8px_#414141] text-[#d1d1d1]"
        text={`SIGN ${method === "signin" ? "IN" : "UP"} WITH GITHUB`}
      />
    </div>
  );
}

export default SocialButtons;
