import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Image from "next/image";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm hidden md:block">
        Pase el ratón sobre la skill para más info
      </h3>
      {/* SKILLS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:grid-cols-4 mt-20">
        {/* HTML */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/html.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-1xl font-bold text-black opacity-100 text-center">
                HTML
              </p>
              <Image src="/5stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* CSS */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/css.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                CSS
              </p>
              <Image src="/5stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* REACT */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/react.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                REACT
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* JAVASCRIPT */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/javascript.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-1xl font-bold text-black opacity-100 text-center">
                JAVASCRIPT
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* ANGULAR */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/angular.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                ANGULAR
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* PYTHON */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/python.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                PYTHON
              </p>
              <Image src="/3stars.png" alt="" width="100" height="100" className="bg-white"/>
            </div>
          </div>
        </div>
        {/* NODE */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/node.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                NODE
              </p>
              <Image src="/3stars.png" alt="" width="100" height="100" className="bg-white"/>
            </div>
          </div>
        </div>
        {/* TYPESCRIPT */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/ts.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-1xl font-bold text-black opacity-100 text-center">
                TYPESCRIPT
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* BOOTSTRAP */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/bootstrap.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-1xl font-bold text-black opacity-100 text-center">
                BOOTSTRAP
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* NEXTJS */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/next.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                NEXT.JS
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* TAILWIND */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/tailwind.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-1xl font-bold text-black opacity-100 text-center">
                TAILWIND
              </p>
              <Image src="/4stars.png" alt="" width="100" height="100" />
            </div>
          </div>
        </div>
        {/* VUE */}
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/vue.png"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-26 md:w-26 xl:h-28 xl:w-28 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-black opacity-100 text-center">
                VUE.JS
              </p>
              <Image src="/3stars.png" alt="" width="100" height="100" className="bg-white"/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
