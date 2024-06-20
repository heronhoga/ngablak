import React from "react";
import Header from "./created-components/Header";
import Navbar from "./created-components/Navbar";
import Carousel from "./created-components/Carousel";
import Image from "next/image";

function Home() {
  const images = [
    "/images/carousel/carousel1.jpg",
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel3.jpg",
  ];

  return (
    <div>
      {/* //HEADER */}
      <Header />

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
        <hr className="mx-5 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-5 mt-3" />

        {/* CAROUSEL AND TEXT */}
        <div className="grid grid-cols-1 gap-3 px-3 mt-10 xl:grid-cols-2">
          <div className="w-72 mx-auto sm:w-[500px] md:w-[700px] xl:w-[550px]">
            <Carousel images={images} />
          </div>
          <div className="text-justify mt-3 xl:mr-16">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sit voluptas recusandae ratione asperiores quam quisquam maiores
              natus accusantium voluptates doloremque, neque corporis inventore
              temporibus laborum perferendis autem quas quibusdam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Expedita esse amet
              cumque iste, nihil nisi et. Tempora, earum. Laudantium aliquam
              voluptas quibusdam dolore eveniet soluta? Dolorum ea animi
              consequatur esse. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error magni quis soluta, quos porro, tenetur
              laborum id voluptates, repellendus maiores quia pariatur fugit
              illum inventore ab sint excepturi corrupti. Et! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sunt voluptates dolore,
              doloremque atque sit ullam nisi quaerat quos voluptatibus ipsa
              animi qui nihil architecto eveniet quia vitae, aut officia
              aperiam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem nostrum autem enim, non facilis dolore, accusamus,
              temporibus dignissimos nisi labore esse reprehenderit odit
              praesentium? Exercitationem voluptas similique harum. Sint,
              veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
