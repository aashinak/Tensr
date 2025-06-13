import Typography from "@/shared/components/Typography";
import React from "react";

function InvalidRequest() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <Typography variant="heading" className="text-[#808080]">
        Invalid request.
      </Typography>
    </div>
  );
}

export default InvalidRequest;
