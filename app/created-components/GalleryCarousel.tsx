"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageObject {
  image: string;
}

interface GalleryCarouselProps {
  images: ImageObject[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-64 sm:w-[420px] md:w-[650px] lg:w-[900px] xl:w-[1150px] max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgObj, index) => (
          <img key={index} src={imgObj.image} alt={`Image ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-80"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-80"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default GalleryCarousel;
