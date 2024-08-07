import React from "react";
import Navbar from "../created-components/Navbar";
import LayananCard from "../created-components/LayananCard";
import hospital from "../icons/hospital";
import letter from "../icons/letter";
import Footer from "../created-components/Footer";
import Link from "next/link";
import BsBook from "../icons/book";

function Layanan() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-grow">
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

        <div className="flex justify-center">
          <div
            id="layananCardList"
            className="mt-3 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3"
          >
            <Link href={"/layanan/pendidikan"}>
              <LayananCard icon={BsBook} text="Pendidikan" />
            </Link>
            <Link href={"/layanan/publik"}>
              <LayananCard icon={letter} text="Layanan Publik" />
            </Link>
            <Link href={"/layanan/kesehatan"}>
              <LayananCard icon={hospital} text="Kesehatan" />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Layanan;
