import Container from "@/shared/components/Container";
import Typography from "@/shared/components/Typography";
import React from "react";

function SigninForm() {
  return (
    <Container className="lg:w-2/5 sm:w-3/4 w-full">
      <Typography variant="heading" className="text-center text-[#d1d1d1]">
        Welcome back geek !!
      </Typography>
    </Container>
  );
}

export default SigninForm;
