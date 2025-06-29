'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import SectionTitle, { Highlight } from '../UI/SectionTitle';
import SectionText from '../UI/SectionText';
import Button from '../UI/Button';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

// Animation  part
const bgVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: 'easeOut' },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
    {/* Background   */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={bgVariants}
      >
        <Image
          src="/hero-bg.png"
          alt="Website background"
          fill
          priority
    
        />
      </motion.div>

      {/* main content */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 pt-30 pb-50 container-default flex flex-col justify-center"
      >
        <motion.div variants={itemVariants} className="mt-20">
          <SectionTitle >
            Trusted <Highlight variant="pill">Partner</Highlight> for
            <br />
            Your Website <Highlight variant="dot">Develop.</Highlight>
          </SectionTitle>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex mt-20 justify-between items-center text-black dark:text-white"
        >
       {/* left side */}
          <div className="flex flex-col items-center gap-5 -rotate-90">
            <p className="text-[18px]">@williamrey</p>
            <div className="flex flex-row-reverse items-center gap-4">
              <FaTwitter className="text-2xl hover:text-primary transition" />
              <FaInstagram className="text-2xl hover:text-primary transition" />
              <FaFacebook className="text-2xl hover:text-primary transition" />
              <div className="w-10 h-px bg-black dark:bg-white" />
            </div>
          </div>

        {/* right side */}
          <div className="lg:w-[703px] mx-auto">
            <SectionText text=" Building the worlds best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev."/>
             
           

            <Button
              text="Schedule a Call"
              icon={<IoCall />}
              className="py-2 mt-12"
              iconClassName="border text-xl border-black dark:border-white rounded-full p-1 h-[54px] w-[54px] flex justify-center items-center"
             
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
