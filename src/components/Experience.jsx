import React from "react";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Javascript from "../images/javascript.png";
import Github from "../images/github.png";
import Reactimage from "../images/react.png";
import Tailwind from "../images/tailwind.png";

const Experience = () => {
  const techs = [
    
    {
      id: 1,
      src: Reactimage,
      title: "React",
      style: "shadow-blue-600 hover:shadow-blue-600",
    },
    {
      id: 2,
      src: Javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500 hover:shadow-yellow-500",
    },
    {
      id: 3,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 hover:shadow-sky-400",
    },
    {
      id: 4,
      src: Css,
      title: "CSS",
      style: "shadow-blue-600 hover:shadow-blue-600",
    },
    {
      id: 6,
      src: Github,
      title: "Github",
      style: "shadow-gray-400  hover:shadow-gray-400",
    },
    {
      id: 5,
      src: Html,
      title: "HTML",
      style: "shadow-orange-600 hover:shadow-orange-600 hover:shadow-2xl hover:scale-105 duration-500 ",
      
    },
    
  ];

  return (
    <div
      name="experience"
      id="experience"
      className=" bg-gradient-to-b from-black to-gray-800 w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  justify-center w-full h-full text-white">
        <div>
          <p className=" flex flex-col items-center text-4xl font-bold border-b-4 w-fit mx-auto rounded-md p-2 ">
            Experience
          </p>
          <p className="py-6 flex flex-col items-center text-lg">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px12 sm:px-0">
          {techs.map(({ id, src, title, style,imageStyle }) => (
            <div
            key={id} className={`hover:shadow-2xl   flex flex-col justify-center  shadow-md  hover:scale-105 duration-500 py-2 rounded-lg uppercase  ${style}`}>
            <img src={src} alt="" className={`w-20 mx-auto ${imageStyle}`} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
