"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { MdOutlineLightMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full  border border-primary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MdOutlineLightMode />
         
          
      ) : (
        <CiDark />
      )}
    </motion.button>
  );
};

export default ThemeToggle;