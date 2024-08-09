export type ModalContent = {
  nama: string;
  alamat?: string;
  kepalaSekolah: string;
  tenagaPendidik: number;
  ekstra?: string;
  prestasi?: string;
  jumlahMurid: number;
  fasilitas: string;
  imageUrl?: string;
  description?: string;
  luasSekolah?: string;
};

  
  export const pendidikanData = {
    formal: [
      {
        nama: "SD Negeri 1 Wonosamodro",
        kepalaSekolah: "Sujito, S.Pd.",
        alamat: "Gajihan, Ngablak, Wonosamodro, Kabupaten Boyolali, Jawa Tengah 57382",
        tenagaPendidik: 11,
        ekstra: "Olahraga, Pramuka",
        prestasi: "Juara 1 FTBI (Festival Bahasa Ibu) tahun 2023 tingkat Kecamatan, Juara 1 Lomba Olahraga tahun 2024 tingkat Kecamatan",
        jumlahMurid: 103,
        fasilitas: "Perpustakaan, Laboratorium, Lapangan Olahraga",
        imageUrl: "https://via.placeholder.com/400",
        description: "SD Negeri 1 Ngablak adalah sebuah sekolah yang berada di dukuh Gajihan, desa Ngablak, kecamatan Wonosamodro, kabupaten Boyolali."
      },
      {
        nama: "SD Negeri 2 Wonosamodro",
        alamat: "dukuh Gajihan, Ngablak, Wonosamodro, Kabupaten Boyolali, Jawa Tengah 57382",
        kepalaSekolah: "Suparmi S.Pd.",
        tenagaPendidik: 9,
        ekstra: "Pramuka",
        prestasi: "Juara 2 MIPA tingkat Kecamatan, Juara 3 lomba Menggambar dan Melukis tingkat Kecamatan",
        jumlahMurid: 52,
        fasilitas: "Perpustakaan, Lapangan Olahraga",
        imageUrl: "https://via.placeholder.com/400",
        description: "SD Negeri 2 Ngablak is committed to fostering a nurturing and inclusive learning environment. The school focuses on developing both academic and personal growth of its students."
      },
      {
        nama: "RA Miftakhul Ulum",
        kepalaSekolah: "Herlina, S.Pd.",
        alamat: "Kemiri, Ngablak, Wonosamodro, Kabupaten Boyolali, Jawa Tengah 57382",
        tenagaPendidik: 4,
        jumlahMurid: 45 ,
        fasilitas: "2 Ruang Kelas, 1 Kantor, Speaker, Taman Bermain, Perpustakaan Mini, Mainan Indoor dan Outdoor, Toilet, Wastafel, Lingkungan nyaman yang jauh dari jalan raya",
        imageUrl: "https://via.placeholder.com/400",
        luasSekolah: "541 m2",
        description: "RA Miftakhul Ulum adalah raihan pendidikan Islam yang berada di desa Ngablak, Kecamatan Wonosamodro, kabupaten Boyolali. RA Miftakhul Ulum didirikan pada tahun 2001."
      },
    ],
    nonFormal: [
      {
        nama: "TPQ Nganjung-anjung",
        alamat: "Jl. Nganjung-anjung No. 10",
        kepalaSekolah: "Eko Wijaya",
        tenagaPendidik: 15,
        ekstra: "Hafalan Al-Qur'an, Hadis, Doa",
        prestasi: "Juara 1 Lomba Hafalan Al-Qur'an 2022",
        jumlahMurid: 120,
        fasilitas: "Ruang Belajar, Perpustakaan, Aula",
        imageUrl: "https://via.placeholder.com/400",
        description: "TPQ Nganjung-anjung is dedicated to teaching children the basics of reading and understanding the Al-Qur'an, while also fostering moral and ethical values."
      },
      {
        nama: "TPQ Kemiri",
        alamat: "Jl. Kemiri No. 22",
        kepalaSekolah: "Siti Nurhaliza",
        tenagaPendidik: 10,
        ekstra: "Hafalan Al-Qur'an, Hadis, Doa",
        prestasi: "Juara 2 Lomba Hafalan Hadis 2021",
        jumlahMurid: 100,
        fasilitas: "Ruang Belajar, Perpustakaan, Aula",
        imageUrl: "https://via.placeholder.com/400",
        description: "TPQ Kemiri provides a supportive environment for children to learn the Al-Qur'an and Islamic teachings, emphasizing character building and religious knowledge."
      }
    ]
  };
  