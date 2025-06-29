'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionTitle, { Highlight } from '../UI/SectionTitle';
import { GoArrowDown } from 'react-icons/go';
import SectionButton from '../UI/SectionButton';
import SectionText from '../UI/SectionText';
import Button from '../UI/Button';
import { IoCall } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative "
    >
      <div className="container-default overflow-hidden pt-7 pb-40 flex justify-between lg:items-center relative z-10 gap-10 flex-col lg:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-[840px]"
        >
          {/* heading */}
          <div className="flex items-center">
            <GoArrowDown className="lg:w-11 w-10 lg:h-11 h-10 p-2 text-[12px] rounded-full border dark:border-white border-black grid place-content-center" />
            <SectionButton text="Contact" className="dark:border-white border-black" />
          </div>
          <SectionTitle className="mt-5">
            Interested in
            <br />
            <Highlight variant="pill">work</Highlight> together?
          </SectionTitle>
          <SectionText
            className="text-black lg:w-[713px] w-[300px] dark:text-white mt-4 mb-6"
            text="We start every new client interaction with an in-depth discovery call where we get to know each other"
          />

          <Button
            text="Schedule a Call"
            icon={<IoCall />}
            className="lg:py-2 py-1.5 mt-4"
            iconClassName="border text-xl border-black dark:border-white rounded-full p-1 lg:h-[54px] h-8 lg:w-[54px] w-8 flex justify-center items-center"
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black text-white py-7 px-8 lg:rounded-[30px] rounded-xl lg:w-[500px]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col lg:gap-6 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 lg:text-lg text-sm py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 lg:text-lg text-sm py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <textarea
              name="message"
              placeholder="Describe your project"
              value={form.message}
              onChange={handleChange}
              rows={1}
              className="bg-transparent border-b border-gray-600 lg:text-lg text-sm py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <div className="flex items-center gap-3 lg:gap-6 mt-5 text-white dark:text-black">
              <Button
                text="Send"
                icon={<IoIosSend />}
                className="py-1 text-white dark:text-black dark:border-black border-white"
                iconClassName="border lg:text-xl text-lg text-white dark:text-black dark:border-black border-white rounded-full p-1 lg:h-9 h-6 lg:w-9 w-6 flex justify-center items-center"
              />
              <p className="lg:text-lg text-xs text-white/80">Or</p>
              <Button
                text="Contact me"
                icon={<MdEmail />}
                className="py-1 text-white dark:text-black dark:border-black border-white"
                iconClassName="border text-white dark:text-black lg:text-xl text-lg dark:border-black border-white rounded-full p-1 lg:h-9 h-6 lg:w-9 w-6 flex justify-center items-center"
              />
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:pt-[75px] pt-16 mb-2 flex items-center lg:gap-24 gap-12"
          >
            <p className="text-white/80 lg:text-lg text-xs">@williamrey</p>
            <div className="flex items-center gap-4 lg:text-2xl text-lg">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/contact-bg.png" alt="Contact background" fill priority />
      </div>
    </motion.section>
  );
}
