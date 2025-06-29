import React from 'react';
import ThemeToggle from './ThemeToggle';
import ArrowRight from './icons/ArrowRight';
import Button from './UI/Button';


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 bg-transfarent  py-6">
     
        <div className='flex justify-between items-center container-default'>
           <h1 className='text-[34px] uppercase font-bold text-black dark:text-white'>devlop.me</h1> 
           <div className='flex items-center gap-7 '>
            <ul className="text-[16px] text-black dark:text-white flex items-center gap-9">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Blog</li>

            </ul>

           
            <Button 
  text="Start Project"
  icon={<ArrowRight/>}
  className='py-2 ms-7'

/>
           <ThemeToggle />
           </div>
         
        </div>
        
         
        
      
    </nav>
  );
};

export default Navbar;