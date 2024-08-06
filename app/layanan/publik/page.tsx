import React from "react";
import Navbar from "@/app/created-components/Navbar";
import Footer from "@/app/created-components/Footer";
import publicServices from "../../data/layanan-publik";

function ServiceNav() {
  return (
    <nav className="mt-10 mb-8 text-center text-[10px] md:text-base">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {publicServices.map((service, index) => (
          <a
            key={index}
            href={`#service-${index}`}
            className="block mx-1 text-black hover:underline border border-black rounded-lg p-3"
          >
            {service.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Publik() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Navbar />
      <div className="flex-grow p-4">
        {/* TITLE */}
        <div id="title" className="mt-10 text-center">
          <h1 className="font-bold italic text-2xl md:text-3xl lg:text-4xl">
            LAYANAN MASYARAKAT - DESA NGABLAK
          </h1>
          <hr className="mx-auto mt-3 w-3/4 md:w-1/2 lg:w-1/3" />
          <h2 className="mt-3 text-sm md:text-lg lg:text-xl">
            Kecamatan Wonosamodro, Kabupaten Boyolali
          </h2>
          <hr className="mx-auto mt-3 w-3/4 md:w-1/2 lg:w-1/3" />
        </div>

        {/* SERVICE NAVIGATION */}
        <ServiceNav />

        {publicServices.map((service, serviceIndex) => (
          <div key={serviceIndex} id={`service-${serviceIndex}`} className="mb-6 scroll-mt-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center mt-3">{service.name}</h2>
            <hr className="my-3" />
            {service.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="mb-4 p-4 border border-black rounded-lg shadow-sm mx-auto max-w-full md:max-w-2xl lg:max-w-3xl"
              >
                <h3 className="text-[11px] md:text-xl lg:text-2xl font-semibold mb-2">{section.name}</h3>
                <h4 className="font-semibold">Persyaratan:</h4>
                <ul className="list-disc list-inside">
                  {section.requirements.map((requirement) => (
                    <li key={requirement.id}>{requirement.description}</li>
                  ))}
                </ul>
                {section.catatan && (
                  <div className="mt-2">
                    <h4 className="font-semibold">Catatan:</h4>
                    <ul className="list-disc list-inside">
                      {section.catatan.map((note, noteIndex) => (
                        <li key={noteIndex}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Publik;
