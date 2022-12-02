import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiMoon } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { icons } from "react-icons";
type Props = {};

export default function Header({}: Props) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between sticky top-0 max-w-7xl mx-auto z-20 xl: items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* {Social Icons} */}
        <div className="flex justify-around w-40 ">
          <Link href="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/">
            <FaLinkedinIn className="text-3xl sm:text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-1 sm:py-2" />
          </Link>
          <Link href="https://github.com/dMurill0">
            <FaGithub className="text-3xl sm:text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full px-1 sm:py-2" />
          </Link>
          <Link href="https://twitter.com/MuRiPKR">
            <FaTwitter className="text-3xl sm:text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-1 sm:py-2" />
          </Link>
          <Link href="/blog">
            <ImBlogger className="text-3xl sm:text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-1 sm:py-2" />
          </Link>
        </div>
        {/* <SocialIcon
          className="rounded-full hover:bg-blue-500 dark:hover:bg-secondary/80"
          url="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          className="rounded-full hover:bg-blue-500 dark:hover:bg-secondary/80"
          network="github"
          url="https://github.com/dMurill0"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          className="rounded-full hover:bg-blue-500 dark:hover:bg-secondary/80"
          network="twitter"
          url="https://twitter.com/MuRiPKR"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        /> */}
      </motion.div>
      {/* DARK MODE */}
      <button>
        <HiMoon
          className="text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-1"
          onClick={handleSwitch}
        />
      </button>
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
          duration: 1,
        }}
      >
        <Link className="flex justify-around items-center mr-5" href="#contact">
          {/* <SocialIcon
            className="cursor-pointer rounded-full hover:bg-blue-500 dark:hover:bg-secondary/80 mr-2"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            href="#contact"
          /> */}

          <AiOutlineMail className="text-4xl bg-blue-500 text-white dark:bg-secondary/80 rounded-full py-2" />

          {/* <p className="uppercase hidden md:inline-flex text-sm hover:text-blue-500 dark:text-gray-400 dark:hover:text-secondary/80 ml-4">
            Contacta conmigo
          </p> */}
        </Link>
      </motion.div>
    </header>
  );
}
