import React from "react";
import Navbar from "@/app/created-components/Navbar";
import Footer from "@/app/created-components/Footer";

function Kesehatan() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* TITLE */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          LAYANAN KESEHATAN
        </h1>
        <hr className="mx-4 md:mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-4 md:mx-32 mt-3" />
      </div>

      {/* CONTENT */}
      <div
        id="content"
        className="flex flex-col md:flex-row items-center justify-center mt-10 mx-4 md:mx-32"
      >
        {/* IMAGE */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4">
          <img
            src="../images/posyandu/posyandu.jpg"
            alt="Placeholder"
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
        {/* CARD */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold">Informasi Kesehatan</h3>
            <p className="mt-2 text-sm md:text-base text-justify">
              Di Desa Ngablak, terdapat 20 kader kesehatan aktif yang bertugas melayani masyarakat. Jumlah balita yang terdaftar sebanyak 155 anak. 
              Posyandu telah berdiri sejak tahun 2007, dengan 4 posyandu yang tersebar di beberapa dusun, yaitu:
            </p>
            <ul className="mt-2 text-sm md:text-base list-disc list-inside">
              <li>Posyandu Sanjaya 1 di Dusun Ngablak, yang dilaksanakan setiap tanggal 6</li>
              <li>Posyandu Sanjaya 2 di Dusun Kemiri, yang dilaksanakan setiap tanggal 12</li>
              <li>Posyandu Sanjaya 3 di Dusun Gajihan, yang dilaksanakan setiap tanggal 14</li>
              <li>Posyandu Sanjaya 4 di Dusun Nganjung, yang dilaksanakan setiap tanggal 19</li>
            </ul>
            <p className="mt-2 text-sm md:text-base text-justify">
              Fasilitas yang tersedia di posyandu mencakup layanan untuk balita dan lansia, dengan semua kegiatan terpusat di balai desa. 
              Setiap posyandu memiliki lima meja pelayanan yang terdiri dari:
            </p>
            <ul className="mt-2 text-sm md:text-base list-decimal list-inside">
              <li>Meja 1: Pendaftaran</li>
              <li>Meja 2: Pengukuran</li>
              <li>Meja 3: Pencatatan</li>
              <li>Meja 4: Penyuluhan</li>
              <li>Meja 5: Pelayanan kesehatan dan Pemberian Makanan Tambahan (PMT)</li>
            </ul>
            <p className="mt-2 text-sm md:text-base text-justify">
              Fasilitas tambahan yang tersedia antara lain timbangan berat badan digital untuk anak dan dewasa, timbangan berat badan digital untuk bayi tidur, 
              alat pengukur tinggi badan anak dalam posisi berdiri, alat pengukur tinggi badan anak dalam posisi tidur, dan pengukur lingkar lengan atas anak. 
              Posyandu di desa ini telah berdiri sejak tahun 2007.
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      {/* SUB-TITLE */}
      {/* <div id="title" className="mt-10">
        <hr className="mx-4 md:mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl font-bold italic">
          Daftar Kader Posyandu
        </h2>
        <hr className="mx-4 md:mx-32 mt-3" />
      </div> */}

      {/* FOOTER */}
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Kesehatan;
