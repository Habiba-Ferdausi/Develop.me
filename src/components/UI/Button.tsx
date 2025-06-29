"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string; 
  iconClassName?: string; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  className = "",
  iconClassName = "",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        rounded-full border pe-3 cursor-pointer
        border-black dark:border-white text-[16px]
        text-black dark:text-white transition-all duration-200
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      {text}
    </motion.button>
  );
};

export default Button;
