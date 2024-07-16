import React from "react";
import Navbar from "../created-components/Navbar";
import Footer from "../created-components/Footer";

function Kontak() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* TITLE */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          HUBUNGI KAMI
        </h1>
        <hr className="mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-32 mt-3" />
      </div>

      <div
        id="contact"
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div
          id="contactBox"
          className="border border-black rounded-lg p-5 shadow-lg mx-5"
        >
          <p className="font-bold">Desa Ngablak</p>
          <hr className="my-3" />
          <p>
            Jl. Suruh Wonosegoro, Dusun III, Ngablak, Kec. Wonosegoro, Kabupaten
            Boyolali, Jawa Tengah 57382
          </p>
          <hr className="my-3" />
          <p>Telp. 0813 1234 5678</p>
          <p>Email. 4lqzj@example.com</p>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13947.473675569145!2d110.61416596290738!3d-7.32679669434537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a75d712309577%3A0xbbd3d826c3eeab2e!2sNgablak%2C%20Wonosegoro%2C%20Boyolali%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1719385360662!5m2!1sen!2sid"
              width="400"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-64 sm:w-96 md:w-[450px] md:h-[400px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Kontak;
