import { SectionTextProps } from "@/types/Types";
import React from "react";



const SectionHeading: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h2
      className={`text-[58px] leading-[86px] font-bold  ${className || ""}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
