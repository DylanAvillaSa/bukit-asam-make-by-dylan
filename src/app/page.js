"use client";

import NavigationBar from "@/components/Navbar";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  issues,
  categories,
  stages,
  scheduleItems,
  kriteriaProgram,
  ketentuanProposal,
  syaratKategori,
  syaratUmum,
} from "@/service/data_description";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Paperclip,
  Send,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import {
  scrollToHome,
  scrollToAboutUs,
  scrollToCategory,
  scrollToIssue,
  scrollToSchedule,
} from "@/helper/scrollerFunc";
import IssuePage from "@/components/pages/IssuePage";
import CategorySection from "@/components/pages/CategoryPage";

const IntroductionPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const issueRef = useRef(null);
  const categoryRef = useRef(null);
  const scheduleRef = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  // Intersection observer hooks
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Kirim formData ke backend atau API email (Formspree, Nodemailer, dsb)
    console.log("Submit:", formData);
    setFormData({
      email: "",
      file: null,
      message: "",
      name: "",
      phone: "",
    });
    alert("Proposal berhasil dikirim!");
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutUs = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIssue = () => {
    issueRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <main className='min-h-screen flex flex-col items-center bg-white overflow-x-hidden'>
      <NavigationBar
        scrollToHome={scrollToHome}
        scrollToAboutUs={scrollToAboutUs}
        scrollToIssue={scrollToIssue}
        scrollToCategory={scrollToCategory}
        scrollToSchedule={scrollToSchedule}
      />

      {/* Introduction Section */}
      <section
        ref={homeRef}
        className='relative flex flex-col md:flex-row justify-between items-center w-full min-h-screen px-4 sm:px-6  md:px-12 bg-no-repeat bg-center bg-cover bg-[url(/bg-bukit-asam.jpeg)] overflow-hidden bg-white'>
        {/* Background Gradient Blur */}
        <div className='absolute top-20 left-0 w-full h-full bg-black opacity-30 rounded-full filter blur-xl pointer-events-none select-none animate-floatSlower z-0' />

        {/* Content Wrapper */}
        <div className='flex flex-col-reverse md:flex-row justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 gap-6 sm:gap-10 md:gap-16 max-w-[1200px] mx-auto relative z-10'>
          {/* Left Text Content */}
          <motion.aside
            className='w-full flex flex-col justify-center items-center text-center md:text-left px-2 sm:px-4'
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            {/* Judul Utama */}
            <motion.h1
              className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#0F2F60] leading-tight tracking-wide drop-shadow-md'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}>
              BASIC
            </motion.h1>

            {/* Subjudul */}
            <motion.h3
              className='text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-white font-semibold drop-shadow'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              <span className='font-bold'>Bukit</span>{" "}
              <span className='font-bold'>Asam</span> Social Impact Competition
            </motion.h3>

            {/* Deskripsi */}
            <motion.p
              className='text-base sm:text-lg md:text-5xl md:max-w-full md:text-center  mt-4 text-gray-100 max-w-md sm:max-w-xl leading-relaxed tracking-wide drop-shadow-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}>
              Transformasi Bersama Untuk Masa Depan Yang Berkelanjutan.
            </motion.p>

            {/* Tombol CTA */}
            <motion.button
              onClick={scrollToAboutUs}
              className='mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-[#CD4246] text-lg sm:text-xl text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-[#CD4246] hover:to-rose-500 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}>
              Tentang kami
            </motion.button>
          </motion.aside>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes floatSlow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes floatSlower {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-floatSlow {
            animation: floatSlow 6s ease-in-out infinite;
          }
          .animate-floatSlower {
            animation: floatSlower 8s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className='relative w-full px-6 md:px-16 min-h-screen bg-white overflow-hidden'>
        {/* Additional subtle floating circles */}
        <div className='absolute top-24 left-28 w-28 h-28 bg-indigo-500 opacity-20 rounded-full filter blur-xl animate-floatSlow pointer-events-none select-none z-0' />

        {/* Content Container */}
        <div className='relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-28'>
          {/* Text Content */}
          <motion.div
            ref={refText}
            className='w-full md:w-1/2'
            initial={{ opacity: 0, x: -100 }}
            animate={inViewText ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            aria-label='About Bukit Asam Social Impact'>
            <div className='flex items-center gap-4 mb-8'>
              {/* Decorative vertical line */}
              <div className='w-2 h-14 bg-gradient-to-b from-[#CD4247] to-[#8B2B2B] rounded-full shadow-md'></div>
              <h2 className='text-4xl md:text-5xl font-extrabold text-[#0F2F60] leading-tight tracking-tight'>
                Tentang <span className='text-[#CD4247]'>Kami</span>
              </h2>
            </div>

            <p className='mt-3 text-lg md:text-xl text-gray-800 leading-relaxed tracking-wide drop-shadow-sm'>
              <strong>Bukit Asam Social Impact</strong> adalah inisiatif
              berkelanjutan dari PT Bukit Asam Tbk untuk mendorong partisipasi
              komunitas melalui kompetisi sosial inovatif, menghadapi tantangan
              sosial dan lingkungan dengan solusi kreatif.
            </p>
            <p className='mt-8 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide'>
              Kami berkomitmen memberdayakan masyarakat lewat ide kreatif dan
              teknologi mutakhir yang membawa dampak positif, berkelanjutan, dan
              transformatif.
            </p>
            <p className='mt-8 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide italic'>
              Bergabunglah bersama kami untuk membangun masa depan yang cerah
              dan inklusif.
            </p>

            {/* Call to Action Button */}
            <motion.button
              className='mt-12 px-10 py-4 bg-gradient-to-r from-[#CD4247] via-[#A02F35] to-[#7C2428] text-white font-semibold rounded-2xl shadow-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[#A02F35] transition-transform duration-300'
              whileHover={{
                scale: 1.07,
                boxShadow: "0 8px 20px rgba(205, 66, 71, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label='Join Bukit Asam Social Impact'>
              Lihat semua
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.figure
            ref={refImage}
            className='w-full md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: 100 }}
            animate={inViewImage ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            aria-label='About Bukit Asam Social Impact Image'>
            <Image
              src='/about.jpg'
              alt='About Bukit Asam Social Impact'
              width={680}
              height={680}
              className='rounded-3xl shadow-2xl object-cover transition-transform duration-700 hover:scale-110 hover:rotate-1 cursor-pointer'
              priority
              draggable={false}
            />
          </motion.figure>
        </div>

        {/* Custom animation keyframes for floating circles */}
        <style jsx>{`
          @keyframes floatSlow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-18px);
            }
          }
          @keyframes floatSlower {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-floatSlow {
            animation: floatSlow 7s ease-in-out infinite;
          }
          .animate-floatSlower {
            animation: floatSlower 9s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Social Issues Section */}
      <section className='flex flex-col md:flex-row items-center justify-between w-full min-h-screen relative'>
        <h2 className='text-center text-3xl sm:text-4xl font-extrabold text-white top-[5rem] absolute md:hidden lg:hidden block z-10  mb-16 tracking-tight'>
          Lingkup <span className='text-[#CD4247]'>Isu Proyek</span> Sosial
        </h2>
        {/* Left Image */}
        <motion.div
          className='w-full md:w-1/2 h-full'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <div className='w-full h-full bg-black absolute opacity-40'></div>
          <Image
            src='/isu.jpg'
            width={700}
            height={700}
            alt='bg-isu'
            className='w-full object-cover md:min-h-screen rounded-b-3xl md:rounded-none shadow-lg'
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='w-full md:w-1/2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <IssuePage
            issueRef={issueRef}
            issues={issues}
          />
        </motion.div>
      </section>

      {/* Category section */}
      <CategorySection
        categories={categories}
        categoryRef={categoryRef}
      />

      {/* schedule section */}
      <section
        ref={scheduleRef}
        className='relative w-full px-6 md:px-12 py-24 bg-white overflow-hidden select-none'>
        {/* Background decorative circles */}
        <div className='absolute top-16 left-10 w-40 h-40 bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-20 rounded-full filter blur-3xl animate-floatSlow pointer-events-none' />
        <div className='absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-15 rounded-full filter blur-3xl animate-floatSlower pointer-events-none' />

        {/* Title */}
        <motion.h2
          className='relative z-10 text-center text-4xl font-extrabold text-[#0F2F60] mb-20'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          Jadwal & Tahapan <span className='text-[#CD4247]'>Kompetisi</span>
        </motion.h2>

        <div className='relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16'>
          {/* Jadwal Kompetisi Timeline */}
          <div className='flex-1'>
            <h3 className='text-2xl font-semibold text-[#0F2F60] mb-8'>
              Jadwal Kompetisi
            </h3>
            <div className='border-l-4 border-gradient-to-b from-[#CD4247] to-transparent pl-6 space-y-10 relative'>
              {/* Vertical dashed line */}
              <div className='absolute left-1.5 top-0 bottom-0 border-l-2 border-dashed border-[#CD4247] opacity-40' />

              {scheduleItems.map(({ time, title, description }, i) => (
                <motion.div
                  key={i}
                  className='relative group cursor-pointer rounded-lg p-4 hover:scale-[1.03] transition-transform shadow-md hover:shadow-red-300'
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}>
                  {/* Circle on timeline with pulse */}
                  <motion.div
                    className='absolute -left-8 top-4 w-5 h-5 bg-[#CD4247] rounded-full border-4 border-white shadow-md'
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                  <time className='block text-sm text-[#CD4247] font-semibold mb-1'>
                    {time}
                  </time>
                  <h4 className='text-xl font-semibold text-[#0F2F60]'>
                    {title}
                  </h4>
                  <p className='text-gray-600'>{description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tahapan Kompetisi Steps */}
          <div className='flex-1'>
            <h3 className='text-2xl font-semibold text-[#0F2F60] mb-8'>
              Tahapan Kompetisi
            </h3>
            <div className='space-y-10'>
              {stages.map(({ step, title, description }, i) => (
                <motion.div
                  key={step}
                  className='flex items-start gap-6 cursor-pointer group'
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}>
                  <div className='flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#CD4247] text-white font-bold text-lg shadow-lg group-hover:shadow-red-400 transition-shadow duration-300'>
                    {step}
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-[#0F2F60]'>
                      {title}
                    </h4>
                    <p className='text-gray-600'>{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Animations for floating circles */}
        <style jsx>{`
          @keyframes floatSlow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes floatSlower {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-floatSlow {
            animation: floatSlow 6s ease-in-out infinite;
          }
          .animate-floatSlower {
            animation: floatSlower 8s ease-in-out infinite;
          }
          .border-gradient-to-b {
            border-image: linear-gradient(to bottom, #cd4247, transparent);
            border-image-slice: 1;
          }
        `}</style>
      </section>

      {/* report section */}
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
                  <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1' />
                  <span>{item}</span>
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
                      className='flex items-start gap-3 text-gray-700'
                      variants={fadeUp}
                      custom={i + 5}>
                      <CheckCircle className='text-[#CD4247] w-5 h-5 mt-1' />
                      <span>{item}</span>
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
                      className='flex items-start gap-3 text-gray-700'
                      variants={fadeUp}
                      custom={i + 10}>
                      <CheckCircle className='text-[#CD4247] w-5 h-5 mt-1' />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* end section */}
      <section className='w-full px-6 md:px-12 py-24 bg-[#0F2F60] relative overflow-hidden'>
        {/* Background Accessories */}
        <div className='absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full z-0' />

        <motion.div
          ref={ref}
          initial='hidden'
          animate={show ? "visible" : "hidden"}
          className='relative z-10 max-w-5xl mx-auto'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center text-white mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Ketentuan <span className='text-[#CD4247]'>Proposal</span> &
            <span className='text-[#FEC40C]'> Kriteria </span> Program
          </motion.h2>

          {/* Ketentuan Proposal */}
          <motion.div
            className='mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className='text-xl md:text-2xl font-semibold text-white mb-4'>
              A. Ketentuan Proposal
            </h3>
            <ul className='space-y-4 pl-2'>
              {ketentuanProposal.map((item, i) => (
                <motion.li
                  key={i}
                  className='flex items-start gap-3 text-gray-50 text-base md:text-lg'
                  variants={fadeUp}
                  custom={i}>
                  <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1' />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Kriteria Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className='text-xl md:text-2xl font-semibold text-white mb-4'>
              B. Kriteria Penilaian Program
            </h3>
            <ul className='space-y-4 pl-2'>
              {kriteriaProgram.map((item, i) => (
                <motion.li
                  key={i}
                  className='flex items-start gap-3 text-gray-50 text-base md:text-lg'
                  variants={fadeUp}
                  custom={i + 5}>
                  <CheckCircle className='text-[#CD4247] w-6 h-6 mt-1' />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* button submit proposal */}
      <section className='relative w-full px-6 md:px-12 py-24 bg-[#F9FAFB] overflow-hidden'>
        {/* Pernak-pernik Background */}
        <div className='absolute top-[-80px] left-[-100px] w-72 h-72 bg-pink-400 blur-3xl opacity-30 rounded-full' />

        <motion.div
          className='relative z-10 max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12 border'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl font-bold text-center text-[#0F2F60] mb-6'>
            Submit <span className='text-[#CD4247]'>Proposal</span> Anda
          </h2>
          <p className='text-center text-gray-600 mb-10'>
            Silakan lengkapi data berikut dan unggah proposal Anda. Kami akan
            menghubungi Anda melalui email atau WhatsApp.
          </p>

          <form
            onSubmit={handleSubmit}
            className='space-y-6'>
            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Nama PIC Kelompok
              </label>
              <input
                type='text'
                name='name'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                name='email'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                No. Telp PIC
              </label>
              <input
                type='text'
                name='phone'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Nama Peserta
              </label>
              <input
                type='text'
                name='nama_peserta'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Asal Institusi
              </label>
              <input
                type='text'
                name='institusi'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Jenis Kategori
              </label>

              <select
                name='kategori'
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'>
                <option value=''>Jenis kategori</option>
                <option value=''>A. Ide Konseptual</option>
                <option value=''>B. Implementasi Proyek</option>
              </select>
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Deskripsi Singkat Program
              </label>
              <textarea
                name='message'
                rows={4}
                required
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD4247]'
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700 mb-1'>
                Upload Proposal
              </label>
              <div className='flex items-center gap-3'>
                <input
                  type='file'
                  accept='.pdf,.doc,.docx'
                  onChange={handleFileChange}
                  className='block text-sm text-gray-700'
                />
                <Paperclip className='text-gray-500' />
              </div>
            </div>

            <button
              type='submit'
              className='flex items-center justify-center gap-2 bg-[#CD4247] text-white px-6 py-3 rounded-lg hover:bg-[#a63236] transition'>
              <Send size={18} />
              Kirim Proposal
            </button>
          </form>
        </motion.div>
      </section>

      {/* footer */}
      <footer className='relative bg-[#0F2F60]  text-white py-16 px-6 md:px-12 md:w-full overflow-hidden'>
        {/* Pernak-pernik bulat blur */}
        <div className='absolute -top-32 -left-32 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20' />
        <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20' />

        <motion.div
          className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              PT Bukit Asam TBK
            </h3>
            <p className='text-gray-300'>
              Kami merupakan perusahaan pertambangan batu bara milik negara yang
              berbasis di Tanjung Enim, Sumatera Selatan. PT BA berfokus pada
              kegiatan eksplorasi, penambangan, pengolahan, serta pemasaran batu
              bara, dan juga mengembangkan proyek energi terbarukan untuk
              mendukung transisi energi sosial.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className='text-xl font-semibold mb-4'>Navigasi</h4>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a
                  href='#about'
                  className='hover:text-white transition'>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href='#schedule'
                  className='hover:text-white transition'>
                  Jadwal Kompetisi
                </a>
              </li>
              <li>
                <a
                  href='#category'
                  className='hover:text-white transition'>
                  Kategori
                </a>
              </li>
              <li>
                <a
                  href='#submit'
                  className='hover:text-white transition'>
                  Submit Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Sosial */}
          <div>
            <h4 className='text-xl font-semibold mb-4'>Kontak Kami</h4>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-center gap-2'>
                <MapPin size={18} /> Kantor Pusat : Jl. Parigi No. 1, Tanjung
                Enim Sumatera Selatan, Indonesia 31716.
              </li>

              <li className='flex items-center gap-2'>
                <MapPin size={18} /> Kantor Perwakilan Jakarta : Menara Kadin
                Indonesia LT.HR.Rasuna Said Blok X-5, KAV 2-3 Jakarta 12950
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={18} /> +62 734 451 096
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={18} /> (021) 525 4014
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={18} /> corcec@bukitasam.co.id
              </li>
            </ul>

            <div className='flex gap-4 mt-4'>
              <a
                href='#'
                className='hover:text-pink-400 transition'>
                <Facebook />
              </a>
              <a
                href='#'
                className='hover:text-pink-400 transition'>
                <Instagram />
              </a>
              <a
                href='#'
                className='hover:text-pink-400 transition'>
                <Twitter />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='relative z-10 mt-12 text-center text-sm text-gray-400'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}>
          &copy; {new Date().getFullYear()} PT Bukit Asam. All rights reserved.
        </motion.div>
      </footer>
    </main>
  );
};

export default IntroductionPage;
