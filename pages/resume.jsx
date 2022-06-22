import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Bilal Asghar | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in Software Engineering."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Bilal Asghar</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/bilal-asghar-ba4699164/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Bilal1200"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React js
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> MongoDB
            <span className="px-2">|</span> Next js
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Reactiv Space (A block Chain Devlopement Company)
            </span>
            <span className="px-2">|</span>Bahria Town phase 4
          </p>
          <p className="py-1 italic">
            Software Engineer ( Dec, 2021 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Next js ,React js, Bootstrap , Tailwind technologies use for web
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Greenvalley</span>
            <span className="px-2">|</span>Bahria town pahse 7
          </p>
          <p className="py-1 italic">IT Assistant ( june,2020 - dec,2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Serving as the first point of contact for end-user support of
              computer systems/networks on a routine basis. Managing daily
              activities of local network systems and perform diagnostics.
            </li>
            <li>
              Responsible for installation, administration, and testing of
              operating systems, software, cabling, and other related network
              components/equipment under the guidance of team lead.
            </li>
            <li>
              Maintaining records of work completed and in progress. Completed
              troubleshooting and repair when computers had problems
            </li>
            <li>Assisted office staff with computer application questions</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Shifa international hospital</span>
            <span className="px-2">|</span>Islamabad
          </p>
          <p className="py-1 italic">Sfotware Engineer (internee) (Aug, 2019 - Dec, 2019 )</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Get Training in devlopement feild 
              Technlogies include (python ,machine learning , Data Science)
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
