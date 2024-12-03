import React, { useEffect, useState } from 'react'
import Gallery from './Gallery';
import HorizontalScrollSection from './HorizontalScrollSection';
import Overview from './Overview';
import Certificate from './Certificate';
import FAQ from './FAQ';
import Footer from './Footer';
import { Link } from 'react-scroll';
import Enroll from './Enroll';
import Navigation2 from './Navigation2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Review from './Review';
import TrippyScroll from './TrippyScroll';
export default function Wrapper() {




    return (
        <div  className='wrapper bg-bg-black-dark  w-full '>

            <Navigation2 />

            <Overview />
            <div className=' h-1/4 w-full '></div>
            <div className='w-full text-wrapper  lg:h-screen  h-96 flex justify-center items-center px-4 flex-col  '>
                <div class="gradient-stroke-text  lg:text-9xl text-4xl">Ultimate Hacker Booklet</div>
            </div>
            <Gallery />
         
           


           
       
          



         
        </div>
    )
}
