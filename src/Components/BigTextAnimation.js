import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import  GSAP from 'gsap'
export default function BigTextAnimation() {

    useEffect(()=>{
        GSAP.registerPlugin(ScrollTrigger)
        ScrollTrigger.create({
            trigger: '#wrapper-big-text',
            start: "top 20%",
            end: "top 56.5%",
            endTrigger:'.big-text-2',
            
           
            onToggle: self => {
       
    
              // Check if the scroll position is between 30% and 50%
              if (self.isActive) {
                GSAP.to('.big-text-1', { scale: 1.03, color: '#FF5327' });
              } else {
                GSAP.to('.big-text-1', { scale: 1, color: '' });
              }
            }
          });
        
    
          ScrollTrigger.create({
            trigger: '#wrapper-big-text',
            start: "top 10%",
            end: "top 64.5%",
            endTrigger:'.big-text-3',
         
            onToggle: self => {
       
    
              // Check if the scroll position is between 30% and 50%
              if (self.isActive) {
                GSAP.to('.big-text-2', { scale: 1.03, color: '#FF5327' });
              } else {
                GSAP.to('.big-text-2', { scale: 1, color: '' });
              }
            }
          });
        
    
          ScrollTrigger.create({
            trigger: '#wrapper-big-text',
            start: "top -5%",
            end: "top 50%",
            endTrigger:'.big-text-3',
            
            onToggle: self => {
              if (self.isActive) {
                GSAP.to('.big-text-3', { scale: 1.03, color: '#FF5327' });
              } else {
                GSAP.to('.big-text-3', { scale: 1, color: '' });
              }
            }
          });
    })
  return (
    <div>
        <div  id='wrapper-big-text'   style={{ fontFamily: 'Mulish,Mulish,Helvetica,Arial,sans-seri' ,}} className=' relative z-[50]  hidden lg:flex  left-0 w-full lg:h-screen  px-4 py-20 font-extrabold lg:px-32 text-xl lg:text-3xl  flex-col justify-center items-center bg-bg-black-dark text-gray-900'>
             <p className='big-text-1 hover:text-text-orange lg:my-10 my-5 w-full lg:w-3/4'>Empower Students with Hyperledger Development Skills in our Live Blockchain Classes.</p>
             <p className='big-text-2 hover:text-text-orange lg:my-10 my-5 w-full lg:w-3/4'>Join Our Live Classes on Social Media Decentralized App Development.</p>
             <p className='big-text-3 hover:text-text-orange lg:my-10 my-5 w-full lg:w-3/4'>Master NFT Software in Our Professional Blockchain Development Courses for Students.</p>
         </div>
    </div>
  )
}
