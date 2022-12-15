/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
type Props = {};

const UltimosPosts = (props: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <section id="content" className="h-screen w-screen bg-[#29aae1]">
        <h3 className="uppercase text-center text-4xl font-bold text-white pt-12 mx-auto ">
          ultimos posts
        </h3>
        <div className="w-screen h-5/6 flex pt-4 ">
          <div className="w-2/3 h-full  border-black border-r relative">
            <div className="text-sm md:text-4xl font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 absolute top-0 left-8">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <a
                    href="#"
                    className="first-letter:text-6xl inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Developer
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="first-letter:text-6xl inline-block p-4 text-white rounded-t-lg border-b-2  active dark:text-blue-500 dark:border-blue-500"
                    aria-current="page"
                  >
                    Viajes
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="first-letter:text-6xl inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Cocina
                  </a>
                </li>

                <li>
                  <a className="first-letter:text-6xl inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* PANEL DERECHO */}
          <div className="w-1/3 h-full flex justify-center text-">
            <div className="bg-blue-100 rounded-lg flex-col w-2/3 justify-center text-center ">
              <h1 className="font-handle text-2xl font-bold mt-8">
                Categorias
              </h1>
              <ul className="flex-col space-y-8 my-12 underline">
                <li className="font-handle text-lg ">categorias</li>
                <li className="font-handle text-lg ">categorias</li>
                <li className="font-handle text-lg ">categorias</li>
                <li className="font-handle text-lg ">categorias</li>
              </ul>
              <hr />
              <h1 className="font-handle text-2xl font-bold mt-8">
                Categorias
              </h1>
              <ul className="flex-col space-y-8 my-12 underline">
                <li className="font-handle text-lg ">categorias</li>
                <li className="font-handle text-lg ">categorias</li>
                <li className="font-handle text-lg ">categorias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltimosPosts;
