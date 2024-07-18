import React from "react";
import { FiGlobe } from "react-icons/fi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

function Footer() {
  return (
    <div
      id="footer"
      className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-4"
    >
      <div className="flex flex-col justify-center items-center md:items-start space-y-2">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
          <div className="flex items-center space-x-1">
            <AiOutlinePhone className="text-xl" />
            <h3 className="text-sm md:text-md">08-xxxx-xxxx</h3>
          </div>
          <div className="flex items-center space-x-1">
            <AiOutlineMail className="text-xl" />
            <h3 className="text-sm md:text-md">ngablak@gmail.com</h3>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-1">
          <Image
            alt="kabupaten"
            src={`/images/logo-kabupaten.png`}
            width={448}
            height={682}
            className="h-12 w-[40px] md:h-20 md:w-[64px]"
          />
          <br />
          <div id="text" className="text-center md:text-left">
            <p className="text-sm font-bold">Desa Ngablak</p>
            <p className="text-sm font-bold">Kec. Wonosamodro</p>
            <p className="text-sm font-bold">Kab. Boyolali</p>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-gradient-to-r from-blue-900 to-cyan-700 text-white p-4">
        <p>Copyright &copy; 2024. Developed by Tim II KKN Desa Ngablak 2024</p>
      </div>
    </div>
  );
}

export default Footer;
