import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import {
  ImEnvelop,
  ImGithub,
  ImLinkedin,
  
} from 'react-icons/im';
let profileImg = "/images/profile.png";

const typetext = [
  "Welcome 👋",
  1000,
  "I am a developer",
  1000,
  "I am a programmer ",
  1000,
  "I love coding 🔥",
  1000,
  "I love building ⚒️",
  1000,
  "I love designing",
  1000,
  "I love being creative 🫶",
];

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home section">
      <div className="container mx-auto h-full relative pt-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1-home lg:text-[80px]">
              <span className="h1-span">Developer</span> <br /> & Designer
            </h1>
            <p className="homecontent text-[26px] lg:text-[36px] mb-4 lg:mb-12">
              <Typical
                wrapper="span"
                steps={typetext}
                loop={1}
                className={"animation"}
              />
            </p>
            <p className="home-p text-black max-w-md">
              I have one year of experience in software building and designing.
              Presently, my interest lies in working on web applications,
              utilizing technologies such as JavaScript, jQuery, React, and
              Node.
            </p>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max pt-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex lg:-right-40 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={process.env.PUBLIC_URL + profileImg}
                alt="Profile image"
                className=""
              />
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="py-4">
  <div className="container mx-auto">
    <div className="flex items-center justify-center mb-4">
      <a href="mailto:kingjessiex@gmail.com" className="text-white mr-4">
        <ImEnvelop size={32}/>
      </a>
      <a href="https://github.com/KingJessie" className="text-white mr-4">
      <ImGithub size={32}/>
      </a>
      <a href="https://uk.linkedin.com/" className="text-white">
      <ImLinkedin size={32}/>
      </a>
    </div>
    <div className="text-center">
      <p className="text-black-400">Jessie | © {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  </div>
</footer>

    </motion.section>
  );
};

export default Home;
