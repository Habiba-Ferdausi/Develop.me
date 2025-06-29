'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import SectionTitle, { Highlight } from '../UI/SectionTitle';
import SectionText from '../UI/SectionText';
import Button from '../UI/Button';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import Link from 'next/link';

const bgVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  show:   { scale: 1,   opacity: 1, transition: { duration: 1.6, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
     {/* background */}
      <motion.div className="absolute inset-0 z-0" variants={bgVariants}>
        <Image
          src="/hero-bg.png"
          alt=" gradient background"
          fill
          priority
          sizes="100vw"
      
        />
      </motion.div>

     {/* Main content  */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 lg:pt-30 pt-8 lg:pb-50  pb-11 container-default flex flex-col justify-center"
      >
        <motion.div variants={itemVariants} className="mt-20">
       
         
            <SectionTitle>
              Trusted <Highlight variant="pill">Partner</Highlight> for
              <br />
              Your Website <Highlight variant="dot">Develop.</Highlight>
            </SectionTitle>
          
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col-reverse lg:flex-row lg:mt-20 mt-8 gap-10 lg:gap-40 items-center text-black dark:text-white"
        >
        {/* Left socials */}
          <div className="flex flex-col items-center gap-5 lg:-rotate-90">
            <p className="text-[18px]">@williamrey</p>

            <div className="flex flex-row-reverse items-center gap-4">
              <Link
                href="https://twitter.com/williamrey"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-primary transition" />
              </Link>
              <Link
                href="https://instagram.com/williamrey"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-primary transition" />
              </Link>
              <Link
                href="https://facebook.com/williamrey"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-primary transition" />
              </Link>

              <div className="w-10 h-px bg-black dark:bg-white" />
            </div>
          </div>

          {/* Right Side  */}
          <div className="lg:w-[703px]">
            <SectionText text ="Building the world’s best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev."/>

            <Button
              text="Schedule a Call"
              icon={<IoCall />}
              className="lg:py-2 py-1.5 lg:mt-12 mt-5"
              iconClassName="border text-xl border-black dark:border-white rounded-full p-1 lg:h-[54px] h-10 lg:w-[54px] w-10 flex justify-center items-center"

            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
