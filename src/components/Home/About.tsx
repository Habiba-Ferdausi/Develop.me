"use client" ;
import React from 'react'
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { GoArrowDown } from 'react-icons/go';
import SectionButton from '../UI/SectionButton';
import SectionTitle, { Highlight } from '../UI/SectionTitle';
import SectionText from '../UI/SectionText';

const logos = [
  { src: '/logos/logo1.png',        alt: 'Awwwards',       rotate: -10,  },
  { src: '/logos/logo2.png',      alt: 'CSS Winner',     rotate:   0,},
  { src: '/logos/logo3.png',    alt: 'ThoughtWorks',   rotate:  -8, },
  { src: '/logos/logo4.png',        alt: 'Facebook',       rotate:   0, },
  { src: '/logos/logo5.png',        alt: 'Autodesk',       rotate:   0,  },
  { src: '/logos/logo6.png',alt: 'CSS Design',     rotate:  0,  },
];

// Animation  part
const bgVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: 'easeOut' },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
const makeCardVariants = (r: number): Variants => ({
  hidden: { opacity: 0, y: 30, rotate: r },
  show:   { opacity: 1, y: 0, rotate: r, transition: { duration: .5, ease: 'easeOut' } },
});


export default function About() {


  return (
    <div className="-mt-[100px] pb-20 relative">
       {/* Background   */}
       <motion.div
        className="absolute inset-0 z-0"
        variants={bgVariants}
      >
        <Image
          src="/about-bg.png"
          alt="About background"
          fill
          priority
    
        />
      </motion.div>
      {/* main content */}
<div className='lg:w-[1130px] mx-auto pt-40 pb-20 relative z-10'> 
  {/* heading */}
         <motion.div variants={fadeUp} className="flex items-center pt-20 justify-end ">
                <GoArrowDown className="w-11 h-11 p-2 text-[12px] rounded-full border dark:border-white border-black grid place-content-center" />
                <SectionButton text="About" className="dark:border-white border-black" />
              </motion.div>
    <div className="mt-7">
      <SectionTitle className='text-center'>
      I&#39;ve been <Highlight variant="dot">Developing</Highlight><br/> Websites since <Highlight variant="dot">2013</Highlight>
               </SectionTitle>

               <SectionText text="We start every new client interaction with an in-depth discovery call where
we get to know each other and recommend the best course of
action." className='mt-6 text-center text-black dark:text-white w-[921px] mx-auto'/>
    </div>
    </div>
    <div className="container-default flex items-center gap-10">
       <h1 className='text-[26px] font-bold w-[244px]'>PREVIOUSLY WORKED ON</h1>

       <div className="flex flex-wrap gap-5 ms-5">
      {logos.map(({ src, alt, rotate }, i) => (
        <motion.div
          key={i}
          variants={makeCardVariants(rotate)}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.05 }}
          className='relative rounded-full border border-black dark:border-white select-none
                      px-5 py-3'
        >
          <Image
            src={src}
            alt={alt}
            width={120}
            height={24}
           
            priority
          />
        </motion.div>
      ))}
    </div>
      </div>
  </div>
  )
}
