import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="container w-full p-2 py-20 pt-40 mx-auto text-center lg:max-w-7xl">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#fff]">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-[#fff]">
            Hi, I&#39;m <span className="text-[#51e5e5]"> Bilal Asghar</span>
          </h1>
          <h1 className="py-2 text-[#fff]">A Front-End Web Developer</h1>
          <p className="py-4 text-[#fff] sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/bilal-asghar-ba4699164/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in bg-[#fff] rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Bilal1200"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full bg-[#fff]  shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="p-6 duration-300 ease-in rounded-full bg-[#fff]  shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="p-6 duration-300 ease-in rounded-full bg-[#fff]  shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
