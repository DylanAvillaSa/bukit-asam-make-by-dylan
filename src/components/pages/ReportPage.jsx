import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ReportPage = ({ syaratKategori, syaratUmum, ref, show, fadeUp }) => {
  return (
    <section className='w-full px-6 md:px-12 py-24 bg-white  relative overflow-hidden'>
      {/* Background Accessories */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-pink-300 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0' />

      <motion.div
        ref={ref}
        animate={show ? "visible" : "hidden"}
        className='relative z-10 max-w-5xl mx-auto'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center text-[#0F2F60] mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className='text-[#CD4247]'>Persyaratan</span> Peserta
        </motion.h2>

        {/* A. Syarat Umum */}
        <motion.div
          className='mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className='text-xl md:text-2xl font-semibold text-[#0F2F60] mb-4'>
            A. Syarat Umum Peserta
          </h3>
          <ul className='space-y-4 pl-2'>
            {syaratUmum.map((item, i) => (
              <motion.li
                key={i}
                className='flex items-start gap-3 text-gray-700 text-base md:text-lg'
                variants={fadeUp}
                custom={i}>
                <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1 flex-shrink-0' />
                <span className='leading-relaxed'>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* B. Syarat Khusus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <h3 className='text-xl md:text-2xl font-semibold text-[#0F2F60] mb-6'>
            B. Syarat Khusus Peserta Per-Kategori
          </h3>

          <div className='grid md:grid-cols-2 gap-10'>
            {/* Kategori Ide Konseptual */}
            <div className='p-6 rounded-xl shadow-md border border-gray-100 bg-white'>
              <h4 className='text-lg font-bold text-[#CD4247] mb-4'>
                1. Peserta Kategori Ide Konseptual
              </h4>
              <ul className='space-y-3'>
                {syaratKategori.konsep.map((item, i) => (
                  <motion.li
                    key={i}
                    className='flex items-start gap-3 text-gray-700 text-base md:text-lg'
                    variants={fadeUp}
                    custom={i}>
                    <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1 flex-shrink-0' />
                    <span className='leading-relaxed'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Kategori Implementasi */}
            <div className='p-6 rounded-xl shadow-md border border-gray-100 bg-white'>
              <h4 className='text-lg font-bold text-[#CD4247] mb-4'>
                2. Peserta Kategori Implementasi Proyek
              </h4>
              <ul className='space-y-3'>
                {syaratKategori.implementasi.map((item, i) => (
                  <motion.li
                    key={i}
                    className='flex items-start gap-3 text-gray-700 text-base md:text-lg'
                    variants={fadeUp}
                    custom={i}>
                    <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1 flex-shrink-0' />
                    <span className='leading-relaxed'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReportPage;
