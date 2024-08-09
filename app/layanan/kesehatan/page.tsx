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
            src="https://via.placeholder.com/400x300"
            alt="Placeholder"
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
        {/* CARD */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold">Informasi Kesehatan</h3>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non urna euismod, placerat quam at, tempor turpis. Donec ac
              facilisis arcu. In varius lorem ac purus suscipit, nec egestas
              magna bibendum. Proin pharetra felis a felis efficitur
              scelerisque. Integer nec laoreet est.
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      {/* SUB-TITLE */}
      <div id="title" className="mt-10">
        <hr className="mx-4 md:mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl font-bold italic">
          Daftar Kader Posyandu
        </h2>
        <hr className="mx-4 md:mx-32 mt-3" />
      </div>

      {/* FOOTER */}
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Kesehatan;
