import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type Props = {
  projectName: string;
  projectDesc: string;
  projectImage: string;
  projectLink: string;
  gitHubLink: string;
  showGithubRepo: Boolean;
};

const ProjectCard = (props: Props) => {
  return (
    <motion.article
      initial={{
        x: 100,
        y: 100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      // viewport={{ once: true }}
      // className="group antialiased flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 flex-grow-0 sm:w-96 p-10 md:p-2 bg-[#292929] w-fit  max-h-[650px] min-h-[550px] cursor-default"
    >
      {/* compony logo */}
      {/* <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Image
            src={props.logo}
            alt="company logo"
            className="w-12 h-12 rounded-full xl:w-[50px] xl:h-[50px] object-cover object-center mt-4 group-hover:scale-125 group-hover:drop-shadow-[0_0px_15px_#ffffff2f] transition ease-in-out duration-300 border-2"
            width={200}
            height={200}
            priority={true}
          />
        </motion.div> */}

      <div className="relative flex flex-col my-6 bg-gray-800 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md bg-white">
          <Image 
            src={props.projectImage} 
            alt="card-image"  
            className="w-full h-full object-contain p-1"
            width={400}
            height={224}
            priority={true}
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-white-600 text-xl font-semibold">
            {props.projectName}
          </h6>
          <p className="text-white-100 leading-normal font-light">
            {props.projectDesc}
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <a
              href={props.projectLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              <span>Live Demo</span>
            </a>
          </button>
          {props.showGithubRepo && (
            <button
              className="rounded-md  py-2 px-4 border border-gray-300 text-center text-sm text-gray-900 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-2"
              type="button"
            >
              <a className="flex items-center">
                <Github className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </a>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
