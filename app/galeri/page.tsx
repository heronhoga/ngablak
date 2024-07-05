import React from "react";
import Navbar from "../created-components/Navbar";
import GalleryCarousel from "../created-components/GalleryCarousel";

// CAROUSEL PHOTOS
const images = [
  { image: "/images/gallery/GallCarousel1.jpg" },
  { image: "/images/gallery/GallCarousel2.jpg" },
  { image: "/images/gallery/GallCarousel3.jpg" },
];

function Galeri() {
  return (
    <div>
      <Navbar />
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          GALERI
        </h1>
        <hr className="mx-32 mt-3" />
      </div>

      <div id="gallery">
        <div id="carousel" className="mt-10 flex justify-center">
          <GalleryCarousel images={images} />
        </div>
      </div>
    </div>
  );
}

export default Galeri;
