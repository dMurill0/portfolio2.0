/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
type Props = {};

const UltimosPosts = (props: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ scaleX: scrollYProgress }}
        id="content"
        className="h-screen w-screen bg-orange-200"
      >
        <h3 className="uppercase text-center text-4xl font-bold font-manrope pt-12">
          ultimos posts
        </h3>
        <div className="w-screen h-5/6 flex pt-4 ">
          <div className="w-2/3 h-full bg-orange-200/30 border-black border-r">
            <div className="bg-orange-100 rounded-lg flex-col w-5/6 justify-center text-center mx-auto h-full space-y-4">
              {/* CAJA */}
            <div className=" bg-white p-6 rounded-b-lg">
              <h1>titulo</h1>
              <img src="" alt="" />
              <h3>fecha</h3>
              <p className="h-1/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptates ratione labore sint tempore repudiandae excepturi corrupti! Fugiat non, et quisquam ipsum itaque provident reiciendis dicta nihil cumque, eum debitis!</p>
            </div>
            <div className=" bg-white p-6 rounded-b-lg">
              <h1>titulo</h1>
              <img src="" alt="" />
              <h3>fecha</h3>
              <p className="h-1/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptates ratione labore sint tempore repudiandae excepturi corrupti! Fugiat non, et quisquam ipsum itaque provident reiciendis dicta nihil cumque, eum debitis!</p>
            </div>
            </div>
          </div>

          {/* PANEL DERECHO */}
          <div className="w-1/3 h-full bg-orange-200/5 flex justify-center ">
            <div className="bg-orange-100 rounded-lg flex-col w-2/3 justify-center text-center ">
              <h1 className="font-manrope text-2xl font-bold mt-8">
                Categorias
              </h1>
              <ul className="flex-col space-y-8 my-12 underline">
                <li className="font-manrope text-lg ">categorias</li>
                <li className="font-manrope text-lg ">categorias</li>
                <li className="font-manrope text-lg ">categorias</li>
                <li className="font-manrope text-lg ">categorias</li>
              </ul>
              <hr />
              <h1 className="font-manrope text-2xl font-bold mt-8">
                Categorias
              </h1>
              <ul className="flex-col space-y-8 my-12 underline">
                <li className="font-manrope text-lg ">categorias</li>
                <li className="font-manrope text-lg ">categorias</li>
                <li className="font-manrope text-lg ">categorias</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default UltimosPosts;
