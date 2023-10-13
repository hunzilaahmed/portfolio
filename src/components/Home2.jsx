import React from "react";
import myimage from "../images/myimage.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home2 = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full  bg-gradient-to-b from-black  via-black to-gray-800"
    >
      <aside className="max-w-screen-lg h-full  ">
        <section className="flex flex-col justify-center h-4">
          <h2 className="text-gray-700 text-4xl sm:text-7xl font-bold  ">
            I'm a Full Stalk Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            My self HUNZILA AHMED .Thanks for coming my portfolio I have a one
            year experience building and desgining software. Curently ,I love to
            work on web application using technologies like React,Tailwind
            ,Javascrpit
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration="500"
              className="group text-white w-fit px-6 py-3 flex my-2 items-center rounded-full 
            bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>
        </section>
        <section></section>
      </aside>
    </div>
  );
};

export default Home2;
