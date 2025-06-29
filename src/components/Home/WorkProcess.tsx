'use client';

import { motion } from 'framer-motion';
import { GoArrowDown, GoArrowRight } from 'react-icons/go';
import SectionButton from '../UI/SectionButton';
import SectionHeading from '../UI/SectionHeading';

const steps = [
  {
    title: 'Discovery',
    desc: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
  },
  {
    title: 'Strategy',
    desc: 'Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand-ID consultation to in-depth code reviews we’re here to set the stage for success.',
  },
  {
    title: 'Design',
    desc: "After we understand your brand, we'll move on to design. Each page is designed, reviewed, and given your stamp of approval.",
  },
  {
    title: 'Build',
    desc: "Whether we've just finished designing or you’re handing off files, we apply our trusted development process to your project.",
  },
] as const;

export default function WorkProcess() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.25 }}
      className="bg-darker dark:bg-white text-white dark:text-black lg:p-16 p-5 mb-11 lg:mx-5 mx-2 lg:rounded-[40px] rounded-xl overflow-hidden"
    >
      {/* header */}
      <div className="container-default flex flex-col lg:flex-row lg:items-center  lg:gap-20 gap-5 lg:px-6">
        <div className="flex items-center  pt-4 lg:pt-0">
          <motion.span
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: 'backOut' }}
          >
            <GoArrowDown className="lg:w-11 w-10 lg:h-11 h-10 p-2 rounded-full border border-current grid place-content-center" />
          </motion.span>
          <SectionButton text="Work Process" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading text="My Work Process" />
        </motion.div>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mt-16 mt-7 container-default">
        {steps.map(({ title, desc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              rotateX: -2,
              rotateY: 3,
              boxShadow: '0 22px 34px rgba(0,0,0,0.35)',
            }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-black hover:bg-primary lg:p-7 p-5 lg:rounded-[30px] rounded-xl cursor-pointer transition-colors hover:rotate-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-secondary text-black lg:text-xl text-xs group-hover:bg-black group-hover:text-white px-5 py-1 rounded-full font-semibold">
                {title}
              </span>
              <span className="flex items-center gap-1 text-white group-hover:text-black">
                <GoArrowRight className="lg:text-lg" />
                <span className="underline lg:text-[16px] text-[12px] underline-offset-4">Read&nbsp;More</span>
              </span>
            </div>
            <p className="lg:max-w-[566px] lg:pt-5 pt-3 pb-2 lg:text-lg text-[10px] text-white/80 group-hover:text-black transition-colors">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
