import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Contact({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Aquí te dejo mi correo..",
      "y mi número de telefono",
      "so.. call me maybe!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  ">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacta conmigo
      </h3>
      <div className="flex flex-col space-y-10">
        {/* <h4 className="text-4xl font-semibold text-center">
          <span className="mr-3">{text}</span>
        </h4> */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+34 630382831</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7" />
            <p className="text-2xl">sittingbout@gmail.com</p>
            <tr />
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contactInput" type="text" placeholder="Nombre"/>
            <input className="contactInput" type="text" placeholder="Apellidos"/>
          </div>
          <input className="contactInput" type="email" placeholder="E-mail"  />
          <textarea className="contactInput" placeholder="Mensaje"/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
