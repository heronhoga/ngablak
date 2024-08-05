interface Requirement {
  id: number;
  description: string;
}

interface Section {
  name: string;
  requirements: Requirement[];
}

interface PublicService {
  name: string;
  sections: Section[];
}

const publicServices: PublicService[] = [
  {
    name: "Kartu Keluarga",
    sections: [
      {
        name: "Penduduk Baru",
        requirements: [
          { id: 1, description: "Formulir F-1.15 atau F-1.16" },
          { id: 2, description: "Surat Keterangan Pindah" },
          {
            id: 3,
            description:
              "Fotokopi Surat Nikah/Kutipan Akta Perkawinan/Perceraian",
          },
        ],
      },
      {
        name: "Perubahan Data",
        requirements: [
          { id: 1, description: "Formulir F-1.15 atau F-1.16" },
          { id: 2, description: "Formulir F-1.05" },
          { id: 3, description: "Kartu Keluarga Asli" },
          { id: 4, description: "Data Pendukung" },
        ],
      },
      {
        name: "Penambahan Keluarga",
        requirements: [
          { id: 1, description: "Formulir F-1.15 atau F-1.16" },
          { id: 2, description: "Kartu Keluarga Asli" },
          { id: 3, description: "Surat Keterangan Lahir" },
        ],
      },
      {
        name: "Pengurangan Keluarga",
        requirements: [
          { id: 1, description: "Formulir F-1.15 atau F-1.16" },
          { id: 2, description: "Kartu Keluarga Lama Asli" },
          {
            id: 3,
            description:
              "Fotokopi Kutipan Kematian/Surat Pindah/Data Dukung Lainnya",
          },
        ],
      },
      {
        name: "Hilang",
        requirements: [
          { id: 1, description: "Fotokopi KTP" },
          { id: 2, description: "Fotokopi Kartu Keluarga Hilang" },
          { id: 3, description: "Surat Kehilangan dari Polsek" },
          { id: 4, description: "Dokumen Pendukung" },
          { id: 5, description: "Fotokopi Akta Kelahiran" },
          {
            id: 6,
            description: "Fotokopi Akta Perkawinan/Perceraian/Buku Nikah",
          },
        ],
      },
    ],
  },
  {
    name: "Penerbitan KTP",
    sections: [
      {
        name: "KTP Baru",
        requirements: [
          {
            id: 1,
            description:
              "Berusia 17 tahun keatas, Sudah Kawin, atau Pernah Kawin",
          },
          { id: 2, description: "Fotokopi Kartu Keluarga" },
          { id: 3, description: "SKDLN dari Instansi Pelaksana" },
        ],
      },
      {
        name: "KTP Hilang/Rusak",
        requirements: [
          { id: 1, description: "KTP-el yang Rusak" },
          { id: 2, description: "Fotokopi Kartu Keluarga" },
          { id: 3, description: "Paspor, dan Kartu Izin Tinggal Tetap" },
        ],
      },
      {
        name: "Perubahan Data",
        requirements: [
          { id: 1, description: "Fotokopi Kartu Keluarga" },
          { id: 2, description: "KTP-el Lama" },
          {
            id: 3,
            description:
              "Surat Keterangan Perubahan Kependudukan dan Peristiwa Penting",
          },
        ],
      },
      {
        name: "Orang Asing yang Berijin",
        requirements: [
          {
            id: 1,
            description:
              "Berusia 17 (dewasa) keatas, Sudah Kawin, atau Pernah Kawin",
          },
          { id: 2, description: "Fotokopi Kartu Keluarga" },
          {
            id: 3,
            description:
              "Belum Menikah Melampirkan Kutipan Akta Kelahiran, Paspor, dan Kartu Izin Tetap",
          },
          { id: 4, description: "Surat Catatan Kepolisian" },
        ],
      },
      {
        name: "Pindah KTP",
        requirements: [
          { id: 1, description: "SKP/SKPD" },
          { id: 2, description: "SKDLN dari Instansi Pelaksana" },
          { id: 3, description: "Fotokopi Kartu Keluarga" },
        ],
      },
    ],
  },
  {
    name: "Surat Keterangan Pindah Datang",
    sections: [
      {
        name: "Dalam Kelurahan",
        requirements: [{ id: 1, description: "Kartu Keluarga dan KTP-el" }],
      },
      {
        name: "Antar Kelurahan",
        requirements: [
          { id: 1, description: "Surat Keterangan Pindah dari Kelurahan" },
          { id: 2, description: "Kartu Keluarga dan KTP-el" },
        ],
      },
      {
        name: "Antar Kecamatan",
        requirements: [
          { id: 1, description: "Surat Keterangan Pindah dari Kelurahan" },
          { id: 2, description: "Surat Keterangan Pindah dari Kecamatan" },
          { id: 3, description: "Kartu Keluarga dan KTP-el" },
        ],
      },
      {
        name: "Antar Kabupaten/Kota",
        requirements: [
          { id: 1, description: "KTP-el" },
          {
            id: 1,
            description: "Surat Keterangan Kehilangan apabila KTP-el Hilang",
          },
          { id: 1, description: "Surat Keterangan Pindah" },
          { id: 1, description: "Pengantar RT/RW Setempat" },
        ],
      },
    ],
  },
  {
    name: "Surat Keterangan Pindah Keluar",
    sections: [
      {
        name: "Antar Desa/Kecamatan/Kabupaten/Provinsi",
        requirements: [
          {
            id: 1,
            description: "Form Permohonan Pindah (Antar Kabupaten/Provinsi)",
          },
          {
            id: 2,
            description: "Mengisi Formulir Pindah (Antar Desa/Kecamatan)",
          },
          {
            id: 3,
            description:
              "Fotokopi Kartu Keluarga (KK Asli apabila pengajuan satu keluarga) (Antar Desa)",
          },
          {
            id: 4,
            description: "KTP-el Asli dan Fotokopi",
          },
          {
            id: 5,
            description: "Fotokopi Buku Nikah",
          },
          {
            id: 6,
            description: "Fotokopi Surat Cerai",
          },
          {
            id: 7,
            description: "Akta Kelahiran atau SPTJM",
          },
        ],
      },
      {
        name: "Antar Negara",
        requirements: [
          { id: 1, description: "Surat Keterangan Pindah" },
          { id: 2, description: "Kartu Keluarga dan KTP-el" },
          { id: 3, description: "Pas Foto 3x4 (4 Lembar)" },
          { id: 4, description: "SKCK" },
          { id: 5, description: "Fotokopi Buku Nikah" },
          { id: 6, description: "Fotokopi Surat Cerai" },
        ],
      },
      {
        name: "Pindah Datang Orang Asing Sementara/Tetap",
        requirements: [
          {
            id: 1,
            description: "Surat Keterangan Pindah yang Diketahui Camat",
          },
          { id: 2, description: "Fotokopi Paspor" },
          { id: 3, description: "Fotokopi Izin Tinggal Tetap" },
          { id: 4, description: "SKCK" },
        ],
      },
      {
        name: "Syarat Pindah Datang",
        requirements: [
          {
            id: 1,
            description: "Surat Keterangan Pindah Datang dari Desa",
          },
          {
            id: 2,
            description: "Surat Keterangan Pindah WNI dari Daerah Asal",
          },
          {
            id: 3,
            description: "KTP-el",
          },
        ],
      },
      //KARTU IDENTITAS ANAK
      //KARTU/KETERANGAN TINGGAL SEMENTARA
    ],
  },
];

export default publicServices;
