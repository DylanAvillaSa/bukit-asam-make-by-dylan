import { FaGlobe, FaUsers, FaLeaf, FaLightbulb } from "react-icons/fa";

export const issues = [
  {
    id: 1,
    title: "Isu Pendidikan Yang Inklusif",
    description: `
Menjawab target SDG's yang ke-4 masih menjadi tantangan bangsa Indonesia yang mendasar. Permasalahan pendidikan menyangkut akses pendidikan dasar formal, pendidikan luar sekolah, pendidikan alternatif di wilayah terisolir (remote) dan digitalisasi. Obyek anak-anak dengan keterbatasan: ekonomi, fisik (berkebutuhan khusus), akses sekolah formal dan kerentanan lainnya. Isu pemanfaatan teknologi untuk menuntaskan isu Pendidikan juga terbuka untuk dikembangkan menjadi proyek sosial.`,
    icon: (
      <FaGlobe
        size={30}
        className='text-[#CD4247]'
      />
    ),
  },
  {
    id: 2,
    title: "Isu Economy & Wellbeing",
    description: `
Proyek sosial dengan fokus antara lain berkontribusi untuk mengurangi kemiskinan, pengangguran, meningkatan pendapatan, kewirausahaan dan upaya kesejahteraan masyarakat. Berbagai bentuk proyek sosial yang inovatif dan inspiratif terbuka luas untuk menjawab permasalahan kemiskinan, ekonomi, UMKM, dan kesejahteraan sosial.`,
    icon: (
      <FaUsers
        size={30}
        className='text-[#CD4247]'
      />
    ),
  },
  {
    id: 3,
    title: "Isu Nature dan inisiatif keberlanjutan",
    description: `
Isu global dan masa depan antara lain isu kerusakan lingkungan, kelangkaan energi, problem sampah atau limbah, emisi karbon, kebutuhan teknologi tepat guna, isu Flora - Fauna, Energi alternatif dan isu digitalisasi. Termasuk kategori ini adalah ragam hayati, pelestarian air, olah air untuk menjadi air baku, rekayasa teknologi, start up, gas alam, aplikasi dan rekayasa teknologi lainnya. Tantangan menarik menciptakan kewirausahaan social yang berbasis lingkungan, energi dan teknologi tepat guna.`,
    icon: (
      <FaLeaf
        size={30}
        className='text-[#CD4247]'
      />
    ),
  },
];

export const items = [
  {
    title: "Mendorong Inovasi Sosial",
    description:
      "Menghasilkan solusi kreatif dan inovatif untuk menyelesaikan permasalahan sosial disekitar komunitas.",
    variant: "hiddenLeft",
  },
  {
    title: "Pemberdayaan Ekonomi",
    description:
      "Meningkatkan kemampuan ekonomi melalui pengembangan keterampilan dan peluang usaha.",
    variant: "hiddenRight",
  },
  {
    title: "Keberlanjutan Lingkungan",
    description:
      "Mendorong praktik-praktik ramah lingkungan yang berkelanjutan.",
    variant: "hiddenLeft",
  },
  {
    title: "Pengembangan Komunitas",
    description:
      "Memperkuat kerja sama dan jaringan antara pemangku kepentingan untuk mendukung keberlanjutan proyek sosial.",
    variant: "hiddenRight",
  },
];

export const categories = [
  {
    id: 1,
    first: `Ide`,
    last: `Konseptual`,
    description: `
Usulan gagasan proyek sosial berdasarkan kajian atau studi kelayakan pengalaman atau studi lainnya, dengan ketentuan:
`,
    points: [
      "Peserta Umum (bukan Karyawan dan bukan Mitra Binaan PTBA);",
      "Pengajuan ide atau konsep proyek sosial bersifat baru atau yang belum pernah dijalankan.",
      "Usulan harus dapat dilaksanakan atau diimplementasikan;",
      "Usulan dana yang diajukan untuk proposal antara Rp7.500.000 sampai dengan Rp15.000.000 per proposal,",
      "Dana dari PT Bukit Asam Tbk digunakan untuk mendanai program yang diusulkan.",
    ],
    icon: "🎓",
    img: "/ide.png",
    figCapt: "IDEAS",
  },
  {
    id: 2,
    first: `Implementasi`,
    last: `Proyek`,
    img: "/projek.png",
    figCapt: "PROYEK",
    description: `Usulan proyek sosial berdasar proyek atau program
yang sudah dimulai atau dilaksanakan, dengan ketentuan :`,
    points: [
      "Peserta umum (bukan karyawan dan bukan Mitra Binaan PTBA) dengan domisili wilayah Provinsi Sumatera selatan dan Provinsi Lampung",
      "Sudah ada rintisan usaha/proyek lebih dari 1 (satu) tahun.",
      "Bersifat pengembangan/penguatan usaha/rintisan proyek sosial yang sudah dilakukan.",
      " Usulan dana untuk program yang diajukan sebesar Rp50.000.000 per proposal",
      "Bantuan dana diberikan sesuai kelayakan proposal, yaitu proposal dengan anggaran yang efisien dan efektif",
      "Dana dari PT Bukit Asam Tbk tidak diperkenankan untuk mengganti/mendanai kegiatan yang telah selesai dilaksanakan, tetapi dana tersebut digunakan untuk kegiatan baru yang belum dilakukan dengan tujuan pengembangan dari proyek yang sudah dirintis.",
    ],
  },
];

export const stages = [
  {
    step: 1,
    title: "Pendaftaran",
    description:
      "Peserta mendaftar melalui situs resmi dan mengunggah proposal sesuai format.",
  },
  {
    step: 2,
    title: "Seleksi Proposal",
    description: "Seleksi proposal berdasarkan kriteria yang ditetapkan.",
  },
  {
    step: 3,
    title: "Pengumuman",
    description:
      "Pengumuman peserta dengan konsep yang sesuai dan lanjut ke babak selanjutnya.",
  },
  {
    step: 4,
    title: "Workshop Penajaman Proposal",
    description:
      "Pembekalan kepada peserta dan sesi presentasi akhir untuk menentukan pemenang.",
  },
  {
    step: 5,
    title: "Social Leadership",
    description:
      "Training pemberian pelatihan kepada pemenang sebagai penguatan kepemimpinan social.",
  },
  {
    step: 6,
    title: "Pengumuman & Penghargaan",
    description: "Pemenang diumumkan dan mendapatkan penghargaan.",
  },
  {
    step: 7,
    title: "Mission Kickstar",
    description: "Pemenang menerima pendanaan dan memulai proyek mereka.",
  },
];

export const scheduleItems = [
  {
    time: "Juni - Juli 2025",
    title: "Pendaftaran Dibuka",
    description: "Mulai daftar untuk mengikuti kompetisi.",
  },
  {
    time: "12 Juni 2025",
    title: "Deadline Pendaftaran",
    description: "Tutup pendaftaran peserta kompetisi.",
  },
  {
    time: "13 - 26 Juli 2025",
    title: "Review & Seleksi proposal",
    description: "Proses review seleksi berdasarkan berkas dan karya peserta.",
  },
  {
    time: "30 Juni 2025",
    title: "Pengumuman Hasil Seleksi",
    description: "Daftar peserta yang lolos ke tahap akhir diumumkan.",
  },

  {
    time: "September 2025",
    title: "Workshop Penajaman Proposal",
  },
  {
    time: "September 2025",
    title: "Social Leadership Training",
  },
  {
    time: "Oktober 2025",
    title: "Pengumuman Pemenang",
  },
  {
    time: "Oktober 2025",
    title: "Penganugerahan Pemenang",
  },
];

export const kriteriaProgram = [
  "Program yang diusulkan sesuai dengan tema yang diberikan ; Hasil program nyata dan dapat terukur serta berpotensi untuk dapat dikembangkan.",
  "Program harus memiliki prioritas masalah dengan memanfaatkan potensi dan sumber daya lokal serta memberikan solusi.",
  "Dilaksanakan di wilayah Ring 1/wilayah operasi PT Bukit Asam Tbk dan dapat memberikan dukungan untuk pencapaian Program Penilaian Peringkat Kinerja Perusahaan (PROPER) Bukit Asam akan mendapatkan nilai tambahan .",
  "Program yang dapat membuka lapangan pekerjaan untuk masyarakat lokal akan mendapatkan nilai tambah .",
  "Tidak melibatkan anak di bawah umur sebagai tenaga kerja, tidak merugikan lingkungan dan melanggar HAM.",
  "Pemenang dengan nilai terbaik akan diberikan kepada program yang memberikan dampak luas serta memberikan keberlanjutan",
];

export const ketentuanProposal = [
  "Proposal yang diusulkan belum pernah dibuat dan dipatenkan dengan pihak lain.",
  "Program/proyek yang diajukan tidak mengandung unsur politik, SARA, pelanggaran karya cipta, melanggar HAM dan pornografi.",
  "Penyusunan proposal harus disesuaikan dengan format yang disediakan oleh tim BASIC.",
  "Proposal program yang diusulkan tidak sedang dalamn pengajuan dan belum pernah mendapatkan bantuan dana dari pihak-pihak lain.",
  "Hasil karya peserta akan dipublikasikan oleh pihak Bukit Asam.",
];

export const syaratKategori = {
  konsep: [
    "Peserta terbuka untuk umum (bukan karyawan & bukan Mitra Binaan PTBA).",
    "Memiliki ide proyek sosial yang baru dan belum pernah dijalankan sebelumnya.",
  ],
  implementasi: [
    "Peserta terbuka untuk umum (bukan karyawan & bukan Mitra Binaan PTBA) dengan domisili Provinsi Sumatera Selatan dan Provinsi Lampung.",
    "Memiliki ide proyek sosial yang sudah berjalan dalam 1 (satu) Tahun.",
    "Ide proyek yang dikerjakan bersifat pengembangan/penguatan yang sudah berjalan sebelumnya.",
  ],
};

export const syaratUmum = [
  `Peserta diwajibkan berkelompok dengan masing-masing anggota berjumlah 3 orang Berusia antara 18 Tahun s.d. 45 Tahun`,
  `Berusia antara 18 Tahun s.d 45 Tahun`,
  `Memiliki proposal proyek sosial yang disusun sesuai dengan kategori dan ketentuan BASIC.`,
  `Memiliki waktu untuk melaksanakan proyek sosial.`,
  "Peserta harus memiliki mentor/pembimbing (tanpa adanya batas usia).",
  "Aktif dalam organisasi dan komunitas serta memiliki pengalaman dalam kegiatan sosial kemasyarakatan.",
  "Bersedia mengikuti kegiatan BASIC secara penuh waktu yang diselenggarakan oleh Bukit Asam.",
  "Peserta dengan kebutuhan khusus (penyandang disabilitas) dan kerentanan lainnya akan mendapatkan penilaian tambahan.",
];
