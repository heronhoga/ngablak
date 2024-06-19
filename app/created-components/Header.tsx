import React from "react";
import FiGlobe from "../icons/globe";
import AiOutlinePhone from "../icons/phone";
import AiOutlineMail from "../icons/email";
function Header() {
  return (
    <div>
      <div
        id="header"
        className="flex flex-col justify-center md:flex-row md:justify-start items-start md:items-center bg-blue-500 text-white p-2"
      >
        <div className="flex items-center space-x-1 mb-2 md:mb-0 md:mx-3">
          <FiGlobe className="text-xl" />
          <h3 className="text-sm md:text-md lg:text-lg">ngablak.vercel.app</h3>
        </div>
        <div className="flex items-center space-x-1 mb-2 md:mb-0 md:mx-3">
          <AiOutlinePhone className="text-xl" />
          <h3 className="text-sm md:text-md lg:text-lg">08-xxxx-xxxx</h3>
        </div>
        <div className="flex items-center space-x-1 md:mx-3">
          <AiOutlineMail className="text-xl" />
          <h3 className="text-sm md:text-md lg:text-lg">ngablak@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;