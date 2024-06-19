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
    <div className="py-2 after:font-semibold flex items-center justify-between bg-blue-950 font-semibold rounded-b-[2.5rem] shadow-sm md:shadow-lg text-sm md:text-lg lg:text-2xl text-white">
      <div className="flex items-center">
        <Image
          src="/images/logo-kabupaten.png"
          alt="Logo"
          width={961}
          height={682}
          className="h-12 w-20 md:h-24 md:w-40"
        ></Image>
        <div className="hidden md:flex">
          <h1>DESA NGABLAK</h1>
          <Link href="/" className="mx-1 md:mx-3">
            Beranda
          </Link>
          <Link href="/profil" className="mx-1 md:mx-3">
            Profil Desa
          </Link>
          <Link href="/berita" className="mx-1 md:mx-3">
            Berita
          </Link>
          <Link href="/kelembagaan" className="mx-1 md:mx-3">
            Kelembagaan
          </Link>
          <Link href="/pemberdayaan" className="mx-1 md:mx-3">
            Pemberdayaan
          </Link>
          <Link href="/layanan" className="mx-1 md:mx-3">
            Layanan
          </Link>
          <Link href="/kontak" className="mx-1 md:mx-3">
            Kontak Kami
          </Link>
        </div>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <Close size={24} /> : <GiHamburgerMenu size={24} />}
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden">
          <Link href="/" className="my-2" onClick={toggleMenu}>
            Beranda
          </Link>
          <Link href="/profil" className="my-2" onClick={toggleMenu}>
            Profil Desa
          </Link>
          <Link href="/berita" className="my-2" onClick={toggleMenu}>
            Berita
          </Link>
          <Link href="/kelembagaan" className="my-2" onClick={toggleMenu}>
            Kelembagaan
          </Link>
          <Link href="/pemberdayaan" className="my-2" onClick={toggleMenu}>
            Pemberdayaan
          </Link>
          <Link href="/layanan" className="my-2" onClick={toggleMenu}>
            Layanan
          </Link>
          <Link href="/kontak" className="my-2" onClick={toggleMenu}>
            Kontak Kami
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
