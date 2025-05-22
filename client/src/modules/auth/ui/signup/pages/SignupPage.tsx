import Container from "@/shared/components/Container";
import Typography from "@/shared/components/Typography";
import React from "react";
import SignupForm from "../components/SignupForm";
import SocialButtons from "../components/SocialButtons";
import Link from "next/link";

function SignupPage() {
  return (
    <Container className="lg:w-2/5   sm:w-3/4 w-full">
      <Typography variant="heading" className="text-center text-2xl  text-[#d1d1d1]">
        Welcome geek !!
      </Typography>
      {/* Signup Form */}
      <div className="w-11/12 flex justify-center mx-auto mt-10 ">
        <SignupForm />
      </div>

      {/* Seperator */}

      <Typography className="text-center text-sm font-semibold text-[#9a9a9a] mt-4">
        OR
      </Typography>
      {/* Social Media Signup Buttons */}
      <SocialButtons />
      {/* Link to Sign In */}
      <Link href={"/signin"}>
        <Typography className="text-center text-xs md:text-sm text-[#9a9a9a] mt-4">
          Already have an account?{" "}
        </Typography>
      </Link>
    </Container>
  );
}

export default SignupPage;
