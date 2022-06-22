import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/Skills/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am a frontend developer</p>
          <p className="py-2 text-gray-600">
            Hi, I am an Experienced Full stack Developer. My main focus is to
            provide you with the perfect website according to your imagination
            and to make sure you are highly satisfied with the web
            design/layout. I use all the latest technology like HTML5, CSS3,
            JavaScript, jQuery and bootstrap, Nextjs ,Node JS, React etc. to
            provide you with a responsive and fully functional website
            compatible with all types of browsers. So YES you are at the right
            place, Looking forward to hearing from you
          </p>
          {/* <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p> */}
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
