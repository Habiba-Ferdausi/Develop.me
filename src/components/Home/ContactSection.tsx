'use client';

import Image from 'next/image';
import { useState } from 'react';
import {FaInstagram,  FaTwitter, FaFacebook } from 'react-icons/fa';
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
    <section className="relative">
      <div className="container-default pt-7 pb-40 flex justify-between items-center  relative z-10">
        {/* Left */}
        <div className='w-[840px]'>
            {/* heading */}
        <div  className="flex items-center">
                <GoArrowDown className="w-11 h-11 p-2 text-[12px] rounded-full border dark:border-white border-black grid place-content-center" />
                <SectionButton text="Contact" className="dark:border-white border-black" />
              </div>
        <SectionTitle className='mt-5'>
        Interested in<br/><Highlight variant="pill">work</Highlight> together?
                  </SectionTitle>
        <SectionText className='text-black w-[713px] dark:text-white mt-4 mb-6' text="We start every new client interaction with an in-depth discovery call where
we get to know each other"/>
          
          <Button
              text="Schedule a Call"
              icon={<IoCall />}
              className="py-2 mt-4"
              iconClassName="border text-xl border-black dark:border-white rounded-full p-1 h-[54px] w-[54px] flex justify-center items-center"
             
            />
        </div>

        {/* Right */}
        <div className="bg-black text-white py-7 px-8 rounded-[30px] w-[500px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 text-lg py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 text-lg py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <textarea
              name="message"
              placeholder="Describe your project"
              value={form.message}
              onChange={handleChange}
              rows={1}
              className="bg-transparent border-b border-gray-600 text-lg py-3 focus:outline-none focus:border-primary  placeholder-white/60  text-white "
              required
            />
            <div className="flex items-center gap-6 mt-5 text-white dark:text-black">
               
          <Button
              text="Send"
              icon={<IoIosSend/>}
              className="py-1 text-white dark:text-black dark:border-black border-white"
              iconClassName="border text-xl text-white dark:text-black dark:border-black border-white rounded-full p-1 h-9 w-9 flex justify-center items-center"
             
            />
            <p className='text-lg text-white/80'>Or</p>
             
          <Button
              text="Contact me"
              icon={<MdEmail/>}
              className="py-1 text-white dark:text-black dark:border-black border-white"
              iconClassName="border text-white dark:text-black text-xl dark:border-black border-white rounded-full p-1 h-9 w-9 flex justify-center items-center"
             
            />
            </div>
          </form>
          <div className="pt-[75px] mb-2 flex items-center gap-24">
            <p className="text-white/80 text-lg">@williamrey</p>
            <div className="flex items-center gap-4 text-2xl">
            
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 z-0">
        <Image
          src="/contact-bg.png"
          alt="Contact background"
          fill
          priority
    
        />
</div>
    </section>
  );
}
