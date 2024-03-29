/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { trabajos } from "./trabajos";
import { motion } from "framer-motion";

import Link from "next/link";

type Props = {};

let name = "";
let url = "";
let tech = "";
let resume = "";

function Projects({}: Props) {
  trabajos.slice(0, trabajos.length).map((trabajo, i) => {
    name = trabajo.nombre;
    url = trabajo.url;
    tech = trabajo.tecnologias;
    resume = trabajo.descripcion;
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="space-y-4 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl text-center hidden xl:block">
        Proyectos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 dark:scrollbar-thumb-[#F7AB0A]/80 dark:scrollbar-track-gray-800 scrollbar-thumb-blue-500">
        {/* Projects */}
        {trabajos.map((trabajo, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Link href={trabajo.url} target="_blank">
              <img className="max-h-40 " src={`/${trabajo.id}.jpg`} alt="" />
            </Link>
            <div className="space-y-4 px-0 md:px-10 max-w-6xl">
              <Link href={trabajo.url} target="_blank">
                <h4 className="underline decoration-blue-500 dark:decoration-secondary/50 text-4xl font-semibold text-center">
                  Proyecto {i + 1} de {trabajos.length}
                </h4>
              </Link>
              <h5 className="text-center text-2xl font-semibold text-blue-500 dark:text-gray-400">
                {trabajo.tecnologias}
              </h5>
              <p className="p-4 px-8 bg-[#fff] dark:bg-[#242424] dark:text-white rounded-full text-center text-md md:text-left">
                {trabajo.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] dark:bg-[#F7AB0A]/10 bg-blue-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
