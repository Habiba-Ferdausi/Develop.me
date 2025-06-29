'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { GoArrowDown } from 'react-icons/go';
import SectionButton   from '../UI/SectionButton';
import SectionTitle, { Highlight } from '../UI/SectionTitle';
import SectionText     from '../UI/SectionText';

const bgVariants: Variants = { hidden: { scale: 1.1, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 1.6, ease: 'easeOut' } } };
const fadeUp:    Variants = { hidden: { opacity: 0, y: 40 },       show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25,1,0.5,1] } } };

const logos = [
  { src: '/logos/logo1.png',     alt: 'awwwards',      bg: 'bg-black text-white', z: 50, rotate: -12, shift: ' rotate-[18deg]' },
  { src:  '/logos/logo4.png',    alt: 'CSS Winner',   bg: 'bg-white',             z: 40, rotate:   4, shift: ' '  },
  { src:  '/logos/logo6.png', alt: 'ThoughtWorks',  bg: 'bg-white',             z: 30, rotate:  -8, shift: ' rotate-[18deg] -ms-10'  },
  { src:  '/logos/logo2.png',   alt: 'facebook',   bg: 'bg-white',             z: 20, rotate:   5, shift: ''  },
  { src:  '/logos/logo3.png',    alt: 'Autodesk',   bg: 'bg-white',             z: 10, rotate:  -6, shift: 'rotate-[-10deg]' },
  { src:  '/logos/logo5.png',      alt: 'CSSDA',     bg: 'bg-white',             z:  0, rotate:   7, shift: ''  },
];

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: .25 }}
      className="relative -mt-[100px] pb-5 overflow-hidden"
    >
      {/* BG*/}
      <motion.div variants={bgVariants} className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.png"
          alt="Abstract gradient mesh background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </motion.div>

      {/*  Heading */}
      <div className="relative mx-auto lg:w-[1130px] max-w-[90%]  lg:pt-40 pt-26  lg:pb-20  z-10">
        <motion.div variants={fadeUp} className="flex items-center justify-end pt-16">
          <GoArrowDown className="lg:h-11 h-10 lg:w-11 w-10 rounded-full border border-black p-2 dark:border-white" />
          <SectionButton text="About" className="border-black dark:border-white" />
        </motion.div>

        <div className="mt-7 text-center">
          <SectionTitle>
            I&apos;ve been <Highlight variant="dot">Developing</Highlight><br />
            Websites since <Highlight variant="dot">2013</Highlight>
          </SectionTitle>

          <SectionText
            text="We start every new client interaction with an in-depth discovery call where
we get to know each other and recommend the best course of
action."
            className="mx-auto mt-6 max-w-[921px] text-black dark:text-white"
          />
        </div>
      </div>
  {/* Works */}
      <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: .25 }}
           className="mx-auto mt-16 flex container-default flex-wrap  items-center justify-center gap-8 lg:gap-14"
         >
           <motion.h2
            
             className="min-w-[250px]  text-2xl font-bold leading-none lg:text-[26px]"
           >
             PREVIOUSLY
             <br />
             WORKED ON
           </motion.h2>
   
           {/*  logo pills  */}
           {logos.map(({ src, alt,  bg,  z, shift }) => (
             <motion.div
               key={alt}
            
               whileHover={{ scale: 1.08, rotate: 0 }}
               className={`relative  rounded-full border border-black   lg:px-6 px-5 py-3 font-medium shadow-sm dark:border-white ${bg} ${shift}`}
               style={{ zIndex: z }}
             >
               <Image src={src} alt={alt} width={130} height={20} className='lg:w-[200px] w-[100px]' />
             </motion.div>
           ))}
         </motion.div>
    </motion.section>
  );
}
