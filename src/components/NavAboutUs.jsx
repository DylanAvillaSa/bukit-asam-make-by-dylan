"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AboutUsNavBar() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState({
    name: pathname,
    translateX: 0,
    width: 0,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [{ name: "Kembali ke beranda", href: "/" }];

  const handleClick = (e, href, name) => {
    const offset = e.target.offsetLeft;
    const width = e.target.offsetWidth;

    setIsActive({
      name: href,
      translateX: offset,
      width,
    });

    setMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 px-6 py-4 bg-white z-50'>
      {/* Logo */}
      <Link
        href='/'
        className='z-50'>
        <Image
          src='/logo.png'
          width={160}
          height={40}
          alt='logo'
          priority
        />
      </Link>

      {/* Desktop menu */}
      <div className='relative hidden md:block'>
        <div
          className='absolute top-0 h-10 rounded bg-[#0F2F60] transition-all duration-500 ease-in-out -z-10'
          style={{
            transform: `translateX(${isActive.translateX}px)`,
            width: `${isActive.width}px`,
          }}
        />
        <ul className='flex gap-6 text-sm font-medium'>
          {navItems.map(({ name, href }) => (
            <li
              key={href}
              className='relative'>
              <Link
                href={href}
                onClick={(e) => handleClick(e, href, name)}
                className={`p-2 rounded cursor-pointer transition-colors duration-300 ${
                  isActive.name === href ? "text-white" : "text-[#0F2F60]"
                }`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger mobile */}
      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className='md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 z-50'
        aria-label='Toggle Menu'>
        <motion.span
          animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className='block w-8 h-1 bg-[#0F2F60] rounded'
        />
        <motion.span
          animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          className='block w-8 h-1 bg-[#0F2F60] rounded'
        />
        <motion.span
          animate={
            mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
          }
          className='block w-8 h-1 bg-[#0F2F60] rounded'
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key='mobile-menu'
            className='fixed top-16 right-0 w-64 bg-white shadow-lg rounded-l-lg border border-gray-200 h-[calc(100vh-4rem)] z-40 flex flex-col p-6'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <ul className='flex flex-col gap-5 text-[#0F2F60] font-semibold'>
              {navItems.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={(e) => handleClick(e, href, name)}
                    className='p-2 rounded hover:bg-[#0F2F60] hover:text-white transition-colors block'>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
