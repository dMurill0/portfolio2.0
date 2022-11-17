/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* { Header} */}
      <Header />
      {/* {Content} */}
      <section id="content" className="snap-start">
        <Content />
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
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="/up.png"
              alt=""
              width="5"
              height="5"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
