import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { emitWarning } from "process";
type Props = {};
type Inputs = {
  Nombre: string;
  Asunto: string;
  Email: string;
  Mensaje: string;
};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sittingbout@gmail?subject=${formData.Asunto}&body=Hola, mi nombre es ${formData.Nombre}: ${formData.Mensaje} (${formData.Email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  ">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block xl:block">
        Contacta conmigo
      </h3>
      <div className="flex flex-col space-y-10">
        {/* <h4 className="text-4xl font-semibold text-center">
          <span className="mr-3">{text}</span>
        </h4> */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-2xl">+34 630382831</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-secondary h-7 w-7" />
            <p className="text-2xl">sittingbout@gmail.com</p>
            <tr />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto ">
          <div className="flex space-x-2">
            <input {...register('Nombre')} className="contactInput" type="text" placeholder="Nombre" />
            <input {...register('Email')}
              className="contactInput"
              type="email"
              placeholder="E-Mail"
            />
          </div>
          <input {...register('Asunto')} className="contactInput" type="text" placeholder="Asunto" />
          <textarea {...register('Mensaje')} className="contactInput" placeholder="Mensaje" />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;
