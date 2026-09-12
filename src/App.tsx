import React, { useState } from 'react';
import { 
  BookOpen, Newspaper, Megaphone, Calendar, Image as ImageIcon, 
  FileText, Building2, Trophy, GraduationCap, Phone, Mail, MapPin, 
  Search, ExternalLink, ChevronRight, Menu, X, ArrowRight, Shield, Download, Award
} from 'lucide-react';

export default function App() {
  const [currentNav, setCurrentNav] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  // Mock data for Public Website modules mirroring CMS data
  const schoolProfile = {
    name: "Madrasah Ibtidaiyah Darul Falah",
    npsn: "69881899",
    nsm: "111235240001",
    accreditation: "A (Unggul)",
    address: "Jl. Pendidikan No. 12, Desa Karanganyar, Kec. Pucuk, Kab. Lamongan, Jawa Timur",
    phone: "(0322) 551234",
    email: "info@midarulfalah.sch.id",
    headmaster: "Drs. Ach. Azhari, M.Pd.I",
    vision: "Terwujudnya peserta didik yang berakhlak mulia, cerdas, terampil, berprestasi, dan berwawasan Aswaja.",
    mission: [
      "Menanamkan nilai-nilai keimanan dan ketakwaan melalui pembiasaan amaliyah Islam Ahlussunnah wal Jama'ah.",
      "Melaksanakan pembelajaran aktif, kreatif, efektif, dan menyenangkan (PAKEM).",
      "Mengembangkan potensi akademik dan non-akademik siswa melalui ekstrakurikuler unggulan.",
      "Membentuk kemandirian dan keterampilan hidup (life skills) peserta didik."
    ]
  };

  const announcements = [
    {
      id: 1,
      title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Resmi Dibuka",
      content: "Pendaftaran siswa-siswi baru MI Darul Falah telah dibuka gelombang pertama. Daftarkan segera putra-putri Anda secara online maupun offline di sekretariat madrasah.",
      date: "10 September 2026",
      is_pinned: true,
      priority: 1
    },
    {
      id: 2,
      title: "Jadwal Penilaian Tengah Semester (PTS) Ganjil",
      content: "Pelaksanaan PTS Ganjil Tahun Ajaran 2026/2027 akan dimulai pada tanggal 21 September 2026. Mohon kepada seluruh wali murid untuk mendampingi putra-putrinya belajar di rumah.",
      date: "08 September 2026",
      is_pinned: true,
      priority: 2
    }
  ];

  const posts = [
    {
      id: 1,
      category: "Kegiatan Siswa",
      title: "Porsenitas Madrasah 2026: Siswa MI Darul Falah Borong Medali Emas",
      slug: "porsenitas-madrasah-2026",
      excerpt: "Kontingen olahraga dan seni MI Darul Falah kembali menorehkan prestasi gemilang pada ajang Pekan Olahraga dan Seni Antar Madrasah (Porsenitas) tingkat Kabupaten.",
      date: "05 September 2026",
      author: "Tim Jurnalistik",
      content: "Ajang Porsenitas 2026 yang diselenggarakan di Gelanggang Olahraga Kabupaten menjadi saksi keunggulan siswa-siswi MI Darul Falah. Dalam cabang lari cepat dan pidato bahasa Arab, perwakilan madrasah berhasil menyabet juara pertama dengan catatan waktu dan penilaian terbaik."
    },
    {
      id: 2,
      category: "Kurikulum",
      title: "Pelatihan Tahfidz Al-Qur'an Metode Jibril untuk Guru dan Siswa",
      slug: "pelatihan-tahfidz-alquran",
      excerpt: "Madrasah memperkuat program hafalan Al-Qur'an Juz 30 dan Juz 29 dengan menghadirkan trainer nasional metode tahfidz interaktif.",
      date: "01 September 2026",
      author: "Kurikulum",
      content: "Sebagai bagian dari pilar unggulan madrasah, program tahfidz Al-Qur'an terus disempurnakan. Melalui metode Jibril, siswa diajak menghafal dengan pendekatan musyafahah dan talaqqi yang menyenangkan serta mudah diserap oleh anak usia sekolah dasar."
    },
    {
      id: 3,
      category: "Prestasi",
      title: "Peringatan Maulid Nabi Muhammad SAW dan Santunan Anak Yatim",
      slug: "peringatan-maulid-nabi-1448h",
      excerpt: "Keluarga besar MI Darul Falah memperingati Maulid Nabi Muhammad SAW dengan khidmat, diisi dengan ceramah agama dan bakti sosial.",
      date: "28 Agustus 2026",
      author: "Humas Madrasah",
      content: "Peringatan hari besar Islam senantiasa menjadi agenda rutin pembentukan karakter spiritual siswa. Tahun ini, kegiatan dipusatkan di halaman madrasah dengan menghadirkan penceramah KH. Abdullah Faqih dari Lamongan."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Manasik Haji Cilik Tingkat RA/MI Se-Kecamatan",
      location: "Lapangan Utama Komplek Darul Falah",
      start_at: "25 September 2026 07:30",
      end_at: "25 September 2026 12:00",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Pelatihan Literasi Digital & Coding Dasar untuk Siswa Kelas 6",
      location: "Laboratorium Komputer MI Darul Falah",
      start_at: "02 Oktober 2026 08:00",
      end_at: "02 Oktober 2026 11:30",
      status: "upcoming"
    }
  ];

  const facilities = [
    { name: "Ruang Kelas Full AC & Multedo", quantity: 18, desc: "Ruangan belajar representatif dilengkapi proyektor dan kipas/AC." },
    { name: "Laboratorium Komputer", quantity: 2, desc: "Perangkat PC spesifikasi tinggi terhubung internet fiber optic." },
    { name: "Perpustakaan Digital & Buku", quantity: 1, desc: "Koleksi ribuan buku pelajaran, agama, cerita anak, dan akses e-library." },
    { name: "Masjid Al-Falah", quantity: 1, desc: "Pusat ibadah pembiasaan shalat berjamaah dhuha dan dzuhur." },
    { name: "Lapangan Olahraga Serbaguna", quantity: 2, desc: "Futsal, voli, badminton, dan upacara bendera." }
  ];

  const extracurriculars = [
    { name: "Pramuka (Garuda & Penggalang)", desc: "Membentuk kedisiplinan, kepemimpinan, dan kecintaan alam." },
    { name: "Tahfidzul Qur'an", desc: "Program intensif hafalan Al-Qur'an bersanad." },
    { name: "Drumband Gita Swara Darul Falah", desc: "Seni musik dan baris-berbaris peraih juara festival regional." },
    { name: "Qiro'ah & Seni Baca Al-Qur'an", desc: "Pelatihan seni suara tilawah Al-Qur'an." },
    { name: "Pencak Silat Pagar Nusa", desc: "Bela diri prestasi dan pelestarian budaya bangsa." }
  ];

  const achievements = [
    { title: "Juara 1 MTQ Tingkat Provinsi Jawa Timur 2026", category: "Agama", level: "Provinsi", recipient: "Ahmad Zaki Al-Faruq", date: "Agustus 2026" },
    { title: "Juara Umum Porsenitas Cabang Atletik 2026", category: "Olahraga", level: "Kabupaten", recipient: "Kontingen MI Darul Falah", date: "Juli 2026" },
    { title: "Medali Emas Olimpiade Sains Madrasah (OSM)", category: "Akademik", level: "Regional", recipient: "Siti Fatimah", date: "Juni 2026" }
  ];

  const documents = [
    { title: "Kalender Akademik Tahun Ajaran 2026/2027", filename: "kalender_akademik_2026.pdf", size: "1.4 MB", type: "PDF" },
    { title: "Panduan Kurikulum Merdeka Madrasah", filename: "panduan_kurikulum_merdeka.pdf", size: "2.8 MB", type: "PDF" },
    { title: "Buku Saku Tata Tertib Siswa", filename: "tata_tertib_siswa.pdf", size: "950 KB", type: "PDF" }
  ];

  const galleryItems = [
    { title: "Kegiatan Upacara Bendera Senin Pagi", category: "Upacara", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" },
    { title: "Praktik Manasik Haji Siswa Kelas 5", category: "Keagamaan", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Juara Lomba Drumband Tingkat Kabupaten", category: "Prestasi", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" },
    { title: "Suasana Belajar Mengajar di Kelas Ber-AC", category: "Akademik", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" }
  ];

  // Phase 5 Mock Data for Absensi & Nilai
  const attendancesData = [
    { id: 1, date: "2026-09-12", classroom: "Kelas 1A", student: "Ahmad Fauzi", nisn: "0012345678", status: "hadir", notes: "Tepat waktu" },
    { id: 2, date: "2026-09-12", classroom: "Kelas 1A", student: "Siti Aminah", nisn: "0012345679", status: "sakit", notes: "Surat dokter terlampir" },
    { id: 3, date: "2026-09-12", classroom: "Kelas 2B", student: "Muhammad Rizki", nisn: "0012345680", status: "izin", notes: "Acara keluarga" },
    { id: 4, date: "2026-09-12", classroom: "Kelas 3A", student: "Dewi Lestari", nisn: "0012345681", status: "hadir", notes: "-" },
    { id: 5, date: "2026-09-12", classroom: "Kelas 4B", student: "Ahmad Zaki", nisn: "0012345682", status: "alpa", notes: "Tanpa keterangan" }
  ];

  const gradesData = [
    { id: 1, classroom: "Kelas 6A", student: "Ahmad Zaki Al-Faruq", subject: "Matematika", semester: "Ganjil", type: "UTS", score: 92.5, teacher: "Drs. H. M. Nur", notes: "Sangat memuaskan" },
    { id: 2, classroom: "Kelas 6A", student: "Ahmad Zaki Al-Faruq", subject: "Fiqih & Aswaja", semester: "Ganjil", type: "UAS", score: 95.0, teacher: "Ustadz H. Abdullah", notes: "Juara kelas" },
    { id: 3, classroom: "Kelas 5B", student: "Siti Fatimah", subject: "Bahasa Arab", semester: "Ganjil", type: "Tugas", score: 88.0, teacher: "Hj. Aminah, S.Pd.I", notes: "Aktif bertanya" },
    { id: 4, classroom: "Kelas 4A", student: "Rian Hidayat", subject: "Ilmu Pengetahuan Alam", semester: "Ganjil", type: "Praktik", score: 90.0, teacher: "Budi Santoso, S.Pd", notes: "Eksperimen sains bagus" }
  ];

  // Phase 6 Mock Data for Rapor (Report Cards)
  const reportCardsData = [
    { id: 1, classroom: "Kelas 6A", student: "Ahmad Zaki Al-Faruq", nisn: "0012345688", academicYear: "2026/2027", semester: "Ganjil", hadir: 110, izin: 2, sakit: 1, alpa: 0, status: "Published", promotion: "Naik Kelas", notes: "Prestasi sangat baik, pertahankan kedisiplinan dan hafalan Al-Qur'annya!" },
    { id: 2, classroom: "Kelas 5B", student: "Siti Fatimah", nisn: "0012345689", academicYear: "2026/2027", semester: "Ganjil", hadir: 108, izin: 4, sakit: 1, alpa: 0, status: "Published", promotion: "Naik Kelas", notes: "Sangat rajin dalam kegiatan keagamaan dan ekstrakurikuler." },
    { id: 3, classroom: "Kelas 4A", student: "Rian Hidayat", nisn: "0012345690", academicYear: "2026/2027", semester: "Ganjil", hadir: 105, izin: 3, sakit: 3, alpa: 1, status: "Published", promotion: "Belum Ditentukan", notes: "Perlu bimbingan lebih giat dalam mata pelajaran matematika." }
  ];

  // Phase 7 Mock Data for PPDB (New Student Admission)
  const ppdbRegistrantsData = [
    { id: 1, regNum: "PPDB-2026-0001", name: "Fatimah Az-Zahra", gender: "P", school: "RA Al-Hikmah Krian", period: "Gelombang 1", status: "Accepted", date: "2026-10-02" },
    { id: 2, regNum: "PPDB-2026-0002", name: "Muhammad Umar", gender: "L", school: "TK Dharma Wanita", period: "Gelombang 1", status: "Verified", date: "2026-10-03" },
    { id: 3, regNum: "PPDB-2026-0003", name: "Aisyah Nur", gender: "P", school: "RA Muslimat NU", period: "Gelombang 1", status: "Pending", date: "2026-10-04" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Top Header Contact Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>NPSN: {schoolProfile.npsn} | Kab. Lamongan, Jawa Timur</span>
            </span>
            <span className="hidden md:flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{schoolProfile.phone}</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Akreditasi: <strong>{schoolProfile.accreditation}</strong></span>
            <a 
              href="/admin" 
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded font-medium flex items-center space-x-1 transition shadow-sm"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Login Admin CMS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentNav('home')}>
            <div className="bg-emerald-600 text-white p-2.5 rounded-xl shadow-md flex items-center justify-center font-bold text-xl">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight">
                MI Darul Falah
              </h1>
              <p className="text-xs text-emerald-700 font-semibold">Sistem Informasi Terpadu Madrasah</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-600">
            <button onClick={() => setCurrentNav('home')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'home' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Beranda</button>
            <button onClick={() => setCurrentNav('profile')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'profile' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Profil</button>
            <button onClick={() => setCurrentNav('posts')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'posts' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Berita</button>
            <button onClick={() => setCurrentNav('announcements')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'announcements' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Pengumuman</button>
            <button onClick={() => setCurrentNav('events')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'events' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Agenda</button>
            <button onClick={() => setCurrentNav('galleries')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'galleries' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Galeri</button>
            <button onClick={() => setCurrentNav('documents')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'documents' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Unduhan</button>
            <button onClick={() => setCurrentNav('facilities')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'facilities' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Fasilitas</button>
            <button onClick={() => setCurrentNav('achievements')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'achievements' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Prestasi</button>
            <button onClick={() => setCurrentNav('attendances')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'attendances' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Absensi</button>
            <button onClick={() => setCurrentNav('grades')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'grades' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Nilai</button>
            <button onClick={() => setCurrentNav('rapor')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'rapor' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Rapor</button>
            <button onClick={() => setCurrentNav('ppdb')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'ppdb' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>PPDB</button>
            <button onClick={() => setCurrentNav('contact')} className={`px-3 py-2 rounded-lg transition ${currentNav === 'contact' ? 'text-emerald-700 bg-emerald-50 font-semibold' : 'hover:text-emerald-600'}`}>Kontak</button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700 hover:text-emerald-700">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
            <button onClick={() => { setCurrentNav('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Beranda</button>
            <button onClick={() => { setCurrentNav('profile'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Profil</button>
            <button onClick={() => { setCurrentNav('posts'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Berita & Artikel</button>
            <button onClick={() => { setCurrentNav('announcements'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Pengumuman</button>
            <button onClick={() => { setCurrentNav('events'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Agenda Kegiatan</button>
            <button onClick={() => { setCurrentNav('galleries'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Galeri Foto</button>
            <button onClick={() => { setCurrentNav('documents'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Unduhan Dokumen</button>
            <button onClick={() => { setCurrentNav('facilities'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Fasilitas & Sarana</button>
            <button onClick={() => { setCurrentNav('achievements'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Prestasi Madrasah</button>
            <button onClick={() => { setCurrentNav('attendances'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Kehadiran / Absensi</button>
            <button onClick={() => { setCurrentNav('grades'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Nilai Siswa</button>
            <button onClick={() => { setCurrentNav('rapor'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Rapor Hasil Belajar</button>
            <button onClick={() => { setCurrentNav('ppdb'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">PPDB online</button>
            <button onClick={() => { setCurrentNav('contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">Kontak Kami</button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* HOME VIEW */}
        {currentNav === 'home' && (
          <div>
            {/* Hero Banner */}
            <div className="relative bg-emerald-950 text-white overflow-hidden py-20 lg:py-28">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="bg-emerald-800 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-700">
                    Madrasah Unggul & Berkarakter Aswaja
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    Membangun Generasi Cerdas, Berakhlak & Berprestasi
                  </h1>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    Selamat datang di website resmi Sistem Informasi Terpadu Madrasah Ibtidaiyah Darul Falah. Pusat informasi akademik, kegiatan siswa, dan layanan digital madrasah.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button onClick={() => setCurrentNav('posts')} className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-900/40 transition flex items-center space-x-2">
                      <span>Jelajahi Berita</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setCurrentNav('profile')} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
                      Profil Madrasah
                    </button>
                  </div>
                </div>
                
                {/* Hero Quick Card / Headmaster Preview */}
                <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
                  <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center text-white text-2xl font-bold shadow-inner">
                      AA
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{schoolProfile.headmaster}</h3>
                      <p className="text-xs text-emerald-400">Kepala Madrasah Ibtidaiyah Darul Falah</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-slate-300 italic leading-relaxed">
                    &ldquo;Pendidikan madrasah bukan hanya tentang kecerdasan intelektual, melainkan penanaman akidah Ahlussunnah wal Jama'ah dan akhlakul karimah yang kokoh sejak dini.&rdquo;
                  </blockquote>
                  <div className="grid grid-cols-3 gap-3 text-center pt-2 border-t border-slate-800">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-emerald-400">450+</div>
                      <div className="text-xs text-slate-400">Siswa Aktif</div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-emerald-400">30+</div>
                      <div className="text-xs text-slate-400">Guru & Staff</div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-emerald-400">A</div>
                      <div className="text-xs text-slate-400">Akreditasi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcements Ticker / Bar */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
              <div className="max-w-7xl mx-auto flex items-center space-x-3 text-sm text-amber-900">
                <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide flex-shrink-0 flex items-center space-x-1">
                  <Megaphone className="w-3.5 h-3.5 mr-1" /> Pengumuman Penting
                </span>
                <p className="truncate font-medium">{announcements[0].title}</p>
                <button onClick={() => setCurrentNav('announcements')} className="text-amber-700 hover:text-amber-900 font-bold underline text-xs ml-auto flex-shrink-0">Lihat Semua</button>
              </div>
            </div>

            {/* Latest News & Articles Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-emerald-700 font-semibold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Informasi & Kegiatan</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Berita & Artikel Terbaru</h2>
                </div>
                <button onClick={() => setCurrentNav('posts')} className="hidden sm:flex items-center space-x-1 text-emerald-700 hover:text-emerald-800 font-semibold text-sm">
                  <span>Semua Berita</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col">
                    <div className="h-48 bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400">
                      <ImageIcon className="w-12 h-12" />
                      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow space-y-3">
                      <div className="text-xs text-slate-500">{post.date} • Oleh {post.author}</div>
                      <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-emerald-700 cursor-pointer" onClick={() => setSelectedPost(post)}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                      <button onClick={() => setSelectedPost(post)} className="mt-auto pt-4 text-emerald-700 font-semibold text-sm flex items-center space-x-1 hover:text-emerald-800">
                        <span>Baca Selengkapnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Modules Grid */}
            <section className="bg-slate-100 py-16 border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Jelajahi Portal Madrasah</h2>
                  <p className="text-slate-600 text-sm mt-2">Akses cepat ke seluruh layanan dan informasi terpadu MI Darul Falah.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div onClick={() => setCurrentNav('profile')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Profil</h4>
                  </div>
                  <div onClick={() => setCurrentNav('posts')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Newspaper className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Berita</h4>
                  </div>
                  <div onClick={() => setCurrentNav('announcements')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Megaphone className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Pengumuman</h4>
                  </div>
                  <div onClick={() => setCurrentNav('events')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Agenda</h4>
                  </div>
                  <div onClick={() => setCurrentNav('galleries')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Galeri</h4>
                  </div>
                  <div onClick={() => setCurrentNav('documents')} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Unduhan</h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PROFILE VIEW */}
        {currentNav === 'profile' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-emerald-700 font-semibold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Profil Madrasah</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Tentang MI Darul Falah</h2>
              <p className="text-slate-600 text-base">Lembaga pendidikan Islam dasar terpadu yang memadukan kurikulum nasional dan nilai-nilai keislaman.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <span>Identitas Madrasah</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Nama Madrasah</span>
                    <strong className="text-slate-900">{schoolProfile.name}</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">NPSN</span>
                    <strong className="text-slate-900">{schoolProfile.npsn}</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">NSM</span>
                    <strong className="text-slate-900">{schoolProfile.nsm}</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Akreditasi</span>
                    <strong className="text-emerald-700">{schoolProfile.accreditation}</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Kepala Madrasah</span>
                    <strong className="text-slate-900">{schoolProfile.headmaster}</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2 mb-4">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <span>Visi Madrasah</span>
                  </h3>
                  <p className="text-slate-700 italic bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-base leading-relaxed">
                    &ldquo;{schoolProfile.vision}&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Misi Utama:</h4>
                  <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
                    {schoolProfile.mission.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* POSTS VIEW */}
        {currentNav === 'posts' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Berita & Artikel</h2>
              <p className="text-slate-600 text-sm">Informasi seputar kegiatan belajar mengajar, prestasi, dan pengumuman madrasah.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col">
                  <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                    <ImageIcon className="w-12 h-12" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <div className="text-xs text-slate-500">{post.date} • Oleh {post.author}</div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-emerald-750 cursor-pointer" onClick={() => setSelectedPost(post)}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANNOUNCEMENTS VIEW */}
        {currentNav === 'announcements' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Pengumuman Resmi</h2>
              <p className="text-slate-600 text-sm">Informasi penting bagi orang tua, wali murid, dan seluruh siswa.</p>
            </div>
            <div className="space-y-4">
              {announcements.map((ann) => (
                <div key={ann.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                      Penting
                    </span>
                    <span className="text-xs text-slate-400">{ann.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{ann.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ann.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTS VIEW */}
        {currentNav === 'events' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Agenda & Kegiatan</h2>
              <p className="text-slate-600 text-sm">Kalender kegiatan dan event mendatang di MI Darul Falah.</p>
            </div>
            <div className="space-y-4">
              {events.map((ev) => (
                <div key={ev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                      Mendatang
                    </span>
                    <h3 className="font-bold text-slate-900 text-lg mt-1">{ev.title}</h3>
                    <p className="text-xs text-slate-500 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{ev.location}</span>
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-right text-xs text-slate-700">
                    <div><strong>Mulai:</strong> {ev.start_at}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERIES VIEW */}
        {currentNav === 'galleries' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Galeri Foto Kegiatan</h2>
              <p className="text-slate-600 text-sm">Dokumentasi visual aktivitas siswa, fasilitas, dan momen berharga madrasah.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs group">
                  <div className="h-56 bg-slate-200 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <span className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTS VIEW */}
        {currentNav === 'documents' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Unduhan Dokumen Resmi</h2>
              <p className="text-slate-600 text-sm">Unduh kalender akademik, panduan kurikulum, dan formulir penting.</p>
            </div>
            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{doc.title}</h3>
                      <p className="text-xs text-slate-500">{doc.filename} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition flex-shrink-0">
                    <Download className="w-4 h-4" />
                    <span>Unduh PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FACILITIES VIEW */}
        {currentNav === 'facilities' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Fasilitas & Sarana Prasarana</h2>
              <p className="text-slate-600 text-sm">Fasilitas belajar modern untuk menunjang kenyamanan dan prestasi peserta didik.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
                      Qty: {fac.quantity}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{fac.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{fac.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS VIEW */}
        {currentNav === 'achievements' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Prestasi Siswa & Madrasah</h2>
              <p className="text-slate-600 text-sm">Daftar kejuaraan dan penghargaan membanggakan di tingkat regional dan nasional.</p>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">
                          {ach.level}
                        </span>
                        <span className="text-xs text-slate-400">{ach.date}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mt-1">{ach.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Penerima: <strong>{ach.recipient}</strong></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ATTENDANCE (ABSENSI) VIEW */}
        {currentNav === 'attendances' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Phase 5 Modul</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Rekap & Kehadiran Siswa (Absensi)</h2>
              <p className="text-slate-600 text-sm">Monitoring kehadiran harian siswa (Hadir, Izin, Sakit, Alpa) per kelas dan periode.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <span className="text-xs text-slate-500 font-medium">Total Hadir</span>
                <p className="text-2xl font-bold text-emerald-600 mt-1">98.5%</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <span className="text-xs text-slate-500 font-medium">Sakit</span>
                <p className="text-2xl font-bold text-blue-600 mt-1">4 Siswa</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <span className="text-xs text-slate-500 font-medium">Izin</span>
                <p className="text-2xl font-bold text-amber-600 mt-1">2 Siswa</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
                <span className="text-xs text-slate-500 font-medium">Alpa</span>
                <p className="text-2xl font-bold text-rose-600 mt-1">0 Siswa</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Data Absensi Terbaru (Tahun Ajaran 2026/2027)</h3>
                <span className="text-xs bg-slate-100 px-3 py-1 rounded-lg text-slate-600 font-medium">Live Server Sync</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
                      <th className="p-4">Tanggal</th>
                      <th className="p-4">Kelas</th>
                      <th className="p-4">Nama Siswa</th>
                      <th className="p-4">NISN</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {attendancesData.map((att) => (
                      <tr key={att.id} className="hover:bg-slate-50 transition">
                        <td className="p-4 text-slate-600 font-mono text-xs">{att.date}</td>
                        <td className="p-4 font-semibold text-slate-900">{att.classroom}</td>
                        <td className="p-4 font-bold text-slate-900">{att.student}</td>
                        <td className="p-4 text-slate-500 font-mono text-xs">{att.nisn}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase ${
                            att.status === 'hadir' ? 'bg-emerald-100 text-emerald-800' :
                            att.status === 'sakit' ? 'bg-blue-100 text-blue-800' :
                            att.status === 'izin' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {att.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 text-xs">{att.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* GRADES (NILAI) VIEW */}
        {currentNav === 'grades' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Phase 5 Modul</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Rekap & Input Nilai Siswa</h2>
              <p className="text-slate-600 text-sm">Manajemen komponen nilai (Tugas, Harian, UTS, UAS, Praktik) per mata pelajaran dan guru pengampu.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Ledger Nilai Akademik Siswa</h3>
                <span className="text-xs bg-slate-100 px-3 py-1 rounded-lg text-slate-600 font-medium">Semester Ganjil 2026/2027</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
                      <th className="p-4">Kelas</th>
                      <th className="p-4">Nama Siswa</th>
                      <th className="p-4">Mata Pelajaran</th>
                      <th className="p-4">Komponen</th>
                      <th className="p-4">Nilai</th>
                      <th className="p-4">Guru Pengampu</th>
                      <th className="p-4">Catatan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {gradesData.map((grade) => (
                      <tr key={grade.id} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-semibold text-slate-900">{grade.classroom}</td>
                        <td className="p-4 font-bold text-slate-900">{grade.student}</td>
                        <td className="p-4 text-slate-700">{grade.subject}</td>
                        <td className="p-4">
                          <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-xs font-bold">
                            {grade.type}
                          </span>
                        </td>
                        <td className="p-4 font-mono font-bold text-emerald-700 text-base">{grade.score}</td>
                        <td className="p-4 text-slate-600 text-xs">{grade.teacher}</td>
                        <td className="p-4 text-slate-500 text-xs italic">{grade.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* RAPOR VIEW */}
        {currentNav === 'rapor' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Phase 6 Modul</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Rapor Hasil Belajar Siswa (E-Rapor)</h2>
              <p className="text-slate-600 text-sm">Rekapitulasi nilai rapor per semester, rekap kehadiran, catatan wali kelas, dan status kenaikan kelas.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Daftar Rapor Digital Siswa</h3>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg font-semibold">Tahun Ajaran 2026/2027</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
                      <th className="p-4">Kelas</th>
                      <th className="p-4">Nama Siswa</th>
                      <th className="p-4">NISN</th>
                      <th className="p-4">Semester</th>
                      <th className="p-4">Kehadiran (H/I/S/A)</th>
                      <th className="p-4">Status Rapor</th>
                      <th className="p-4">Kenaikan/Kelulusan</th>
                      <th className="p-4">Catatan Wali Kelas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {reportCardsData.map((rc) => (
                      <tr key={rc.id} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-semibold text-slate-900">{rc.classroom}</td>
                        <td className="p-4 font-bold text-slate-900">{rc.student}</td>
                        <td className="p-4 text-slate-500 font-mono text-xs">{rc.nisn}</td>
                        <td className="p-4 text-slate-700 font-medium">{rc.semester}</td>
                        <td className="p-4 font-mono text-xs text-slate-700">
                          <span className="text-emerald-700 font-bold">{rc.hadir}H</span> / 
                          <span className="text-blue-600">{rc.izin}I</span> / 
                          <span className="text-amber-600">{rc.sakit}S</span> / 
                          <span className="text-rose-600">{rc.alpa}A</span>
                        </td>
                        <td className="p-4">
                          <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md text-xs font-bold">
                            {rc.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                            rc.promotion === 'Naik Kelas' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            {rc.promotion}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 text-xs italic">{rc.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PPDB VIEW */}
        {currentNav === 'ppdb' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Phase 7 Modul</span>
              <h2 className="text-3xl font-extrabold text-slate-900">PPDB Online (Penerimaan Peserta Didik Baru)</h2>
              <p className="text-slate-600 text-sm">Informasi gelombang pendaftaran, rekapitulasi data pendaftar calon siswa baru, dan verifikasi berkas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Gelombang Aktif</span>
                <h3 className="text-lg font-bold text-slate-900">Gelombang 1 (2026/2027)</h3>
                <p className="text-xs text-slate-600">01 Oktober 2026 - 31 Desember 2026</p>
                <div className="pt-2">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md">Kuota: 150 Siswa</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Total Pendaftar</span>
                <p className="text-3xl font-extrabold text-emerald-700 mt-1">3 Siswa</p>
                <p className="text-xs text-slate-500">Terverifikasi sistem database</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Status Pendaftaran</span>
                <p className="text-3xl font-extrabold text-blue-600 mt-1">BUKA</p>
                <p className="text-xs text-slate-500">Pendaftaran online & offline tersedia</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Daftar Calon Siswa Baru (PPDB)</h3>
                <span className="text-xs bg-slate-100 px-3 py-1 rounded-lg text-slate-600 font-medium">Live Database Sync</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
                      <th className="p-4">No. Pendaftaran</th>
                      <th className="p-4">Nama Calon Siswa</th>
                      <th className="p-4">L/P</th>
                      <th className="p-4">Asal Sekolah (TK/RA)</th>
                      <th className="p-4">Gelombang</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Tanggal Daftar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {ppdbRegistrantsData.map((reg) => (
                      <tr key={reg.id} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-mono font-bold text-emerald-700 text-xs">{reg.regNum}</td>
                        <td className="p-4 font-bold text-slate-900">{reg.name}</td>
                        <td className="p-4 text-slate-700 font-medium">{reg.gender}</td>
                        <td className="p-4 text-slate-600">{reg.school}</td>
                        <td className="p-4 text-slate-700">{reg.period}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                            reg.status === 'Accepted' ? 'bg-emerald-100 text-emerald-800' :
                            reg.status === 'Verified' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {reg.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-500 font-mono text-xs">{reg.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT VIEW */}
        {currentNav === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Hubungi Kami</h2>
              <p className="text-slate-600 text-sm">Silakan kunjungi atau hubungi sekretariat madrasah untuk informasi lebih lanjut.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h3 className="font-bold text-slate-900 text-lg">Sekretariat Madrasah</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{schoolProfile.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{schoolProfile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{schoolProfile.email}</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Portal Administrasi CMS</h3>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    Bagi guru, staff, dan administrator yang memiliki hak akses, silakan masuk ke Panel Administrasi Filament untuk mengelola konten website.
                  </p>
                </div>
                <a href="/admin" className="bg-white text-emerald-900 hover:bg-emerald-50 text-center py-3 rounded-xl font-bold text-sm transition shadow-md flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>Masuk ke Panel Admin</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                  {selectedPost.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">{selectedPost.title}</h2>
                <p className="text-xs text-slate-400 mt-1">{selectedPost.date} • Oleh {selectedPost.author}</p>
              </div>
              <button onClick={() => setSelectedPost(null)} className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-sm text-slate-700 leading-relaxed space-y-4">
              <p>{selectedPost.content}</p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-right">
              <button onClick={() => setSelectedPost(null)} className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">MI Darul Falah</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistem Informasi Terpadu & Website Resmi Madrasah Ibtidaiyah Darul Falah. Mencetak generasi unggul, berakhlak mulia, dan berwawasan Aswaja.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">Tautan Cepat</h3>
            <ul className="space-y-1.5 text-xs">
              <li><button onClick={() => setCurrentNav('profile')} className="hover:text-white transition">Profil Madrasah</button></li>
              <li><button onClick={() => setCurrentNav('posts')} className="hover:text-white transition">Berita & Artikel</button></li>
              <li><button onClick={() => setCurrentNav('announcements')} className="hover:text-white transition">Pengumuman Resmi</button></li>
              <li><button onClick={() => setCurrentNav('facilities')} className="hover:text-white transition">Fasilitas Madrasah</button></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">Kontak & Admin</h3>
            <p className="text-xs">NPSN: {schoolProfile.npsn}</p>
            <p className="text-xs">{schoolProfile.address}</p>
            <div className="pt-2">
              <a href="/admin" className="inline-flex items-center space-x-1.5 text-xs bg-emerald-800 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg font-semibold transition">
                <Shield className="w-3.5 h-3.5" />
                <span>Login Filament CMS</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Madrasah Ibtidaiyah Darul Falah. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
