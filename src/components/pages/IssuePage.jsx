import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IssuePage({ issues, issueRef }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleOpenModal = (issue) => setSelectedIssue(issue);
  const handleCloseModal = () => setSelectedIssue(null);

  return (
    <section
      ref={issueRef}
      className='w-full px-4 sm:px-6 md:px-12 py-24 bg-[#0F2F60] relative overflow-hidden min-h-screen'>
      <h2 className='text-center text-3xl sm:text-4xl hidden md:block lg:block font-extrabold text-white mb-16 tracking-tight'>
        Lingkup <span className='text-[#CD4247]'>Isu Proyek</span> Sosial
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {issues.map(({ id, title, description, icon, image }) => (
          <motion.div
            key={id}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out p-6 sm:p-8 flex flex-col items-center text-center'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}>
            <div className='text-[#CD4247] text-4xl mb-4'>{icon}</div>
            <h3 className='text-lg font-semibold text-[#0F2F60] mb-3'>
              {title}
            </h3>
            <button
              onClick={() => handleOpenModal({ title, description, image })}
              className='mt-auto bg-[#CD4247] hover:bg-[#a83236] text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300'>
              Lihat Deskripsi
            </button>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIssue && (
          <motion.div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className='bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-lg'
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}>
              <button
                onClick={handleCloseModal}
                className='absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold'>
                &times;
              </button>
              <h3 className='text-2xl font-semibold text-[#0F2F60] mb-4'>
                {selectedIssue.title}
              </h3>
              <p className='text-gray-700 mb-4'>{selectedIssue.description}</p>
              {selectedIssue.image && (
                <img
                  src={selectedIssue.image}
                  alt={selectedIssue.title}
                  className='w-full rounded-md shadow-sm'
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
