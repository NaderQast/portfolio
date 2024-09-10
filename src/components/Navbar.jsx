import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookSquare, FaLinkedinIn} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Links } from "../constants/index";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-centre justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="lg:m-8 md:m-5 sm:m-3" src={logo} alt="logo"></img>
      </div>

      <div className="flex m-8 gap-4 items-center justify-between py-6 text-4xl text-gray-300">
        <a href={Links.github} ><FaGithub /></a>
        <a href={Links.linkedin} target="_blank"><FaLinkedinIn /></a>
        <a href={Links.facebook} target="_blank" ><FaFacebookSquare /></a>
      </div>
    </nav>
  );
};

export default Navbar;
