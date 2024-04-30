import React from "react";
import {HERO_CONTENT} from "../constants/index";
import p1 from '../assets/p1.jpg'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-4xl font-thin lg-mt-16 lg:text-6xl">
              Nader Al-Quwatli
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Junior WEB Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
            <img className="rounded-lg bg-transparent mb-auto" src={p1} alt="" ></img>
            </div>
      

        </div>
      </div>
    </div>
  );
};

export default Hero;
