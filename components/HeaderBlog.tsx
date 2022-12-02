import Link from "next/link";
import React from "react";
import Content from "./Content";

type Props = {};

const HeaderBlog = (props: Props) => {
  return (
    <div className="w-full h-[100px] bg-black/90 inset-0">
      <ul className="list-none text-white  flex text-poppins justify-center space-x-10 text-2xl uppercase pt-6">
        <Link href="#content" className="">
          <li className="">Ultimos posts</li>
        </Link>
        <Link href=""><li className="cursor-pointer">About</li></Link>
        <li className="cursor-pointer">Reciente</li>
        <li className="cursor-pointer">Precios</li>
      </ul>
    </div>
  );
};

export default HeaderBlog;
