import React from "react";
import Navbar from "../created-components/Navbar";
import LayananCard from "../created-components/LayananCard";
import hospital from "../icons/hospital";
import letter from "../icons/letter";
import Footer from "../created-components/Footer";
import Link from "next/link";

function Layanan() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* TITLE */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          LAYANAN MASYARAKAT - DESA NGABLAK
        </h1>
        <hr className="mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-32 mt-3" />
      </div>

      <div
        id="layananCardList"
        className="sm:mx-32 md:mx-20 lg:mx-42 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Link href={"/layanan/posyandu"}><LayananCard icon={hospital} text="Layanan Posyandu" /></Link>
        <Link href={"/layanan/surat"}><LayananCard icon={letter} text="Layanan Surat" /></Link>
        <Link href={"/layanan/posyandu"}><LayananCard icon={hospital} text="Layanan tidak apa apa" /></Link>
        <Link href={"/layanan/surat"}><LayananCard icon={hospital} text="Layanan tidak ada" /></Link>
        <Link href={"/layanan/posyandu"}><LayananCard icon={hospital} text="Layanan Posyandu" /></Link>
        <Link href={"/layanan/surat"}><LayananCard icon={letter} text="Layanan Surat" /></Link>
        <Link href={"/layanan/posyandu"}><LayananCard icon={hospital} text="Layanan tidak apa apa" /></Link>
        <Link href={"/layanan/surat"}><LayananCard icon={hospital} text="Layanan tidak ada" /></Link>
      </div>
      
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Layanan;
