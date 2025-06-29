import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';


const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
     
        
        
         
          <ThemeToggle />
      
    </nav>
  );
};

export default Navbar;