import React, { useEffect, useRef } from 'react'
import './App.css';
import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Animation from './Components/Animation';
import Wrapper from './Components/Wrapper';
import TrippyScroll from './Components/TrippyScroll';
import Certificate from './Components/Certificate';
import Enroll from './Components/Enroll';
import Footer from './Components/Footer';
import Review from './Components/Review';
import BigTextAnimation from './Components/BigTextAnimation';
import HorizontalScrollSection from './Components/HorizontalScrollSection';
import FAQ from './Components/FAQ';
import Banner from './Components/Banner';

export default function Home(){

  useEffect(() => {
    const controls = new Animation();

    // Your code logic using controls

    return () => {
      // Cleanup logic if needed
    };
  }, []);


  return (
    <>
       <Banner />
      <Navigation />

      <HeroSection />

      <Wrapper />


      <Review />
      <BigTextAnimation />

      {/* <div className=' w-fulll lg:h-screen  justify-end items-center py-20 lg:py-0  bg-bg-black-dark flex '>
        <div className='w-full h-1/2 flex justify-end items-center px-4 flex-col  hori'>
          <h1 className='lg:text-8xl text-4xl  font-extrabold text-white'>Our Instructor</h1>
          <p className='lg:text-lg text-sm   lg:w-3/4 w-full  text-center text-white my-5'>Meet our expert instructors at ENCODERSPRO, where industry veterans guide you to IT excellence. Join us and learn from the best to fuel your professional journey! 🚀👩‍💻👨‍💻</p>
        </div>
      </div> */}
      {/* <HorizontalScrollSection /> */}

      <Certificate />
      <Enroll />
      <FAQ />
      <Footer />
      <ToastContainer />

     
    </>
  );
}


