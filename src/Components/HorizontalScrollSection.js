import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import HeroSection from './HeroSection';
import Instructor, { Instructor1, Instructor2, Instructor3 } from './Instructor';
import TrippyScroll from './TrippyScroll';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HorizontalScrollSection() {
  const racesRef = useRef();

  const getScrollAmount = (races) => {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
  };

  useEffect(() => {
    const races = racesRef.current;
  const wrap= document.querySelector('.racesWrapper')
    let ctx = gsap.context(() => {
      gsap.fromTo(".races", {
        autoAlpha:0.9,
      },{
        autoAlpha:1,
        x: getScrollAmount(races),
        duration: 5,
        scrollTrigger: {
          trigger: ".racesWrapper",
          start: "top top",
          end: () => `+=${getScrollAmount(races) * -1}`,
          pin:".racesWrapper",
          scrub: 1,
          horizontal:false,
       
         
          invalidateOnRefresh: true,
         
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  
  


  
          .races h2:last-of-type {
            background: #e1e1ff;
          }
  
          .lightBG {
            background: #313143;
          }
  
          .space-20vh {
            height: 20vh;
          }
  
          .space-30vh {
            height: 30vh;
          }
  
          .space-50vh {
            height: 50vh;
          }
  
          .space-100vh {
            height: 100vh;
          }
        `}
      </style>
      
      <div id='instructor' className=" hidden lg:block racesWrapper z-[60] bg-bg-black-dark  scroll overflow-hidden">
        <div className="races opacity-0 flex" ref={racesRef}>
          
       <Instructor1/>
       <Instructor2/>
  <Instructor3/>

        
        </div>
      </div>

        <div className=" z-[60] lg:hidden bg-bg-black-dark  gap-y-20 md:gap-y-30 flex flex-col" >
          
       <Instructor1/>
       <Instructor2/>
  <Instructor3/>

        
        </div>
  
     
    </div>
  );
}
