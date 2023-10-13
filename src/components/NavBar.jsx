import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className=" p-7 flex  px-16 max-md:justify-between items-center w-full  text-white bg-black fixed">
      <h1 className="text-5xl font-signature  ">Hunzila</h1>

      <ul className="md:flex hidden items-center gap-16  ml-auto text-lg">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="hover:text-[#ea580c] hover:border-b-4 rounded-md border-[#ea580c] cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
              </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={27} /> : <FaBars size={27} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
      absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 
      text-geray-500  w-full h-screen"
        >
          {links.map(({ id, link }) => (

            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
              {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
