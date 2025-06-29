import { SectionTextProps } from "@/types/Types";
import React from "react";



const SectionText: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h2
      className={`lg:text-lg text-sm lg:leading-[33px] leading-normal  ${className || ""}`}
    >
      {text}
    </h2>
  );
};

export default SectionText;
