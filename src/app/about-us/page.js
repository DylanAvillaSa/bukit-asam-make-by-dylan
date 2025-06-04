"use client";

import React from "react";
import { motion } from "framer-motion";
import { items } from "@/service/data_description";
import { IconChecklist } from "@/components/icon/CustomIcon";
import AboutUsNavBar from "@/components/NavAboutUs";

const AboutUsPage = () => {
  return (
    <div className='w-full'>
      <AboutUsNavBar />
      {/* Hero Section */}
      <section className='relative w-full px-6 md:px-12 py-24 bg-gradient-to-br from-white via-slate-100 to-slate-200 overflow-hidden'>
        <motion.div
          className='absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none select-none'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className='max-w-4xl mx-auto text-center relative z-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#0F2F60] leading-tight mb-6'>
            Tentang <span className='text-[#CD4247]'>Kami</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto'>
            <strong>Bukit Asam Social Impact</strong> adalah inisiatif
            berkelanjutan dari PT Bukit Asam Tbk untuk mendorong partisipasi
            komunitas melalui kompetisi sosial inovatif, menghadapi tantangan
            sosial dan lingkungan dengan solusi kreatif.
          </p>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4'>
            Kami berkomitmen memberdayakan masyarakat lewat ide kreatif dan
            teknologi mutakhir yang membawa dampak positif, berkelanjutan, dan
            transformatif.
          </p>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4'>
            Bergabunglah bersama kami untuk membangun masa depan yang cerah dan
            inklusif.
          </p>
        </motion.div>
      </section>

      {/* Program Goals Section */}
      <section className='w-full px-6 md:px-12 py-24 bg-white relative overflow-hidden'>
        <div className='absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none select-none' />

        <motion.div
          className='relative z-10 mx-auto max-w-7xl'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.35, delayChildren: 0.2 },
            },
            hidden: {},
          }}>
          <h2 className='text-center text-3xl md:text-4xl font-extrabold text-[#0F2F60] mb-20 tracking-tight'>
            <span className='text-[#CD4247]'>Program</span> Goals
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className='flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-500 cursor-default'
                variants={{
                  hidden: {
                    opacity: 0,
                    x: item.variant === "hiddenLeft" ? -60 : 60,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.03 }}>
                <div className='flex-shrink-0 bg-[#CD4247]/20 rounded-full p-3 flex items-center justify-center'>
                  <IconChecklist className='w-12 h-12 text-[#CD4247]' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-[#0F2F60] mb-2 leading-snug'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUsPage;
