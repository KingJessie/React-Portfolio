import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
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
      className="section">
      <div className="container mx-auto h-full relative pt-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1-home lg:text-[80px]">
              Developer <br /> & Designer
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
                className="profileImg  xs={12} md={6} xl={5"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
