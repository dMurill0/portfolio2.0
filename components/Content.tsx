/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

type Props = {};

export default function Content({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hola, soy Daniel Murillo",
      "<MeGustaHacerPáginasModernas />",
      "con-diseños-responsive.jsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  // const [_document, set_document] = React.useState(null);

  // React.useEffect(() => {
  //   set_document(document);
  // }, []);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          z: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          z: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <img
          className="relative rounded-full h-40 w-40 mx-auto object-cover"
          src="/face2.jpg"
          alt="face"
        />
      </motion.div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-blue-500 dark:text-gray-500 pb-2 tracking-[15px]">
          Front-end developer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          {}
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton">Sobre mí</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contacto</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
