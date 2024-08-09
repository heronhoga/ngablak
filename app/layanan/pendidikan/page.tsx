"use client";
import React, { useState } from "react";
import Navbar from "@/app/created-components/Navbar";
import Footer from "@/app/created-components/Footer";
import { pendidikanData, ModalContent } from "../../data/pendidikan";

function Pendidikan() {
  const [activeSection, setActiveSection] = useState("formal");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const handleModalToggle = (content: ModalContent | null) => {
    setModalContent(content);
    setShowModal(content !== null);
  };

  const handleImageClick = (imageUrl: string) => {
    setPopupImage(imageUrl);
    setShowImagePopup(true);
  };

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
        <div id="pendidikan-formal" className="mt-10 text-center">
          <hr className="mb-10" />
          <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
            PENDIDIKAN FORMAL
          </h1>
          <hr className="mt-10" />

          {pendidikanData.formal.map((item, index) => (
            <div
              key={index}
              id="formalList"
              className="mx-10 mt-10 border border-slate-700 rounded-lg p-4"
            >
              <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.nama}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(item.imageUrl)}
                />
                <div className="mt-4 lg:mt-0 lg:ml-4 text-center lg:text-left">
                  <p className="text-lg font-semibold">{item.nama}</p>
                  <p className="mt-2 text-base text-gray-600">
                    {item.description}
                  </p>
                  <button
                    className="bg-blue-500 text-white p-2 rounded-lg mt-10 lg:mt-6"
                    onClick={() => handleModalToggle(item)}
                  >
                    Informasi
                  </button>
                </div>
              </div>
            </div>
          ))}

          {showModal && modalContent && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
              <div className="relative top-1/4 mx-auto p-2 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Informasi Pendidikan - {modalContent.nama}
                  </h3>
                  <hr className="my-3" />
                  <div className="mt-2 text-left">
                    <p>
                      <span className="font-semibold italic">Nama SD</span> :{" "}
                      {modalContent.nama}
                    </p>
                    <p>
                      <span className="font-semibold italic">Alamat</span> :{" "}
                      {modalContent.alamat}
                    </p>
                    <p>
                      <span className="font-semibold italic">
                        Kepala Sekolah
                      </span>
                       : {modalContent.kepalaSekolah}
                    </p>
                    <p>
                      <span className="font-semibold italic">
                        Jumlah Tenaga Pendidik
                      </span>
                       : {modalContent.tenagaPendidik}
                    </p>
                    {modalContent.ekstra && (
                      <p>
                        <span className="font-semibold italic">Ekstra</span> :{" "}
                        {modalContent.ekstra}
                      </p>
                    )}
                    {modalContent.prestasi && (
                      <p>
                        <span className="font-semibold italic">Prestasi</span> :{" "}
                        {modalContent.prestasi}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold italic">Jumlah Murid</span>
                       : {modalContent.jumlahMurid}
                    </p>
                    {modalContent.fasilitas && (
                      <p>
                        <span className="font-semibold italic">Fasilitas</span> :{" "}
                        {modalContent.fasilitas}
                      </p>
                    )}
                  </div>
                  <div className="items-center px-4 py-3">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700"
                      onClick={() => handleModalToggle(null)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showImagePopup && popupImage && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
              <div className="relative mx-auto p-5 border shadow-lg rounded-md bg-white">
                <img
                  src={popupImage}
                  alt="Popup"
                  className="max-w-full h-auto rounded-lg"
                />
                <div className="text-center mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700"
                    onClick={() => setShowImagePopup(false)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeSection === "nonformal" && (
        <div id="pendidikan-nonformal" className="mt-10 text-center">
          <hr className="mb-10" />
          <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
            PENDIDIKAN NON-FORMAL
          </h1>
          <hr className="mt-10" />

          {pendidikanData.nonFormal.map((item, index) => (
            <div
              key={index}
              id="nonformalList"
              className="mx-10 mt-10 border border-slate-700 rounded-lg p-4"
            >
              <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.nama}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(item.imageUrl)}
                />
                <div className="mt-4 lg:mt-0 lg:ml-4 text-center lg:text-left">
                  <p className="text-lg font-semibold">{item.nama}</p>
                  <p className="mt-2 text-base text-gray-600">
                    {item.description}
                  </p>
                  <button
                    className="bg-blue-500 text-white p-2 rounded-lg mt-10 lg:mt-6"
                    onClick={() => handleModalToggle(item)}
                  >
                    Informasi
                  </button>
                </div>
              </div>
            </div>
          ))}

          {showModal && modalContent && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
              <div className="relative top-1/4 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Informasi Pendidikan - {modalContent.nama}
                  </h3>
                  <hr className="my-3" />
                  <div className="mt-2 text-left">
                    <p>
                      <span className="font-semibold italic">Nama TPQ</span>:{" "}
                      {modalContent.nama}
                    </p>
                    <p>
                      <span className="font-semibold italic">Alamat</span>:{" "}
                      {modalContent.alamat}
                    </p>
                    <p>
                      <span className="font-semibold italic">
                        Kepala Sekolah
                      </span>
                      : {modalContent.kepalaSekolah}
                    </p>
                    <p>
                      <span className="font-semibold italic">
                        Jumlah Tenaga Pendidik
                      </span>
                      : {modalContent.tenagaPendidik}
                    </p>
                    {modalContent.ekstra && (
                      <p>
                        <span className="font-semibold italic">Ekstra</span>:{" "}
                        {modalContent.ekstra}
                      </p>
                    )}
                    {modalContent.prestasi && (
                      <p>
                        <span className="font-semibold italic">Prestasi</span>:{" "}
                        {modalContent.prestasi}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold italic">Jumlah Murid</span>
                      : {modalContent.jumlahMurid}
                    </p>
                    {modalContent.fasilitas && (
                      <p>
                        <span className="font-semibold italic">Fasilitas</span>:{" "}
                        {modalContent.fasilitas}
                      </p>
                    )}
                  </div>
                  <div className="items-center px-4 py-3">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700"
                      onClick={() => handleModalToggle(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showImagePopup && popupImage && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
              <div className="relative mx-auto p-5 border shadow-lg rounded-md bg-white">
                <img
                  src={popupImage}
                  alt="Popup"
                  className="max-w-full h-auto rounded-lg"
                />
                <div className="text-center mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700"
                    onClick={() => setShowImagePopup(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
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
