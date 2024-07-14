import React from "react";
import Navbar from "../created-components/Navbar";
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

      <div id="artikelList" className="grid grid-cols-1">
        
      </div>
    </div>
  );
}

export default Artikel;
