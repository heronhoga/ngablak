import React from "react";
import Navbar from "@/app/created-components/Navbar";
import Image from "next/image";
import Footer from "@/app/created-components/Footer";

function Article1() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      <hr className="my-10" />

      {/* ARTICLE INFORMATION */}
      <div id="articleInformation">
        <h1 className="mx-5 font-bold italic text-2xl md:text-3xl lg:text-4xl">
          Artikel 1
        </h1>
        <h2 className="mt-3 mx-5 text-sm md:text-lg lg:text-xl">
          Abdul A, <span className="italic">13 Juli 2022</span>
        </h2>
        <hr className="ml-5 mt-3 mr-[75%]" />
      </div>

      {/* ARTICLE PHOTO */}
      <div
        id="imageWrapper"
        className="flex justify-center items-center mt-10 h-full m-10 md:mx-20 lg:mx-32"
      >
        <img
          src="https://placehold.co/1920x1080/png"
          alt="Article Image"
          className="max-w-full h-auto"
        />
      </div>

      {/* ARTICLE PARAGRAPH */}
      <div id="articleParagraph" className="mt-10 mx-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente
        eum similique veniam sint fuga dicta alias repellat officia atque,
        consectetur suscipit rem ipsa necessitatibus id neque? Eveniet, eum
        impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae ullam dignissimos accusantium, perferendis quod harum eos
        facilis deleniti? Voluptas veniam quis eveniet incidunt laboriosam neque
        nisi beatae repellat non quia? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi possimus veniam id laborum tempore eius
        harum dolore nam. Explicabo est praesentium dolorum deleniti iusto
        accusantium soluta sunt exercitationem laboriosam tempore. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Eos optio cupiditate
        dolorum, quae aperiam ex, temporibus adipisci sint minima debitis ullam,
        ipsum iusto enim! Ratione odit molestiae nobis voluptates inventore!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        placeat natus nobis maiores fugiat vel, illum voluptatem, obcaecati sed
        quia impedit alias reiciendis cum accusamus earum excepturi corporis
        voluptatibus odit. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Eos quisquam tempore eaque? Autem rerum ex totam, ad quam
        asperiores assumenda commodi laudantium? Quidem repellat et distinctio
        veniam facilis animi perspiciatis. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Ea ad odit voluptatum minus labore
        officiis perspiciatis placeat, totam quisquam maiores magnam doloremque
        fuga, iste doloribus maxime quos fugiat laboriosam nostrum? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Odit, debitis beatae culpa
        velit nisi aliquam? Minima illo ipsa soluta quidem est explicabo
        similique, sit, impedit eum suscipit ex saepe? Minima.
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Article1;
