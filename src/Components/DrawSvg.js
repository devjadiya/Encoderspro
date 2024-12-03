import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DrawSvg() {
    const svgRef = useRef(null);

    // useEffect(() => {
    //     const svgElement = svgRef.current;

    //     gsap.fromTo(
    //         svgElement,
    //         {
    //             strokeDasharray: 2017,
    //             strokeDashoffset: 0,
    //         },
    //         {
    //             duration:10,
    //             strokeDashoffset: 2017,
    //             scrollTrigger: {
    //                 trigger: ".svg-division",
    //                 start: 'top top',
    //                 end: 'bottom bottom',
    //                 scrub: 0.6,
    //             },
    //         }
    //     );
    // }, []);

    return (
        <div className=' w-full bg-black'>

            
        </div>
    );
}
