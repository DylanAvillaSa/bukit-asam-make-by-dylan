// FooterNavigation.jsx
"use client";

export default function FooterNavigation({
  scrollToHome,
  scrollToAboutUs,
  scrollToIssue,
  scrollToCategory,
  scrollToSchedule,
  scrollToSubmit,
}) {
  return (
    <div>
      <h4 className='text-xl font-semibold mb-4'>Navigasi</h4>
      <ul className='space-y-2 text-gray-300'>
        <li>
          <button
            onClick={scrollToAboutUs}
            className='hover:text-white transition text-left'>
            Tentang Kami
          </button>
        </li>
        <li>
          <button
            onClick={scrollToSchedule}
            className='hover:text-white transition text-left'>
            Jadwal Kompetisi
          </button>
        </li>
        <li>
          <button
            onClick={scrollToCategory}
            className='hover:text-white transition text-left'>
            Kategori
          </button>
        </li>
        <li>
          <button
            onClick={scrollToSubmit}
            className='hover:text-white transition text-left'>
            Submit Proposal
          </button>
        </li>
      </ul>
    </div>
  );
}
