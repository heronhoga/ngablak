"use client";
import React, { useState } from "react";
import Navbar from "@/app/created-components/Navbar";
import Footer from "@/app/created-components/Footer";

function Pendidikan() {
  const [activeSection, setActiveSection] = useState("formal");

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* TITLE */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          PENDIDIKAN
        </h1>
        <hr className="mx-4 md:mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-4 md:mx-32 mt-3" />
      </div>

      {/* SWITCHER */}
      <div
        id="switcher"
        className="mt-10 flex justify-center space-x-4 md:space-x-10 lg:space-x-20 border border-black rounded-lg text-center mx-4 md:mx-20 lg:mx-72 cursor-pointer"
      >
        <div
          className={`p-3 flex-1 ${
            activeSection === "formal"
              ? "bg-gradient-to-r from-blue-900 to-cyan-700 text-white rounded-lg"
              : ""
          }`}
          onClick={() => setActiveSection("formal")}
        >
          Pendidikan Formal
        </div>
        <div
          className={`p-3 flex-1 ${
            activeSection === "nonformal"
              ? "bg-gradient-to-r from-blue-900 to-cyan-700 text-white rounded-lg"
              : ""
          }`}
          onClick={() => setActiveSection("nonformal")}
        >
          Pendidikan Non Formal
        </div>
      </div>

      {/* CONTENT */}
      {activeSection === "formal" && (
        <div id="pendidikan-formal" className="mt-10">
          <hr className="mb-10" />
          <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
            PENDIDIKAN FORMAL
          </h1>
          {/* pendidikan formal content */}
        </div>
      )}

      {activeSection === "nonformal" && (
        <div id="pendidikan-nonformal" className="mt-10">
          <hr className="mb-10" />
          <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
            PENDIDIKAN NON-FORMAL
          </h1>
          {/* pendidikan nonformal content */}
        </div>
      )}

      {/* FOOTER */}
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Pendidikan;
