import React from "react";
import Header from "./created-components/Header";
import Navbar from "./created-components/Navbar";

function Home() {
  return (
    <div>
      {/* //HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      {/* <div>
        <Image src="/images/scenery.jpg" alt="ngablak" width={1920} height={1080}></Image>
      </div> */}
    </div>
  );
}

export default Home;
