import Link from "next/link";
import React from "react";
import { Navbar } from "flowbite-react";

type Props = {};

const HeaderBlog = (props: Props) => {
  return (
    // <div className="w-full h-[100px] inset-0 border-2 border-b-blue-200">
    //   <ul className="list-none text-blue-300 font-semibold  flex text-poppins justify-center space-x-10 text-xl uppercase pt-6">
    //     <Link href="#content" className="shadow-2xl hover:shadow-blue-700">
    //       <li className="">Ultimos posts</li>
    //     </Link>
    //     <Link href=""><li className="cursor-pointer shadow-2xl hover:shadow-blue-700">About</li></Link>
    //     <Link href=""><li className="cursor-pointer shadow-2xl hover:shadow-blue-700">Contact</li></Link>

    //   </ul>
    // </div>
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true} >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBlog;
