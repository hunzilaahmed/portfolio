import React from "react";

const About = () => {
  return (
    <div 
      name={About} 
      id="about"
      className=" p-20 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 rounded-md border-gray-300">
            About
          </p>
        </div >
        <p className="text-xl mt-20 ">
          Hello there! I'm Hunzila Ahmed, a passionate developer with a love for
          crafting digital solutions that make a real difference, I've honed my
          skills in Web Development, Mobile App Development.
        </p>
        <br />
        <p className="text-xl ">
          My journey in the world of coding started when I was in high school, and
          since then, I've been on a thrilling ride, constantly learning and
          exploring new technologies. I thrive on challenges and enjoy solving
          complex problems with elegant and efficient solutions. Remember to
          personalize this section to reflect your own experiences, skills, and
          personality. This will help potential collaborators or employers get a
          better understanding of who you are as a developer.
        </p>
        <br />
        <p className="text-xl">
          I'm excited about the future of technology and the endless
          possibilities it holds. Let's connect and explore how we can bring
          your ideas to life or tackle the next big challenge together. Feel
          free to reach out to me at Linkedin account, and let's start building
          something amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
