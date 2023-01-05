/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Home() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    let localTheme = window.localStorage;
    setTheme(theme === "dark" ? "light" : "dark");
    window.localStorage.setItem("theme", theme);
    console.log(localTheme);
  };
  return (
    <div className="bg-gray-100 dark:bg-[rgb(36,36,36)] text-primary dark:text-white  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar dark:scrollbar-track-gray-400/20 dark:scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-800 scrollbar-thumb-blue-500">
      <Head>
        <title>Daniel Murillo</title>
      </Head>
      {/* { Header} */}
      <Header theme={theme} handleSwitch={handleSwitch} />
      {/* {Content} */}
      <section id="content" className="snap-start">
        <Content theme={theme} />
      </section>
      {/* {About} */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* {Skills} */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* {Projects} */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* {Contact me} */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#content">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <BsFillArrowUpCircleFill className="text-3xl text-blue-400 dark:text-secondary/80" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
