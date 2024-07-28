import React from "react";
import Navbar from "@/app/created-components/Navbar";

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
    </div>
  );
}

export default Kesehatan;
