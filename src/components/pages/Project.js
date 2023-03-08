import React from "react";
import { motion } from 'framer-motion';

function Project() {
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
        
        </div>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center'
        >
         

          </motion.div>
        </div>
      </div>
    </motion.section>
  
  );
}

export default Project;

