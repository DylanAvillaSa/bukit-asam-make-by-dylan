"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationBar({
  scrollToHome,
  scrollToAboutUs,
  scrollToIssue,
  scrollToCategory,
  scrollToSchedule,
}) {
  const [isActive, setIsActive] = useState({
    name: "",
    translateX: 0,
    width: 0,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "Beranda",
    "Tentang kami",
    "Isu sosial",
    "Kategori",
    "Jadwal",
  ];

  const handleClick = (e, name) => {
    const offset = e.target.offsetLeft;
    const width = e.target.offsetWidth;

    if (name == "Beranda") {
      scrollToHome();
    } else if (name == "Tentang kami") {
      scrollToAboutUs();
    } else if (name == "Isu sosial") {
      scrollToIssue();
    } else if (name == "Kategori") {
      scrollToCategory();
    } else if (name == "Jadwal") {
      scrollToSchedule();
    }

    setIsActive({
      name,
      translateX: offset,
      width,
    });
  };

  // Variants animasi untuk menu mobile
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
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 p-4 bg-white z-50">
      {/* Logo */}
      <button className="cursor-pointer z-50" onClick={scrollToHome}>
        <Image src="/logo.png" width={205} height={205} alt="logo" />
      </button>

      {/* Desktop menu */}
      <div className="relative hidden md:block">
        {/* Highlight bar */}
        <div
          className="absolute top-0 h-10 rounded bg-[#0F2F60] transition-all duration-500 ease-in-out -z-10"
          style={{
            transform: `translateX(${isActive.translateX}px)`,
            width: `${isActive.width}px`,
          }}
        ></div>

        {/* Menu */}
        <ul className="flex gap-5 text-[17px] relative">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={(e) => handleClick(e, item)}
              className={`p-2 rounded cursor-pointer duration-300 ease-linear select-none ${
                isActive.name === item ? "text-white" : "text-[#0F2F60]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger button mobile */}
      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 z-50"
        aria-label="Toggle Menu"
      >
        <motion.span
          animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-8 h-1 bg-[#0F2F60] rounded"
        />
        <motion.span
          animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-8 h-1 bg-[#0F2F60] rounded"
        />
        <motion.span
          animate={
            mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
          }
          className="block w-8 h-1 bg-[#0F2F60] rounded"
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-16 right-0 w-60 bg-white shadow-lg rounded-l-lg border border-gray-200 h-[calc(100vh-4rem)] z-40 flex flex-col p-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-4 text-[#0F2F60] font-semibold">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={(e) => {
                    handleClick(e, item);
                    setMobileMenuOpen(false);
                  }}
                  className="cursor-pointer select-none p-2 rounded hover:bg-[#0F2F60] hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
