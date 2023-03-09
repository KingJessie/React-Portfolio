import React from "react";
import { motion } from 'framer-motion';

function Project() {
  return ( 
  <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    className='about section pt-24'
  > <h1 className='h1-project'>Project</h1>
   <div class="container grid-cols-2 lg:grid-cols-3 gap-4">

  <div class="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between gap-x-24 gap-y-16 text-center lg:text-left lg:pt-16">

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          >
          </motion.div>
          <article class="card card--1 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="https://kingjessie.github.io/Better_Nutrient/" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">Better Nutrient</span>
    <h3 className="card__title">Healthy Recipes and Nutrition</h3>
    <span className="card__by">by <a href="https://kingjessie.github.io/Better_Nutrient/" className="card__author" title="author">Group Project </a></span>
  
  </div>
</article>

<article class="card card--2 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="https://kingjessie.github.io/Password-Generator/" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">Password-Generator</span>
    <h3 className="card__title">Create Unique Passwords</h3>
    <span className="card__by">by <a href="https://kingjessie.github.io/Password-Generator/" className="card__author" title="author">Jessie King</a></span>
  </div>
</article>

<article class="card card--3 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="https://github.com/KingJessie/README_Generator" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">ReadMe Generator</span>
    <h3 className="card__title">Generate a ReadMe File Using CLI</h3>
    <span className="card__by">by <a href="https://github.com/KingJessie/README_Generator" className="card__author" title="author">Jessie King</a></span>
  </div>
</article>

{/* <article class="card card--2 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">Travel</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
  </div>
</article> */}
{/* <article class="card card--2 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">Travel</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
  </div>
</article>
<article class="card card--2 flex-1 max-w-sm mx-auto lg:mx-0 overflow-hidden">
      <div class="card__info-hover">
        <svg class="card__like w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
        </svg>
      </div>
      <div class="card__img"></div>
      <a href="#" class="card_link">
        <div class="card__img--hover"></div>
      </a>
      <div class="card__info">
      <span className="card__category">Travel</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">John Doe</a></span>
  </div>
</article> */}

</div>
</div>

  
    </motion.section>
  
  );
}

export default Project;

