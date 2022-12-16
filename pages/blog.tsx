/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterBlog from "../components/FooterBlog";
import HeaderBlog from "../components/HeaderBlog";
import UltimosPosts from "../components/UltimosPosts";
import React, { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi";

type Props = {};

function Blog({}: Props) {
  const tema = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(tema);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };
  return (
    <div className="h-fit w-screen scroll-smooth bg-[#fff] m-0 p-0 font-handle selection:bg-[#29aae1]">
      {/* <img
        src="/blog_bg.png"
        className="absolute h-[300px] bottom-0 -rotate-180 w-screen z-10"
        alt=""
      /> */}
      <h1 className="absolute left:0 text-4xl text-blue-300 font-bold m-4 ml-16 uppercase underline">
        Daniel Murillo
      </h1>
      <button>
        <HiMoon
          className="text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-1"
          onClick={handleSwitch}
        />
      </button>
      <div className="absolute left-40 top-60">
        <h1 className="text-8xl first-line:tracking-widest first-letter:text-8xl first-letter:font-extrabold first-letter:mr-2 font-thin first-letter:uppercase text-blue-500 title ">
          Mi blog personal
        </h1>
      </div>
      <div className="h-screen w-2/5 bg-slate-200/80 absolute right-0 shadow-2xl shadow-blue-700">
        <HeaderBlog />

        <div className="relative mx-6">
          {/* Tarjeta  */}
          <div className="absolute top-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Diferencias entre bootstrap y tailwindcss
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis temporibus at numquam, consequatur adipisci inventore,
                nostrum repellat eos consectetur placeat maiores? Totam dolorem
                adipisci expedita nemo commodi? Aliquid, consectetur fuga.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Tarjeta  */}
          <div className=" absolute right-0 top-48 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Flexbox vs Grid
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="bg-slate-100 w-1/2 h-1/3 rounded-t-xl m-6 mt-12 absolute rotate-12 space-y-4 flex flex-col">
          <div className="flex justify-between">
            <img
              src="face.jpg"
              className="h-32 w-1/3 rounded-2xl ml-6 mt-2"
              alt=""
            />
            <span className="mr-10">9/12/2022</span>
          </div>
          <h1 className="text-xl">Diferencias entre bootstrap y tailwindcss</h1>
          <p className="text-sm truncate.. mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tempora voluptatum ad hic voluptatem ratione saepe, debitis ex vitae
            cupiditate, accusantium repellat. Quam sit quae deleniti
            consequuntur, eos aliquam est!
          </p>
        </div>
        <div className="bg-slate-200 w-1/2 h-1/3 rounded-t-xl m-6 mt-12 right-0 absolute rotate-12">
        <div className="flex justify-between">
            <img
              src="face.jpg"
              className="h-32 w-1/3 rounded-2xl ml-6 mt-2"
              alt=""
            />
            <span className="mr-10">6/12/2022</span>
          </div>
          <h1 className="text-xl">Flexbox vs Grid</h1>
          <p className="text-sm truncate.. mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tempora voluptatum ad hic voluptatem ratione saepe, debitis ex vitae
            cupiditate, accusantium repellat. Quam sit quae deleniti
            consequuntur, eos aliquam est!
          </p>
        </div> */}
        <div className="relative h-screen w-sc"></div>
      </div>

      {/* 
      PORTADA */}
      <div className="h-screen w-screen m-0 p-0">
        {/* <img
          className="absolute object-cover mix-blend-overlay w-full h-full border rounded-bl-full"
          alt=""
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
        /> */}

        <div className="justify-around w-40 flex ml-12 mt-28 space-x-4 absolute bottom-10 left-20 z-20">
          <Link href="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/">
            <FaLinkedinIn
              size={60}
              className=" sm:text-4xl bg-gray-300 text-[#29aae1]  rounded-full py-1 sm:py-2"
            />
          </Link>
          <Link href="https://github.com/dMurill0">
            <FaGithub
              size={60}
              className=" sm:text-4xl bg-gray-300 text-[#29aae1] dark:bg-secondary/80 rounded-full px-1 sm:py-2"
            />
          </Link>
          <Link href="https://twitter.com/MuRiPKR">
            <FaTwitter
              size={60}
              className=" sm:text-4xl bg-gray-300 text-[#29aae1] dark:bg-secondary/80 rounded-full py-1 sm:py-2"
            />
          </Link>
          <Link href="#contact">
            <AiOutlineMail
              size={60}
              className=" sm:text-4xl bg-gray-300 text-[#29aae1] dark:bg-secondary/80 rounded-full py-1 sm:py-2"
            />
          </Link>
        </div>
      </div>

      {/* ULTIMOS POSTS */}
      <UltimosPosts />
      <FooterBlog />
    </div>
  );
}

export default Blog;
