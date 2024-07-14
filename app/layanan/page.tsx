import React from "react";
import Navbar from "../created-components/Navbar";
import LayananCard from "../created-components/LayananCard";
import hospital from "../icons/hospital";
import letter from "../icons/letter";

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

      <div id="layananCardList" className="mx-3 mt-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <LayananCard icon={hospital} text="Layanan Posyandu" />
        <LayananCard icon={letter} text="Layanan Surat" />
        <LayananCard icon={hospital} text="Layanan tidak apa apa" />
        <LayananCard icon={hospital} text="Layanan tidak ada" />
      </div>
    </div>
  );
}

export default Layanan;
