'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Variants } from 'framer-motion';
import SectionButton from '../UI/SectionButton';
import SectionHeading from '../UI/SectionHeading';
import SectionText from '../UI/SectionText';
import { GoArrowDown } from 'react-icons/go';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'Javascript',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'Webflow',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'Next.js',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'React.js',
    description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
];

// animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
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
  

export default function WhyChooseMe() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params?.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative bg-black dark:bg-white text-white dark:text-black pt-16 pb-10 -mt-16 mx-5  rounded-[40px] z-10"
    >
      <div className="container-default">
        {/* heading */}
        <motion.div variants={fadeUp} className="flex items-center">
          <GoArrowDown className="w-11 h-11 p-2 text-[12px] rounded-full border border-white dark:border-black grid place-content-center" />
          <SectionButton text="Why Choose me" className="border-white dark:border-black" />
        </motion.div>

        {/* top row */}
        <motion.div variants={fadeUp} className="flex items-center  justify-between pt-10">
          <SectionHeading text="My Extensive List of Skills" className="w-[516px]" />
          <div>
            <SectionText
              text="Building the worlds best marketing Your trusted partner for strategy, design, and dev."
              className="w-[510px] text-right text-white dark:text-black border-b border-white/30 pb-4"
            />
            <div className="mt-5 flex items-center justify-end gap-4">
              <div ref={prevRef} className="text-5xl cursor-pointer">
                <BsArrowLeftCircle />
              </div>
              <div ref={nextRef} className="text-5xl cursor-pointer">
                <BsArrowRightCircle />
              </div>
            </div>
          </div>
        </motion.div>

        {/* slider sklls */}
        <motion.div variants={fadeUp}>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={skill.title} >
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.8,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }}
                  viewport={{ once: true }}
                  className="group bg-white/5 mt-12 mb-8 dark:bg-black/20 transition-transform duration-300 rounded-2xl p-6  relative  hover:rotate-[8deg]  hover:scale-[1.02] hover:z-10 z-0"
                >
                  <div className="mb-6">
                    <Image src="/skill-icon.png" alt="Skill" width={97} height={99} />
                  </div>
                  <h3 className="font-bold text-[26px] mb-2">{skill.title}</h3>
                  <p className="text-[16px] opacity-80 w-[340px] pt-3">{skill.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}
