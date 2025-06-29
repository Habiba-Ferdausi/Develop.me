'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

export default function WhyChooseMe() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.1 }}
      className="relative bg-black dark:bg-white text-white dark:text-black lg:pt-16 pt-10 lg:pb-10 pb-8 lg:-mt-16 lg:mx-5 mx-2 lg:rounded-[40px] rounded-xl z-10"
    >
      <div className="container-default">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <GoArrowDown className="lg:w-11 w-10 lg:h-11 h-10 p-2 text-[12px] rounded-full border border-white dark:border-black grid place-content-center" />
          </motion.div>
          <SectionButton text="Why Choose me" className="border-white dark:border-black" />
        </motion.div>

        {/* Top row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="flex items-center flex-col lg:flex-row justify-between lg:pt-10 pt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeading 
              text="My Extensive List of Skills" 
              className="lg:w-[516px]" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionText
              text="Building the worlds best marketing Your trusted partner for strategy, design, and dev."
              className="lg:w-[510px] text-right text-white dark:text-black border-b border-white/30 pb-4 pt-5 lg:pt-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-5 flex items-center justify-end gap-4"
            >
              <div ref={prevRef} className="lg:text-5xl text-3xl cursor-pointer hover:text-primary">
                <BsArrowLeftCircle />
              </div>
              <div ref={nextRef} className="lg:text-5xl text-3xl cursor-pointer hover:text-primary">
                <BsArrowRightCircle />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={skill.title}>
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
                  whileHover={{
                    rotate: 8,
                    scale: 1.02,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group bg-white/5 mt-12 mb-8 dark:bg-black/20 rounded-2xl p-6 relative"
                >
                  <div className="mb-6">
                    <Image 
                      src="/skill-icon.png" 
                      alt="Skill" 
                      width={97} 
                      height={99} 
                    />
                  </div>
                  <h3 className="font-bold text-[26px] mb-2">{skill.title}</h3>
                  <p className="text-[16px] opacity-80 w-[340px] pt-3">
                    {skill.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}