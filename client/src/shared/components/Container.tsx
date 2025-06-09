import React from "react";

type ContainerProps = {
  ref?: React.Ref<HTMLDivElement>;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

function Container({ className = "", style = {}, children, ref }: ContainerProps) {
  return (
    <div ref={ref} className={`${className} md:bg-[#292929] rounded-[19px] md:p-10 `} style={style}>
      {children}
    </div>
  );
}

export default Container;
