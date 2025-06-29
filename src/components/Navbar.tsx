'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import ArrowRight from './icons/ArrowRight';
import Button from './UI/Button';

interface NavItem {
  label: string;
  href: string;
}
const NAV_ITEMS: NavItem[] = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog',      href: '#blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // nav links 
  const navLinks = useMemo(
    () =>
      NAV_ITEMS.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="transition-colors hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        </li>
      )),
    [],
  );
 
  const navBg = scrolled || menuOpen
    ? 'bg-white shadow-lg dark:bg-black backdrop-blur'
    : 'bg-transparent';

  return (
    <nav
      role="navigation"
      className={clsx(
        'fixed inset-x-0 top-0 z-50 w-full py-4  transition-colors duration-300',
        navBg,
      )}
      aria-label="Main navigation"
    >
      <div className="container-default mx-auto flex items-center justify-between">
       
        <Link
          href="/"
          aria-label="Homepage"
          className="text-[28px] md:text-[34px] tracking-[-3px] font-bold uppercase  text-black dark:text-white"
        >
          devlop.me
        </Link>

        {/* Desktop nav*/}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-9 text-[16px] text-black dark:text-white">
            {navLinks}
          </ul>

          <Button
            text="Start Project"
            icon={<ArrowRight />}
            className="ms-7 py-2"
          />
          <ThemeToggle />
        </div>

        {/*Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/*  Mobile drawer*/}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40  flex flex-col items-center justify-center gap-8 min-h-screen
                     bg-white dark:bg-black text-lg font-medium"
        >
          <ul className="space-y-6 text-center text-black dark:text-white">
            {navLinks}
          </ul>

          <Button
            text="Start Project"
            icon={<ArrowRight />}
            className="py-1 justify-center"
          />

          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
