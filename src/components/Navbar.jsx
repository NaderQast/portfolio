import logo from "../assets/logo.png";
import { FaLinkedinIn} from "react-icons/fa";
import { FaTwitterSquare} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-centre justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="" src={logo} alt="logo"></img>
      </div>

      <div className="flex m-8 gap-4 items-center justify-between py-6 text-4xl text-gray-300">
        <FaGithub />
        <FaLinkedinIn />
        <FaTwitterSquare />
      </div>
    </nav>
  );
};

export default Navbar;
