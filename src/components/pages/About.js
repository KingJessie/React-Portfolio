import React from "react";
import { motion } from 'framer-motion';
import {
  ImEnvelop,
  ImGithub,
  ImLinkedin,
  
} from 'react-icons/im';
let Img1 = "/images/code.gif";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      className='about section pt-24'
    >
      <div
       
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <motion.img
                whileHover={{ scale: 1.1 }}
                src={process.env.PUBLIC_URL + Img1}
                alt="Profile image"
                width={'400px'}
                className="profileImg"
              />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center'
          >
            <h1 className='h1-about'>About me</h1>
            <p className='mb-12 max-w-md'>
            As a skilled professional with a background in software development, administration, and business management, I am proficient in creating microservice applications and leveraging 
            innovative technologies to deliver effective solutions.
            <br />
            <br />
              As a trainee front-end developer, I have expertise in developing high-quality web applications using frameworks such as Node.js and React.
              <br />
              <br />
              I am passionate about developing high-quality web applications and am excited to continue learning and advancing my skills in this field.
            </p>
            
          </motion.div>
        </div>
      </div>
      
  <div className="skill skills py-6 px-8 w-6/10 rounded-lg shadow-md mt-24">
    <li>
      <span className="bar html"></span>
      <h3>HTML</h3>
    </li>
    <li>
      <span className="bar css"></span>
      <h3 className>CSS</h3>
    </li>
    <li>
      <span className="bar js"></span>
      <h3>Javascript</h3>
    </li>
    <li>
      <span className="bar py"></span>
      <h3>Python</h3>
    </li>
    <li>
      <span className="bar sql"></span>
      <h3>MySQL</h3>
    </li>
  </div>
  <footer className="py-6 bg-rose-300 ">
  <div className="container mx-auto">
    <div className="flex items-center justify-center mb-4">
      <a href="mailto:kingjessiex@gmail.com" className="text-white mr-4 footer-icon">
        <ImEnvelop size={32}/>
      </a>
      <a href="https://github.com/KingJessie" className="text-white mr-4 footer-icon">
      <ImGithub size={32}/>
      </a>
      <a href="https://uk.linkedin.com/" className="text-white footer-icon">
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

export default About;
