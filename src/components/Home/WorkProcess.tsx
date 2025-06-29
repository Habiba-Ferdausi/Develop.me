'use client';

import { motion, Variants } from 'framer-motion';
import { GoArrowDown, GoArrowRight } from 'react-icons/go';
import SectionButton from '../UI/SectionButton';
import SectionHeading from '../UI/SectionHeading';

const processSteps = [
  {
    title: 'Discovery',
    description:
      'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    link: 'Read More',
    theme: 'black',
  },
  {
    title: 'Strategy',
    description:
      'Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we’re here to set the stage for success.',
    link: 'Read More',
    theme: 'lime',
  },
  {
    title: 'Design',
    description:
      "After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    link: 'Read More',
    theme: 'black',
  },
  {
    title: 'Build',
    description:
      "Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.",
    link: 'Read More',
    theme: 'black',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  }),
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

export default function WorkProcess() {
  return (
    <section className="bg-darker mb-20 dark:bg-white dark:text-black text-white p-16 rounded-[40px] mx-5">
      <div className="container-default">
    {/* heading */}
    <div className='flex items-center gap-20'>
 <motion.div variants={fadeUp} className="flex items-center  justify-end ">
                <GoArrowDown className="w-11 h-11 p-2 text-[12px] rounded-full border border-white dark:border-black grid place-content-center" />
                <SectionButton text="Work Process" className="border-white dark:border-black" />
              </motion.div>
              <SectionHeading text="My Work Process" className=' text-white dark:text-black'/>
    </div>

        {/* Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6  mt-16" >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
             className='group bg-black hover:bg-primary p-6 rounded-[30px] hover:rotate-6'
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
             
            >
              <div className="flex justify-between items-center mb-4">
                
                 <p className='bg-secondary px-5 tex-xl py-1 rounded-full group-hover:bg-black text-black group-hover:text-white'> {step.title}</p>
                
              <div className='flex items-center gap-1 text-white group-hover:text-black'>
              <GoArrowRight className='text-lg'/>
              <p className=' text-[16px] underline'>Read More</p>
              </div>
              </div>
              <p className="text-lg w-[566px]  text-white/80 pt-4 group-hover:text-black">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
