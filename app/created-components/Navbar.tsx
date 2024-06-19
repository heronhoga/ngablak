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
    <div className="py-2 flex items-center justify-between bg-blue-950 font-semibold rounded-b-[2.5rem] shadow-sm md:shadow-lg text-sm md:text-lg lg:text-xl text-white">
      <div className="flex items-center">
        <Image
          src="/images/logo-kabupaten.png"
          alt="Logo"
          width={448}
          height={682}
          className="h-12 w-20 md:h-24 md:w-40"
        />
        <h1 className="ml-2 md:ml-4">DESA NGABLAK</h1>
      </div>
      <div className="hidden xl:flex">
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
        <Link href="/kontak" className="ml-1 mr-1 md:ml-3 md:mr-10">
          Kontak Kami
        </Link>
      </div>
      <div className="xl:hidden mr-8 z-10" onClick={toggleMenu}>
        {isOpen ? <Close size={24} /> : <GiHamburgerMenu size={24} />}
      </div>
      {isOpen && (
        <div className="flex flex-col xl:hidden absolute top-16 md:top-10 lg:top-11 left-0 w-full bg-blue-950 z-0">
          <Link href="/" className="m-3" onClick={toggleMenu}>
            Beranda
          </Link>
          <Link href="/profil" className="m-3" onClick={toggleMenu}>
            Profil Desa
          </Link>
          <Link href="/berita" className="m-3" onClick={toggleMenu}>
            Berita
          </Link>
          <Link href="/kelembagaan" className="m-3" onClick={toggleMenu}>
            Kelembagaan
          </Link>
          <Link href="/pemberdayaan" className="m-3" onClick={toggleMenu}>
            Pemberdayaan
          </Link>
          <Link href="/layanan" className="m-3" onClick={toggleMenu}>
            Layanan
          </Link>
          <Link href="/kontak" className="m-3" onClick={toggleMenu}>
            Kontak Kami
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
