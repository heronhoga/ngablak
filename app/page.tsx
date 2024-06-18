import React from "react";
import Image from "next/image";
import FiGlobe from "./icons/globe"
import AiOutlinePhone from "./icons/phone"
import AiOutlineMail from "./icons/email"
function Home() {
  return (
    <div>
      {/* //HEADER */}
      <div id="header" className="">
        <FiGlobe />
        <h3>ngablak.vercel.app</h3>
        <AiOutlinePhone />
        <h3>08-xxxx-xxxx</h3>
        <AiOutlineMail />
        <h3>ngablak@gmail.com</h3>
      </div>

      {/* CONTENT */}
      {/* <div>
        <Image src="/images/scenery.jpg" alt="ngablak" width={1920} height={1080}></Image>
      </div> */}
    </div>
  );
}

export default Home;
