import React from "react";

const contact = () => {
  return (
    <div name='contact'  className="w-full h-screen  bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ml-16 border-b-4 border-white rounded-md">Contact</p>
          <p className="py-6 text-lg ml-16">Submit the form below to get in touch with me. </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/b84c74c8-fa40-4be3-9a45-2e51bc60546a" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              className="p-2  bg-transparent border-2 rounded-lg text-white
                     focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email "
              className="p-2 my-4 bg-transparent border-2 rounded-lg text-white
                     focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from
             bg-[#7c3aed] px-6 py-3 my-8 mx-auto items-center rounded-lg hover:scale-110 duration-300"
            >
              Start The Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
