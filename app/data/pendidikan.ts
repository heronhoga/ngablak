export type ModalContent = {
    nama: string;
    alamat: string;
    kepalaSekolah: string;
    tenagaPendidik: number;
    ekstra: string;
    prestasi: string;
    jumlahMurid: number;
    fasilitas: string;
  };
  
  export const pendidikanData = {
    formal: [
      {
        nama: "SD Negeri 1 Wonosamodro",
        alamat: "Jl. Raya Wonosamodro No. 123",
        kepalaSekolah: "Budi Santoso",
        tenagaPendidik: 20,
        ekstra: "Pramuka, Paskibra, PMR",
        prestasi: "Juara 1 Lomba Cerdas Cermat 2023",
        jumlahMurid: 300,
        fasilitas: "Perpustakaan, Laboratorium, Lapangan Olahraga",
        imageUrl: "https://via.placeholder.com/400",
        description: "SD Negeri 1 Ngablak is a renowned primary school known for its excellence in academics and extracurricular activities. It aims to provide holistic education to its students."
      },
      {
        nama: "SD Negeri 2 Wonosamodro",
        alamat: "Jl. Raya Wonosamodro No. 124",
        kepalaSekolah: "Siti Aminah",
        tenagaPendidik: 18,
        ekstra: "Pramuka, Paskibra, PMR",
        prestasi: "Juara 2 Lomba Cerdas Cermat 2023",
        jumlahMurid: 280,
        fasilitas: "Perpustakaan, Laboratorium, Lapangan Olahraga",
        imageUrl: "https://via.placeholder.com/400",
        description: "SD Negeri 2 Ngablak is committed to fostering a nurturing and inclusive learning environment. The school focuses on developing both academic and personal growth of its students."
      }
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
  