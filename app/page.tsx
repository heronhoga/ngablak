import React from "react";
import Navbar from "./created-components/Navbar";
import Carousel from "./created-components/Carousel";
import Image from "next/image";
import Link from "next/link";
import Footer from "./created-components/Footer";

function Home() {
  const images = [
    "/images/carousel/carousel1.jpg",
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel3.jpg",
  ];

  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          PROFIL
        </h1>
        <h1 className="text-center font-bold italic text-3xl md:text-4xl lg:text-5xl">
          DESA NGABLAK
        </h1>
        <hr className="mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-32 mt-3" />
      </div>
      {/* CAROUSEL AND TEXT */}
      <div className="grid grid-cols-1 gap-3 px-3 mt-10 xl:grid-cols-2">
        <div className="w-64 mx-auto sm:w-[500px] md:w-[700px] xl:w-[550px]">
          <Carousel images={images} />
        </div>
        <div className="text-justify mt-3 xl:mr-16">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
            voluptas recusandae ratione asperiores quam quisquam maiores natus
            accusantium voluptates doloremque, neque corporis inventore
            temporibus laborum perferendis autem quas quibusdam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Expedita esse amet
            cumque iste, nihil nisi et. Tempora, earum. Laudantium aliquam
            voluptas quibusdam dolore eveniet soluta? Dolorum ea animi
            consequatur esse. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error magni quis soluta, quos porro, tenetur laborum id
            voluptates, repellendus maiores quia pariatur fugit illum inventore
            ab sint excepturi corrupti. Et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt voluptates dolore, doloremque
            atque sit ullam nisi quaerat quos voluptatibus ipsa animi qui nihil
            architecto eveniet quia vitae, aut officia aperiam? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Dolorem nostrum autem
            enim, non facilis dolore, accusamus, temporibus dignissimos nisi
            labore esse reprehenderit odit praesentium? Exercitationem voluptas
            similique harum. Sint, veritatis.
          </p>
        </div>
      </div>

      <hr className="mt-10" />

      <hr className="mt-10 mx-32" />
      <div id="title" className="mt-3">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          AKTIVITAS
        </h1>
        <hr className="mx-32 mt-3" />
      </div>

      {/* KEGIATAN */}
      <div id="card-list" className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            id="farm-card"
            className="shadow-md h-64 w-72 sm:w-96 md:w-72 xl:w-[390px] relative overflow-hidden mx-auto rounded-xl"
          >
            <Image
              src="/images/activitycard/farming.jpg"
              layout="fill"
              objectFit="cover"
              alt="Farming"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2 italic">
              Pertanian
            </div>
          </div>
          <div
            id="organization-card"
            className="shadow-md h-64 w-72 sm:w-96 md:w-72 xl:w-[390px] relative overflow-hidden mx-auto rounded-xl"
          >
            <Image
              src="/images/activitycard/organization.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Organization"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2 italic">
              Organisasi
            </div>
          </div>
          <div
            id="religion-card"
            className="shadow-md h-64 w-72 sm:w-96 md:w-72 xl:w-[390px] mx-auto relative overflow-hidden rounded-xl md:col-span-2 lg:col-span-1"
          >
            <Image
              src="/images/activitycard/religion.jpg"
              layout="fill"
              objectFit="cover"
              alt="Religion"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2 italic">
              Keagamaan
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTON TO GALLERY */}
      <div className="mt-10 flex justify-center">
        <div
          id="link-wrapper"
          className="border inline-block border-black px-3 py-1 rounded-md shadow-lg"
        >
          <Link href="/galeri" className="italic font-semibold">
            Lihat galeri lainnya
          </Link>
        </div>
      </div>

      <hr className="mt-10" />

      <hr className="mt-10 mx-32" />
      <div id="title" className="mt-3">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          LOKASI
        </h1>
        <hr className="mx-32 mt-3" />
      </div>

      {/* MAP DAN INFORMASI LOKASI */}
      <div id="location" className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13947.473675569145!2d110.61416596290738!3d-7.32679669434537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a75d712309577%3A0xbbd3d826c3eeab2e!2sNgablak%2C%20Wonosegoro%2C%20Boyolali%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1719385360662!5m2!1sen!2sid"
              width="400"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="w-64 h-64 sm:w-96 md:w-[450px] md:h-[400px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <hr className="mt-3 mx-8 lg:hidden" />
          <div className="mx-8">
            <div className="grid grid-cols-1 border p-5 border-black rounded-lg shadow-md">
              <div>
                <p>
                  <span className="font-semibold italic">
                    Alamat Kantor desa
                  </span>{" "}
                  : asdasdasd
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold italic">Koordinat Desa</span> :
                  -7.32679669434537, 110.61416596290738
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold italic">Luas Wilayah</span> :
                  0.0 ha
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      <div id="footer" className="mt-10">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
