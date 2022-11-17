/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Proyectos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projects */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src="/project1.jpg"
            alt=""
            style={{ height: "375px", width: "666px" }}
          />
          <div>
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Proyecto 1 de 5
              </span>{" "}
            </h4>
            <p className="text-lg mt-5 text-center md:text-left">
              Aplicación que muestra las películas más populares y nos muestra
              la imagen de portada, puntuación en imdb y la sinospsis. Además se
              puede realizar una búsqueda entre todas las películas.
            </p>
          </div>
        </div>
        {/* PROJECT */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src="/project1.jpg"
            alt=""
            style={{ height: "375px", width: "666px" }}
          />
          <div>
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Proyecto 2 de 5
              </span>{" "}
            </h4>
            <p className="text-lg mt-5 text-center md:text-left">
              Aplicación que muestra las películas más populares y nos muestra
              la imagen de portada, puntuación en imdb y la sinospsis. Además se
              puede realizar una búsqueda entre todas las películas.
            </p>
          </div>
        </div>
        {/* Projects */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src="/project1.jpg"
            alt=""
            style={{ height: "375px", width: "666px" }}
          />
          <div>
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Proyecto 1 de 5
              </span>{" "}
            </h4>
            <p className="text-lg mt-5 text-center md:text-left">
              Aplicación que muestra las películas más populares y nos muestra
              la imagen de portada, puntuación en imdb y la sinospsis. Además se
              puede realizar una búsqueda entre todas las películas.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
