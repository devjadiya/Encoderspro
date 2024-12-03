import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type';
import { ToastContainer, toast } from 'react-toastify';
import CursorPointer from './Cursor';
import { Link } from 'react-scroll';
import SpringModal from './SpringModal';
import { motion } from 'framer-motion'
import { userDataSets } from './Data';
import { HeroSection_course_data } from './Data';
import { AnimatePresence } from "framer-motion";
import { useContext } from 'react';
import User from './Global';
import { useNavigate } from 'react-router-dom';


export default () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [size, setSize] = useState(32);
    const [userDataIndex, setUserDataIndex] = useState(0);
    const [userData, setUserData] = useState(userDataSets[userDataIndex]);
    const [user, setUser] = useContext(User);
    const navigate = useNavigate()
 
    useEffect(() => {
        const handleMouse = (e) => {

            setX(e.clientX)
            setY(e.clientY)
        }
        document.addEventListener("mousemove", handleMouse)
        return () => {
            document.addEventListener("mousemove", handleMouse)
        }
    }, [x, y])
    useEffect(() => {
        // Function to handle transitioning to the next data set
        const transitionToNextDataSet = () => {
            setUserDataIndex((prevIndex) => (prevIndex + 1) % userDataSets.length);
        };

        // Set up a timer to transition every 2 seconds
        const intervalId = setInterval(transitionToNextDataSet, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only once when the component mounts

    useEffect(() => {
        // Update userData when userDataIndex changes
        setUserData(userDataSets[userDataIndex]);
    }, [userDataIndex]);

    const Avatar = () => (

        <>
            <div className=' w-full px-8 flex justify-center items-center text-center'>
                <p className='  text-lg text-text-orange font-semibold'>
                    🎉<span className=' text-text-logo'>{userData.name}</span> joined the course just before {userData.email}
                </p>
            </div>

        </>
    )


    const Submit = () => {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        // if (document.cookie.includes("formSubmitted=true")) {
        //     toast.warn("we already got your response!");
        //     return;
        // }

        if (name && phone && email) {
    setUser({
        name:name,email:email, number:phone,
    })
    navigate('/payment')

            // var formData = {
            //     name: name,
            //     phone: phone,
            //     email: email,

            // };

            // // Make a POST request to Google Apps Script
            // fetch(`${HeroSection_course_data.app_script_link}`, {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: new URLSearchParams(formData)
            // })
            //     .then(response => {
            //         const expirationDate = new Date();
            //         expirationDate.setMonth(expirationDate.getMonth() + 1);

            //         document.cookie = `formSubmitted=true; expires=${expirationDate.toUTCString()}`;
            //         toast.success("Your Response submitted successfully🥳");

            //         // Clear form fields
            //         document.getElementById("name").value = "";
            //         document.getElementById("phone").value = "";
            //         document.getElementById("email").value = "";
            //     })

            //     .catch(error => {
            //         toast.error('Error submitting form 😏 ' + error);

            //     });
        } else {
            toast.warn("Please fill in all the fields😏");
        }

    }
    return (
        <section id='home' className='py-16 relative  flex justify-center items-center flex-col'>


            <style>
                {`
             .p{
                font-size: 2rem;
                line-height: 0;
                margin: 0;
                &:nth-of-type(4){
                  color: yellow;
              
                }
                .cursor:hover{
                    cursor: none;
                  }
              }
              
              .bg-video{
                background-image: url('${HeroSection_course_data.video_tumbhnailL}');
                background-repeat: no-repeat;
                background-size: cover;
            }`}
            </style>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className=" w-full  flex justify-start items-start lg:pl-32 lg:pr-20 px-4 lg:py-5  md:w-11/12 lg:w-full md:px-8">
                <div className="items-start w-full h-full gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className=" px-4 cursor   mt-6 sm:px-0 md:mt-0 lg:w-1/2 w-full">
                        <div className=' '>
                            <p className='lg:text-6xl text-4xl text-black  font-extrabold' style={{ fontFamily: "Mulish" }}> <span className=' text-text-orange   scale-150'>{HeroSection_course_data.heading} </span>{HeroSection_course_data.sub_heading} </p>


                        </div>

                        <p className=" lg:text-2xl lg:mt-12 mt-5 text-md font-medium">
                            {HeroSection_course_data.description}
                        </p>
                        <div className=' lg:mt-36 mt-16 flex lg:flex-row flex-col gap-x-2 '>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} transition={{ duration: 0.2 }} onClick={() => setIsOpen(!isOpen)} className='text-white rounded px-6 py-2  flex justify-center items-center  font-semibold  lg:w-4/12 w-full  bg-bg-orange'  >
                                Download Broucher
                            </motion.button>
                            <Link className=' justify-center items-center flex  rounded px-6 py-2 cursor-pointer text-lg font-bold    lg:w-4/12 w-full  text-text-orange' to='overview' smooth={true} >
                                Go To Course
                            </Link>
                        </div>
                    </div>
                    <div className=" flex lg:w-1/2 w-full h-full flex-col lg:px-24 lg:block">
                        <div onClick={()=>setIsOpen1(!isOpen1)} className=' cursor-pointer w-full bg-video my-5 h-32 bg-white flex justify-center items-center shadow-md rounded-lg'>
                            <motion.svg whileHover={{scale:1.1}} whileTap={{scale:.9}}  className='z-40 outline-none' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.4596 33.9792L26.3971 19.25C25.5221 18.6667 24.793 19.1042 24.793 20.125V49.875C24.793 50.8959 25.5221 51.3334 26.3971 50.75L50.4596 36.0209C50.642 35.92 50.794 35.7721 50.8998 35.5926C51.0057 35.413 51.0615 35.2084 51.0615 35C51.0615 34.7916 51.0057 34.587 50.8998 34.4075C50.794 34.228 50.642 34.0801 50.4596 33.9792Z" fill="white" />
                                <path d="M35.0013 2.91684C28.6558 2.91684 22.4528 4.79849 17.1768 8.32385C11.9007 11.8492 7.78849 16.86 5.36018 22.7224C2.93187 28.5849 2.29651 35.0358 3.53446 41.2593C4.7724 47.4829 7.82804 53.1996 12.315 57.6865C16.8019 62.1735 22.5186 65.2291 28.7422 66.467C34.9657 67.705 41.4166 67.0696 47.2791 64.6413C53.1415 62.213 58.1523 58.1008 61.6776 52.8247C65.203 47.5486 67.0846 41.3457 67.0846 35.0002C67.104 30.7815 66.2873 26.6009 64.6818 22.6996C63.0763 18.7984 60.7138 15.2538 57.7307 12.2708C54.7476 9.28772 51.2031 6.92521 47.3019 5.31971C43.4006 3.71421 39.22 2.89753 35.0013 2.91684ZM35.0013 61.2502C29.8096 61.2502 24.7344 59.7106 20.4176 56.8263C16.1008 53.9419 12.7363 49.8422 10.7495 45.0456C8.76268 40.2491 8.24284 34.9711 9.2557 29.8791C10.2686 24.7871 12.7686 20.1097 16.4398 16.4386C20.1109 12.7675 24.7882 10.2674 29.8802 9.25456C34.9722 8.2417 40.2502 8.76153 45.0468 10.7483C49.8433 12.7351 53.943 16.0997 56.8274 20.4165C59.7118 24.7332 61.2513 29.8084 61.2513 35.0002C61.213 41.9503 58.4351 48.6049 53.5206 53.5194C48.606 58.434 41.9514 61.2119 35.0013 61.2502Z" fill="white" />
                            </motion.svg>

                        </div>
                        <div className=" form px-4 p-4 shadow-md h-full w-full  bg-white  sm:px-8 sm:rounded-xl">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-5"
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name
                                    </label>
                                    <input
                                        id='name'
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2  text-text-black-dark bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        id='email'
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-text-black-dark bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Phone number
                                    </label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                                <option>IN</option>

                                            </select>
                                        </div>
                                        <input
                                            id='phone'
                                            type="number"
                                            placeholder=""
                                            required
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>

                                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.85 }} transition={{ duration: 0.2 }} onClick={Submit}
                                    className="w-full px-4 py-2 text-white font-semibold   bg-bg-logo   rounded-lg duration-150"
                                >
                                    Submit
                                </motion.button>

                                <Avatar />
                            </form>
                        </div>


                    </div>

                </div>
            </div>
            {/* <CursorPointer x={x} y={y}/> */}
            <ToastContainer />


            <>
            <SpringModal1 isOpen={isOpen1} setIsOpen={setIsOpen1} />
            </>
        </section>
    )
}



const SpringModal1 = ({ isOpen, setIsOpen }) => {


   
return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0  grid place-items-center overflow-y-scroll cursor-pointer" style={{ zIndex: 60 }}
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                >

                    <div className="relative z-10">
                        <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                            <svg onClick={() => setIsOpen(!isOpen)} width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#6423FF" />
                                <path d="M23.3486 24.7999H10.0658C9.28576 24.7999 8.89088 24.1209 8.8139 23.3418C8.79494 23.1499 8.79527 22.9519 8.8139 22.7564V7.3999H23.3486V21.0648V24.7999Z" fill="#6423FF" />
                                <path d="M23.3486 21.0648C23.3486 15.7283 23.3486 12.7364 23.3486 7.3999H8.8139V23.3418M23.3486 21.0648V24.7999C23.3486 24.7999 11.8951 24.7999 10.0658 24.7999C9.28576 24.7999 8.89088 24.1209 8.8139 23.3418M23.3486 21.0648C23.3486 21.0648 11.6061 21.0648 10.0658 21.0648C9.18218 21.0648 8.71035 22.2938 8.8139 23.3418M22.193 22.8868H10.0658M17.9579 10.3151L14.3003 17.8763" stroke="white" stroke-linecap="round" />
                                <path d="M13.7224 12.228L11.7974 14.05L13.7224 15.9631" stroke="white" stroke-linecap="round" />
                                <path d="M18.7278 15.9629L20.6528 14.1409L18.7278 12.2278" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                    <video src={HeroSection_course_data.video_url} autoPlay={isOpen} muted={!isOpen} controls={isOpen} className='w-full h-full rounded'/>

                  
                        <div className="flex gap-2 mt-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                            >
                                 Go back
                            </button>
                            <a
                             onClick={() => setIsOpen(false)}
                              href={HeroSection_course_data.yt}
                                className="bg-white hover:opacity-90 transition-opacity flex justify-center items-center text-indigo-600 font-semibold w-full py-2 rounded"
                            >
                                Watch on Youtube
                            </a>
                        </div>
                    </div>
                    <ToastContainer />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
};