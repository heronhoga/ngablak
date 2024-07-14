"use client";
import React, { useState } from "react";
import Link from "next/link";
import Close from "../icons/close";
import GiHamburgerMenu from "../icons/hamburger";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 py-2 flex items-center justify-between bg-blue-950 font-semibold rounded-b-[2.5rem] shadow-sm md:shadow-lg text-sm md:text-lg lg:text-xl text-white z-20">
      <div className="flex items-center">
        <Image
          src="/images/logo-kabupaten.png"
          alt="Logo"
          width={448}
          height={682}
          className="h-12 w-[40px] md:h-24 md:w-[80px] mx-4"
        />
        <h1 className="ml-2 md:ml-4">DESA NGABLAK</h1>
      </div>
      <div className="hidden xl:flex">
        <Link href="/" className="mx-1 md:mx-3">
          Beranda
        </Link>
        <Link href="/galeri" className="mx-1 md:mx-3">
          Galeri
        </Link>
        <Link href="/struktur" className="mx-1 md:mx-3">
          Struktur Organisasi
        </Link>
        <Link href="/layanan" className="mx-1 md:mx-3">
          Layanan
        </Link>
        <Link href="/artikel" className="mx-1 md:mx-3">
          Artikel
        </Link>
        <Link href="/kontak" className="ml-1 mr-1 md:ml-3 md:mr-10">
          Kontak Kami
        </Link>
      </div>
      <button
        className="xl:hidden mr-8 z-30 focus:outline-none"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {isOpen ? <Close size={24} /> : <GiHamburgerMenu size={24} />}
      </button>
      <div
        className={`flex flex-col xl:hidden absolute top-0 left-0 w-full bg-blue-950 z-10 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ paddingTop: "4rem" }}
      >
        <Link href="/" className="m-3" onClick={toggleMenu}>
          Beranda
        </Link>
        <Link href="/galeri" className="m-3" onClick={toggleMenu}>
          Galeri
        </Link>
        <Link href="/struktur" className="m-3" onClick={toggleMenu}>
          Struktur Organisasi
        </Link>
        <Link href="/layanan" className="m-3" onClick={toggleMenu}>
          Layanan
        </Link>
        <Link href="/artikel" className="m-3">
          Artikel
        </Link>
        <Link href="/kontak" className="m-3" onClick={toggleMenu}>
          Kontak Kami
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
