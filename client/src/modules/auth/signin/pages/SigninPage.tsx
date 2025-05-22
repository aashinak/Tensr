import Container from "@/shared/components/Container";
import Typography from "@/shared/components/Typography";
import React from "react";
import SocialButtons from "../../shared/components/SocialButtons";
import Link from "next/link";
import SigninForm from "../components/SigninForm";

function SigninPage() {
  return (
    <Container className="lg:w-2/5   sm:w-3/4 w-full">
      <Typography
        variant="heading"
        className="text-center text-2xl  text-[#d1d1d1]"
      >
        Welcome back geek !!
      </Typography>
      {/* Signin Form */}
      <div className="w-11/12 flex flex-col justify-center mx-auto mt-10 ">
        <SigninForm />
        <Link href={"/signup"}>
          <Typography className="text-xs text-center md:text-sm text-[#9a9a9a] mt-4">
            Forgot Password?
          </Typography>
        </Link>
      </div>

      {/* Seperator */}

      <Typography className="text-center text-sm font-semibold text-[#9a9a9a] mt-4">
        OR
      </Typography>
      {/* Social Media Signup Buttons */}
      <SocialButtons />
      {/* Link to Sign In */}
      <Link href={"/signup"}>
        <Typography className="text-center text-xs md:text-sm text-[#9a9a9a] mt-4">
          Don&apos;t have an account?{" "}
        </Typography>
      </Link>
    </Container>
  );
}

export default SigninPage;
