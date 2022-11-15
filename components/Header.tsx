import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion"
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between sticky top-0 max-w-7xl mx-auto z-20 xl: items-center">
      <motion.div initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration:1.5,
      }}>
        {/* {Social Icons} */}
        <SocialIcon className="rounded-full hover:bg-[#F7AB0A]/80" url="https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/" fgColor="gray" bgColor="transparent"/>
        <SocialIcon className="rounded-full hover:bg-[#F7AB0A]/50" network="github" url="https://github.com/dMurill0" fgColor="gray" bgColor="transparent"/>
        <SocialIcon className="rounded-full hover:bg-[#F7AB0A]/30" network="twitter" url="https://twitter.com/MuRiPKR" fgColor="gray" bgColor="transparent"/>
      </motion.div>
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration:1,
      }}>
        <SocialIcon className="cursor-pointer rounded-full hover:bg-[#F7AB0A]/80 mr-2" network="email" fgColor="gray" bgColor="transparent"/>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contacta conmigo</p>
      </motion.div>
    </header>
  );
}
