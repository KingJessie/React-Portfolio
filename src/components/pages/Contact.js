import React from 'react';
import {
  ImEnvelop,
  ImGithub,
  ImLinkedin,
  
} from 'react-icons/im';


function Contact(props) {
  return (
    <div className='container mx-auto h-full'>
    <h1 className='h1-contact pt-36'>Contact me</h1>
    <div className='bg-black padding-style'>
 <p>.</p>
</div>
    {/* form */}
    <form className='border border-lilac-500 p-4 flex flex-col gap-y-4 pt-32'>
      <div className='flex gap-x-10'>
        <input
          className='outline-none border-b border-b-primary h-[60px] bg-gray-200 font-secondary w-full pl-3 placeholder:text-[#757879] text-black'
          type='text'
          placeholder='Your name'
        />
        <input
          className='outline-none border-b border-b-primary h-[60px] bg-gray-200 font-secondary w-full pl-3 placeholder:text-[#757879] text-black'
          type='text'
          placeholder='Your email address'
        />
      </div>
      <input
        className='textarea outline-none border-b border-b-primary h-[60px] bg-gray-200 font-secondary w-full pl-3 placeholder:text-[#757879] text-black'
        type='text'
        placeholder='Your message'
      />
      <br>
      </br>
      <button className='btn-1 mb-[30px] mx-auto lg:mx-0 self-start'>
        Send
      </button>
    </form>

<div className='bg-black padding-style'>
 <p>.</p>
</div>
<footer className="py-4 bg-pink-200">
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
      <p className="text-slate-600">Jessie | © {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  </div>
</footer>
  </div>

  );
}

export default Contact;
