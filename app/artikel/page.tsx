import React from "react";
import Navbar from "../created-components/Navbar";
import ArtikelCard from "../created-components/ArtikelCard";
import Footer from "../created-components/Footer";
import artikelData from "../data/artikel";

function Artikel() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      {/* TITLE */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          ARTIKEL - DESA NGABLAK
        </h1>
        <hr className="mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-32 mt-3" />
      </div>

      <div
        id="artikelList"
        className="mx-5 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
      >
        {artikelData.map((artikel) => (
          <ArtikelCard
            key={artikel.id}
            image={artikel.image}
            title={artikel.title}
            summary={artikel.summary}
            articleUrl={`/artikel/${artikel.id}`}
          />
        ))}
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Artikel;
