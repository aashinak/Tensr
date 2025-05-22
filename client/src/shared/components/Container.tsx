import React from "react";

type ContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

function Container({ className = "", style = {}, children }: ContainerProps) {
  return (
    <div className={`${className} md:bg-[#292929] rounded-[19px] md:p-10 `} style={style}>
      {children}
    </div>
  );
}

export default Container;
