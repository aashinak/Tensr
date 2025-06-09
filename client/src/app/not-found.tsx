import Typography from "@/shared/components/Typography";
import React from "react";

function notfound() {
  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="flex gap-4 justify-center items-center">
        <Typography variant="heading" className="text-[#808080]">
          404
              </Typography>
              {/*seperator */}
        <div className="border-l border-[#808080] h-6"></div>
        <Typography variant="heading" className="text-[#808080]">
          Page Not Found
        </Typography>
      </div>
    </div>
  );
}

export default notfound;
