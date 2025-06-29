import { SectionTextProps } from "@/types/Types";
import React from "react";



const SectionHeading: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h2
      className={`lg:text-[58px] text-[24px] lg:leading-[86px] font-bold  ${className || ""}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
