import { SectionTextProps } from "@/types/Types";
import React from "react";



const SectionText: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h2
      className={`text-lg leading-[33px]  ${className || ""}`}
    >
      {text}
    </h2>
  );
};

export default SectionText;
