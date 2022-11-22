import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block xl:block">
        Sobre mí
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        src="/face4.jpg"
        alt="face"
      />
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">Un pequeño resumen sobre mí</h4>
        <p className="text-md">
          Me llamo Daniel Murillo Garzón, un desarrollador front-end que ha
          realizado numerosos proyectos tanto en la universidad como proyectos
          propios de manera autodidacta. También tengo experiencia como
          desarrollador Full-Stack. Actualmente estoy realizando proyectos como
          freelance, principalmente focalizados en React y Next.js
        </p>
      </motion.div>
    </motion.div>
  );
}
