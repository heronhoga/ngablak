import React from "react";
import Navbar from "../created-components/Navbar";
import GalleryCarousel from "../created-components/GalleryCarousel";
import ImageCard from "../created-components/ImageCard";
import Footer from "../created-components/Footer";

// CAROUSEL PHOTOS
const images = [
  { image: "/images/gallery/GallCarousel1.jpg" },
  { image: "/images/gallery/GallCarousel2.jpg" },
  { image: "/images/gallery/GallCarousel3.jpg" },
];

// IMAGE CARD DATA
const imageCards = [
  {
    imageSrc: "/images/imagecard/lapangan-sekolah.jpg",
    caption: "Lapangan Desa Ngablak",
  },
  {
    imageSrc: "/images/imagecard/kolam-lele.jpg",
    caption: "Bioflok Kolam Lele",
  },
  {
    imageSrc: "/images/imagecard/pembersihan-sumber-air.jpg",
    caption: "Pembersihan Sumber Air",
  },
  {
    imageSrc: "/images/imagecard/desa-ngablak-pagi.jpg",
    caption: "Desa Ngablak Pagi Hari",
  },
  {
    imageSrc: "/images/imagecard/sawah-ngablak.jpg",
    caption: "Sawah Desa Ngablak",
  },
  {
    imageSrc: "/images/imagecard/petilasan.jpg",
    caption: "Petilasan Desa Ngablak",
  },
  {
    imageSrc: "/images/imagecard/jagung-ibu.jpg",
    caption: "Menjemur Jagung",
  },
  {
    imageSrc: "/images/imagecard/lapangan-anak.jpg",
    caption: "Kegiatan Anak-anak di Lapangan",
  },
  {
    imageSrc: "/images/imagecard/singkong.jpg",
    caption: "Menjemur Singkong",
  },
  {
    imageSrc: "/images/imagecard/jagung-memarut.jpg",
    caption: "Kegiatan Memarut Jagung",
  },
  {
    imageSrc: "/images/imagecard/sawah-siang.jpg",
    caption: "Kondisi Sawah di Musim Kemarau",
  },
  {
    imageSrc: "/images/imagecard/bapak-dan-kambing.jpg",
    caption: "Mengembala Kambing",
  },
  {
    imageSrc: "/images/imagecard/pembelajaran-tk-budi-lestari.jpg",
    caption: "Pembelajaran di TK Budi Lestari",
  },
];


function Galeri() {
  return (
    <div>
      <Navbar />
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          GALERI - DESA NGABLAK
        </h1>
        <hr className="mx-32 mt-3" />
      </div>

      <div id="gallery">
        <div id="carousel" className="mt-10 flex justify-center">
          <GalleryCarousel images={images} />
        </div>
      </div>

      <hr className="mt-10" />

      <div
        id="description"
        className="mx-10 mt-10 border border-black px-10 py-5 rounded-lg shadow-lg text-justify"
      >
        Desa Ngablak, Kecamatan Wonosamodro, Kabupaten Boyolali dikenal dengan
        berbagai kegiatan seperti pertanian, peternakan, dan kerajinan tangan.
        Masyarakat desa aktif dalam mengelola sawah dan kebun, serta
        menghasilkan produk lokal yang berkualitas. Selain itu, terdapat
        kegiatan budaya dan tradisional yang sering diadakan untuk melestarikan
        adat dan mempererat hubungan antarwarga.
      </div>
      <div
        id="imageCardList"
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10"
      >
        {imageCards.map((card, index) => (
          <a
            key={index}
            href={card.imageSrc}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageCard imageSrc={card.imageSrc} caption={card.caption} />
          </a>
        ))}
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Galeri;
