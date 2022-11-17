import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
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
        <SocialIcon
          className="rounded-full hover:bg-[#F7AB0A]/80"
          url="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          className="rounded-full hover:bg-[#F7AB0A]/80"
          network="github"
          url="https://github.com/dMurill0"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          className="rounded-full hover:bg-[#F7AB0A]/80"
          network="twitter"
          url="https://twitter.com/MuRiPKR"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
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
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer rounded-full hover:bg-[#F7AB0A]/80 mr-2"
            network="email"
            fgColor="white"
            bgColor="transparent"
            href="#contact"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A]">
            Contacta conmigo
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
