"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/created-components/Navbar";
import Footer from "@/app/created-components/Footer";
import artikelData from "../../data/artikel";

const ArtikelDetail = () => {
  const { id } = useParams();
  const artikel = artikelData.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!artikel) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto my-10">
          <h1 className="text-center text-4xl font-bold">
            Artikel tidak ditemukan
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold">{artikel.title}</h1>
        <p className="text-lg text-gray-700">Ditulis oleh: {artikel.writer}</p>
        <img
          src={artikel.image}
          alt={artikel.title}
          className="w-full h-auto mt-4 rounded-lg"
        />
        <div className="mt-6 space-y-4 text-lg text-gray-700">
          {artikel.fulltext.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelDetail;
