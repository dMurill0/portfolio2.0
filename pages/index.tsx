/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import About from "../components/About";
import Content from "../components/Content";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Daniel Murillo</title>
        <link rel="stylesheet" href="./styles/globals.css" />
      </Head>
      {/* { Header} */}
      <Header />
      {/* {Content} */}
      <section id="content" className="snap-center">
        <Content />
      </section>
      {/* {About} */}
      <About />
      {/* {Experience} */}

      {/* {Skills} */}

      {/* {Projects} */}

      {/* {Contact me} */}
    </div>
  );
}
