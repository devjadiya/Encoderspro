import React, { useRef ,useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { HeroSection_course_data } from './Data'
import { useNavigate } from 'react-router-dom'
import User from './Global'
export default () => {
    const refs = useRef(null)
    const [user, setUser] = useContext(User);
    const navigate = useNavigate()

    const handle = async () => { }
    //     const name = document.getElementById("name").value;
    //     const message = document.getElementById("msg").value;
    //     const number = document.getElementById("number").value;
    //     const email = document.getElementById("email").value;


    //     if (!name || !number || !message || !email) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }
    //     const userData = {
    //         name,
    //         number,
    //         message,
    //         email


    //     };
    //     await set(ref(getDatabase(), contact/${name}), userData);
    //     alert("Your response has been submitted")
    //     document.getElementById("name").value = "";
    //     document.getElementById("msg").value = "";
    //     document.getElementById("number").value = "";
    //     document.getElementById("email").value = "";
    // }
    // const scalePro = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    // const opacityPro = useTransform(scrollYProgress, [0, 1], [1, 1]);
    // const rounded = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const Submit = () => {
        var name = document.getElementById("name-1").value;
        var phone = document.getElementById("phone-1").value;
        var email = document.getElementById("email-1").value;

    

        if (name && phone && email) {
           setUser({
            name:name,number:phone,email:email,
           })

            navigate('/payment')
        
        } else {
            toast.warn("Please fill in all the fields😏");
        }

    }

    return (
        <>
            <div id='enroll' ref={refs} style={{
                // scale: scalePro,
                // opacity: opacityPro,
                // borderRadius:rounded
            }} className='flex flex-col lg:h-[120vh] justify-center items-center my-16  lg:px-32 lg:py-10'>
                <div className=' bg-white  overflow-hidden h-full w-full flex'>
                    <div className=' lg:w-3/5 h-full overflow-hidden hidden lg:block'>

                        <video autoPlay muted loop src='images/contact_video.mp4' className="w-full h-screen object-cover" />

                    </div>
                    <div className=' lg:w-2/5 h-full w-full text-black '>
                        <div className=" flex-1 mx-auto px-8 py-10 text-gray-600">
                            <h1 className='text-black text-3xl font-semibold my-5'>Enroll Now</h1>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-2 "
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name
                                    </label>
                                    <input
                                        id='name-1'
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        id='email-1'
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
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
                                                <option>US</option>
                                                <option>MR</option>
                                            </select>
                                        </div>
                                        <input
                                            id='phone-1'
                                            type="number"
                                            placeholder="+91 55 000-000"
                                            required
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-medium">
                                        Message
                                    </label>
                                    <textarea id='msg-1' required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                                </div>
                                <button onClick={Submit}
                                    className="w-full px-4 py-2  bg-bg-logo font-medium  text-white   rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div></div>

            </div>
        </>
    )
}