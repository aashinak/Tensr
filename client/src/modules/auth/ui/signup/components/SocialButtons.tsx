"use client";
import Button from "@/shared/components/Button";
import React from "react";

function SocialButtons() {
    return (

    <div className="w-11/12 flex flex-col justify-center mx-auto mt-4 space-y-3 md:space-y-5">
      <Button
        iconSrc="/google.svg"
        className="w-full font-semibold shadow-[inset_0_0_0_0.8px_#414141] text-[#d1d1d1]"
        text="SIGNUP WITH GOOGLE"
      />
      <Button
        iconSrc="/github_1.svg"
        iconHeight={22}
        iconWidth={22}
        onClickHandler={() => {
          console.log("Github signup clicked");
        }}
        className="w-full font-bold shadow-[inset_0_0_0_0.8px_#414141] text-[#d1d1d1]"
        text="SIGNUP WITH GITHUB"
      />
    </div>
  );
}

export default SocialButtons;
