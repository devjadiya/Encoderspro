import React, { useEffect, useRef, useState } from 'react';
import TypingAnimation from './TypingAnimation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';
gsap.registerPlugin(ScrollTrigger);
export default function Overview() {
   const imgBg = '/images/bg.svg'
  const [mute, setMute] = useState(true);
  const styles = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add more background-related styles as needed
  };

  // useEffect(() => {
  //   gsap.to(
  //     ".video",
   
  //     {

  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ".overview",
  //         start: "top top",
  //         end: "bottom bottom",
  //         onEnter: () => setMute(!mute), 
  //         onLeaveBack: () => setMute(!mute), 
  //         scrub: 1,
  //       }
  //     }
  //   );
  // }, []); 

  const gradientStyle = {
    backgroundImage:
      'radial-gradient(circle, pink, rgb(240, 153, 240), rgb(158, 238, 158), rgb(173, 230, 222), white)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
  <>
      <style>
        {`.overview{
          
          background-repeat: no-repeat;
          background-size: cover;
        }
        .h-2000{
          height: 120rem;
        }
        .text-club {
          color: radial-gradient(circle, pink, rgb(240, 153, 240), rgb(158, 238, 158), rgb(173, 230, 222), white);
        }`}
      </style>

      <div id='course' style={styles} className=' hidden lg:flex overview w-full  h-2000 mt-12 flex-col py-48 px-4 items-center'>
        
        <div className='my-10  w-full  left-0 flex relative top-10 flex-col justify-center items-center p-2 h-96'>
        <p className='text-club font-bold relative   lg:text-2xl text-sm' style={gradientStyle}>
          Restricted by opportunities?
        </p>
          <TypingAnimation />


          <p className='  text-gray-600  relative font-medium top-14 text-lg lg:mt-32 md:mt-20 text-center'>
          Structured coding courses that get you there faster with confidence.
        </p>
        <Link to='content' smooth={true} className='  mt-8 bg-bg-logo relative cursor-pointer flex top-16 justify-center rounded items-center px-8 py-3 font-bold text-lg text-white'>
          Explore Course
        </Link>
        </div>
       
        <img
          
          src='images/anonymous 1.svg'
       
          className='video mt-16 rounded-3xl relative top-32 lg:w-3/4  w-full px-4  object-cover h-full'
        />
      </div>

      <div id='course' style={styles} className='overview w-full lg:hidden   lg:h-2000 h-[50vh] mt-12 flex flex-col lg:py-48 px-4 items-center'>
        
        <div className='lg:my-10  w-full  left-0 flex relative top-10 flex-col justify-center items-center p-2 lg:h-96'>
        <p className='text-club font-bold relative   lg:text-2xl text-sm' style={gradientStyle}>
          Restricted by opportunities?
        </p>
          <TypingAnimation />


          <p className='  text-gray-600  relative font-medium top-28 text-lg lg:mt-32 md:mt-20 text-center'>
          Structured coding courses that get you there faster with confidence.
        </p>
        <Link to='content' smooth={true} className='  mt-8 bg-bg-logo relative cursor-pointer flex top-32 justify-center rounded items-center px-8 py-3 font-bold text-lg text-white'>
          Explore Course
        </Link>
        </div>
      

      </div>
      </>
  );
}
