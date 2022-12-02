/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import HeaderBlog from "../components/HeaderBlog";
import UltimosPosts from "../components/UltimosPosts";

type Props = {};

function Blog({}: Props) {
  return (
    <div className="h-fit w-fit scroll-smooth">
      <HeaderBlog />
      {/* 
      PORTADA */}
      <div className="h-screen w-screen bg-gradient-to-tr from-orange-500/75 to-slate-600/70 bg-gray-600 ">
        <img
          className="absolute object-cover mix-blend-overlay w-full h-full border rounded-bl-full"
          alt=""
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
        />

        <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-l from-gray-300 to-black font-extrabold text-center font-poppins  uppercase pt-24">
          Blog de un developer
        </h1>
        <div className="h-2/5 bg-orange-200 w-1/2 mt-16 mx-auto flex justify-around rounded-3xl">
          {/* CAJAS */}
          <div className="w-1/4 border border-black p-2 m-2 truncate... relative rounded-2xl bg-gray-500/75 text-white font-manrope space-y-4">
            <div className="w-full flex justify-between">
              <h1 className="text-2xl">Ultimos posts</h1>
              <img className="w-12 h-14 rounded-full" src="/face.jpg" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quibusdam nostrum ex optio, quis, tenetur quasi deserunt rerum
              deleniti nesciunt voluptatibus? Accusantium excepturi temporibus
              praesentium earum illum eligendi autem esse.
            </p>
          </div>
          <div className="w-1/4 border border-black p-2 m-2 truncate... relative rounded-2xl bg-gray-500/75 text-white font-manrope space-y-4">
            <div className="w-full flex justify-between">
              <h1 className="text-2xl">Ultimos posts</h1>
              <img className="w-12 h-14 rounded-full" src="/face.jpg" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quibusdam nostrum ex optio, quis, tenetur quasi deserunt rerum
              deleniti nesciunt voluptatibus? Accusantium excepturi temporibus
              praesentium earum illum eligendi autem esse.
            </p>
          </div>
          <div className="w-1/4 border border-black p-2 m-2 truncate... relative rounded-2xl bg-gray-500/75 text-white font-manrope space-y-4">
            <div className="w-full flex justify-between">
              <h1 className="text-2xl">Ultimos posts</h1>
              <img className="w-12 h-14 rounded-full" src="/face.jpg" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quibusdam nostrum ex optio, quis, tenetur quasi deserunt rerum
              deleniti nesciunt voluptatibus? Accusantium excepturi temporibus
              praesentium earum illum eligendi autem esse.
            </p>
          </div>
        </div>
        <div className="justify-around w-40 flex ml-12 mt-28 space-x-4">
          <Link href="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/">
            <FaLinkedinIn className="text-3xl sm:text-4xl bg-gray-300 text-gray-600  rounded-full py-1 sm:py-2" />
          </Link>
          <Link href="https://github.com/dMurill0">
            <FaGithub className="text-3xl sm:text-4xl bg-gray-300 text-gray-600 dark:bg-secondary/80 rounded-full px-1 sm:py-2" />
          </Link>
          <Link href="https://twitter.com/MuRiPKR">
            <FaTwitter className="text-3xl sm:text-4xl bg-gray-300 text-gray-600 dark:bg-secondary/80 rounded-full py-1 sm:py-2" />
          </Link>
          <Link href="#contact">
          <AiOutlineMail className="text-3xl sm:text-4xl bg-gray-300 text-gray-600 dark:bg-secondary/80 rounded-full py-1 sm:py-2" />
          </Link>
        </div>
      </div>

      {/* ULTIMOS POSTS */}
      <UltimosPosts />
    </div>
  );
}

export default Blog;
