
import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';
gsap.registerPlugin(ScrollTrigger);
export default function Navigation2() {
    const [bg, setBg] = useState("")


    // useEffect(() => {

    //     const el1 = document.querySelector(".banner")
     

    //     gsap.fromTo(".banner", {


    //     }, {

    //         display: "none",
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".form",
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 0.6,


    //         }

    //     }, "same")
    //     gsap.fromTo(".course", {

    //     }, {
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".overview",
    //             start: "top top",
    //             end: "top top",
    //             scrub: 0.6,
    //             onEnter: () => setBg("course"),
    //             onLeaveBack: () => setBg(""),

    //         }
    //     })
    //     gsap.fromTo(".content", {

    //     }, {
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".left",
    //             start: "top top",
    //             end: "top  top",
    //             scrub: 0.6,
    //             onEnter: () => setBg("bundle"),
    //             onLeaveBack: () => setBg("course"),
    //         }
    //     })
    //     gsap.fromTo(".instructor", {

    //     }, {
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".racesWrapper",
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 0.6,
    //             onEnter: () => setBg("instructor"),
    //             onLeaveBack: () => setBg("bundle"),
    //         }
    //     })
    //     gsap.fromTo(".certificate", {

    //     }, {
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".certi",
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 0.6,
    //             onEnter: () => setBg("certificate"),
    //             onLeaveBack: () => setBg("instructor"),
    //         }
    //     })
    //     gsap.fromTo(".faq", {

    //     }, {
    //         duration: 1,

    //         scrollTrigger: {
    //             trigger: ".fa",
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 0.6,
    //             onEnter: () => setBg("faq"),
    //             onLeaveBack: () => setBg("certificate"),
    //         }
    //     })

      





    // }, [])

  
    return (
     
            <nav className=' w-full  bg-white   scroll  lg:flex hidden nav-fixed z-50 lg:h-16 justify-center items-center lg:px-80 '>
                <div className='   scroll overflow-x-scroll  overflow-y-hidden  lg:rounded-full lg:shadow-md bg-white lg:py-0.5  flex justify-start items-center  '>
                    <Link smooth={true} duration={2000} to='course'><div className={` px-8 py-2  course  cursor-pointer   hover:bg-bg-logo-light  text-lg font-semibold rounded-full mx-1.5   text-text-logo`}>Course</div></Link>
                    <Link smooth={true} duration={2000} to='content'> <div className={`  px-8 py-2 content cursor-pointer  hover:bg-bg-logo-light text-lg font-semibold rounded-full mx-1.5    text-text-logo`}>Bundle </div></Link>
       
                    <Link smooth={true} duration={2000} to='certificate'> <div className={`  px-8 py-2 certificate cursor-pointer  hover:bg-bg-logo-light text-lg font-semibold rounded-full mx-1.5    text-text-logo`}>Certificate</div></Link>
                    <Link smooth={true} duration={2000} to='enroll'> <div className={` enroll  px-8 py-2 hover:bg-bg-logo-light  text-nowrap cursor-pointer text-lg font-semibold rounded-full mx-1.5 text-text-logo`}>Enroll Now</div></Link>
                    <Link smooth={true} duration={2000} to='faq'> <div className={`  px-8 py-2 faq cursor-pointer  hover:bg-bg-logo-light text-lg font-semibold rounded-full mx-1.5    text-text-logo`}>FAQ</div></Link>

                   
                </div>
            </nav>




      
    )
}
