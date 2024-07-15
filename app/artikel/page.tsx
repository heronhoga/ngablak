import React from "react";
import Navbar from "../created-components/Navbar";
import BeritaCard from "../created-components/ArtikelCard";
import Footer from "../created-components/Footer";

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
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 1"
          summary="Brief description for article 1."
          articleUrl="/artikel/1"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 2"
          summary="Brief description for article 2."
          articleUrl="/artikel/2"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 3"
          summary="Brief description for article 3."
          articleUrl="/artikel/3"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 4"
          summary="Brief description for article 4."
          articleUrl="/artikel/4"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 5"
          summary="Brief description for article 5."
          articleUrl="/artikel/5"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 6"
          summary="Brief description for article 6."
          articleUrl="/artikel/6"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 7"
          summary="Brief description for article 7."
          articleUrl="/artikel/7"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 8"
          summary="Brief description for article 8."
          articleUrl="/artikel/8"
        />
        <BeritaCard
          image="https://via.placeholder.com/400"
          title="Artikel 9"
          summary="Brief description for article 9."
          articleUrl="/artikel/9"
        />
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Artikel;
