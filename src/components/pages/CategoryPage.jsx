import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CategorySection({ categories, categoryRef }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const closePopup = () => setSelectedCategory(null);

  return (
    <section
      ref={categoryRef}
      className='relative w-full px-6 md:px-12 py-32 overflow-hidden bg-white bg-gradient-to-br'>
      {/* Decorative Blob */}
      <div className='absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-black opacity-20 rounded-full blur-[100px] pointer-events-none animate-floatSlow' />

      {/* Title */}
      <h2 className='relative z-10 text-center text-4xl md:text-5xl font-extrabold text-[#0F2F60] mb-20 tracking-tight drop-shadow-xl'>
        Kategori <span className='text-[#CD4247]'>Kompetisi</span>
      </h2>

      {/* Cards */}
      <div className='relative z-10 max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-0 justify-items-center'>
        {categories.map(
          ({ id, first, last, description, img, figCapt, points }) => (
            <motion.div
              key={id}
              className='relative w-full max-w-sm bg-white/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/30 group transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-[#FFCD29]/60'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: id * 0.15 }}>
              {/* Image */}
              <div className='relative h-[280px] overflow-hidden'>
                <Image
                  src={img || ""}
                  alt={img}
                  fill
                  className='object-cover w-full h-full transform group-hover:scale-110 transition duration-500'
                />
                <div className='absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300' />
                <figcaption className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 text-[#0F2F60] text-sm font-semibold px-4 py-2 rounded-full shadow-md tracking-wider'>
                  {figCapt}
                </figcaption>
              </div>

              {/* Content */}
              <div className='px-6 py-8 flex flex-col justify-between h-[250px]'>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold text-[#0F2F60] tracking-wide'>
                    {first} <span className='text-[#CD4247]'>{last}</span>
                  </h3>
                  <p className='mt-3 text-gray-700 text-sm leading-relaxed'>
                    {description.slice(0, 80)}...
                  </p>
                </div>
                <div className='mt-6'>
                  <button
                    onClick={() =>
                      setSelectedCategory({
                        id,
                        first,
                        last,
                        description,
                        img,
                        points,
                      })
                    }
                    className='w-full bg-[#FFCD29] text-[#0F2F60] font-bold py-3 rounded-lg shadow-md hover:shadow-[#FFCD29]/40 hover:bg-[#e5b81e] transition duration-300'>
                    Lihat Kategori Kompetisi
                  </button>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4'
            onClick={closePopup}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className='bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}>
              {/* Gambar Header */}
              <div className='relative h-[300px] w-full'>
                <Image
                  src={selectedCategory.img || ""}
                  alt='category'
                  fill
                  className='object-contain h-auto rounded-t-3xl w-full '
                />
                <button
                  onClick={closePopup}
                  className='absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-white'>
                  <span className='text-black text-lg'>&times;</span>
                </button>
              </div>

              {/* Konten */}
              <div className='p-6 text-[#0F2F60]'>
                <h3 className='text-2xl font-bold text-center mb-4'>
                  {selectedCategory.first}{" "}
                  <span className='text-[#CD4247]'>
                    {selectedCategory.last}
                  </span>
                </h3>

                {/* Deskripsi utama */}
                <p className='text-sm mb-4'>{selectedCategory.description}</p>

                {/* Poin-poin deskripsi */}
                <ul className='list-disc pl-6 space-y-2 text-sm text-gray-700'>
                  {selectedCategory.points && (
                    <ul className='list-disc pl-6 space-y-2 text-sm text-gray-700'>
                      {selectedCategory.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </ul>

                {/* Caption bawah gambar */}
                {selectedCategory.figCapt && (
                  <p className='mt-6 text-xs text-center italic text-gray-500'>
                    {selectedCategory.figCapt}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
