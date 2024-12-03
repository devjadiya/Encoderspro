import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HeroSection_course_data } from "./Data";
const SpringModal = ({ isOpen, setIsOpen }) => {


    const Submit = () => {
        var name = document.getElementById("name-2").value;
        var phone = document.getElementById("phone-2").value;
        var email = document.getElementById("email-2").value;

        if (document.cookie.includes("formSubmitted=true")) {
            toast.warn("we already got your response!");
            return;
        }

        if (name && phone && email) {
            var formData = {
                name: name,
                phone: phone,
                email: email,

            };

            // Make a POST request to Google Apps Script
            fetch(`${HeroSection_course_data.app_script_link}`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            })
            .then(response =>{
                const expirationDate = new Date();
                expirationDate.setMonth(expirationDate.getMonth() + 1);
    
                document.cookie = `formSubmitted=true; expires=${expirationDate.toUTCString()}`;
                    toast.success("Your Response submitted successfully🥳")
                    window.location.href = `${HeroSection_course_data.Download_broucher_link}`;

            document.getElementById("name-2").value = "";
            document.getElementById("phone-2").value = "";
            document.getElementById("email-2").value = "";}
            )

             
                .catch (error => {
    toast.error('Error submitting form 😏 ');

});


        } else {
    toast.warn("Please fill in all the fields😏");
}

    }
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
                        <h3 className="text-3xl font-bold text-center mb-2">
                            One more thing!
                        </h3>
                        <div className="mt-2">
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                id='name-2'
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2  text-text-black-dark bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                id='email-2'
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-text-black-dark bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mt-2">
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
                                    id='phone-2'
                                    type="number"
                                    placeholder=""
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>

                        </div>
                        <div className="flex gap-2 mt-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                            >
                                Nah, go back
                            </button>
                            <button
                                onClick={Submit}
                                className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                            >
                                Download Broucher
                            </button>
                        </div>
                    </div>
                    <ToastContainer />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
};

export default SpringModal