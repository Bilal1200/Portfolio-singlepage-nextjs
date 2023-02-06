import React from "react";
import Image from "next/image";
import Link from "next/link";
 const About = () => {
  return (
    <div id="about" className="container w-full p-2 py-10 mx-auto my-20 lg:max-w-7xl">
      <div className="grid-cols-3 gap-8 m-auto md:grid">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[30px] font-bold text-[#fff]">
            About
          </p>
          <h2 className="py-4 text-[#fff]">Who I Am</h2>
          <p className="py-2 text-[#fff]">I am a frontend developer</p>
          <p className="py-2 text-[#fff]">
            Hi, I am an Experienced Full stack Developer. My main focus is to
            provide you with the perfect website according to your imagination
            and to make sure you are highly satisfied with the web
            design/layout. I use all the latest technology like HTML5, CSS3,
            JavaScript, jQuery and bootstrap, Nextjs ,Node JS, React etc. to
            provide you with a responsive and fully functional website
            compatible with all types of browsers. So YES you are at the right
            place, Looking forward to hearing from you
          </p>
           <Link href="/#projects">
            <p className="py-2 text-[#fff] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-2 m-auto duration-300 ease-in bg-[#fff] shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
