import React from "react";
import Header from "./created-components/Header";
import Navbar from "./created-components/Navbar";

function Home() {
  return (
    <div>
      {/* //HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">PROFIL</h1>
        <h1 className="text-center font-bold italic text-3xl md:text-4xl lg:text-5xl">DESA NGABLAK</h1>
        <hr className="mx-5 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">Kecamatan Wonosamodro, Kabupaten Boyolali</h2>
      </div>
    </div>
  );
}

export default Home;
