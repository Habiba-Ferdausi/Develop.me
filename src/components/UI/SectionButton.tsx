import { SectionTextProps } from "@/types/Types";
import React from "react";



const SectionButton: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h2
      className={`lg:text-[16px] text-sm border rounded-full py-[9px] px-4  ${className || ""}`}
    >
      {text}
    </h2>
  );
};

export default SectionButton;
