import React, { useContext, useEffect, useState } from 'react'
import app from './Firebase'
import { getDatabase, ref, set, get, update } from 'firebase/database';
import User from './Global';
import useRazorpay from "react-razorpay";

export default function Payment(props) {


    const [Razorpay] = useRazorpay();
    const [user, setUser] = useContext(User);
    const[name,setName]= useState(user.name)
    const[email,setEmail]= useState(user.email)
    const[number,setNubmer]= useState(user.number)
    const handle = async () => {
        const email = document.getElementById("email").value;
        const trimmedName = email.split('@')[0].replace(/[^\w\s]/gi, '');

        if (!email) {
            alert('Please fill in all fields.');
            return;
        }

        const userData = {
            email
        };

        const id = email.trim();
        await set(ref(getDatabase(), `contact/${trimmedName}`), userData);
        alert("Your response has been submitted");
        document.getElementById("email").value = "";
    };

    const handlePayment = async (params) => {
        // const order = await createOrder(params); //  Create order on your backend

        const options = {
            key: "rzp_test_iSrDQ8hSu57DE8", 
            amount: "50000",
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: "order_9A33XWu170gUtm", 
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        rzp1.open();
    };
    return (
        <div className=' w-full  flex justify-center items-center lg:px-32 px-4 bg-white'>
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
                        onChange={(e)=> setName(e.target.value)}
                            value={name}
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
                        onChange={(e)=> setEmail(e.target.value)}
                            value={email}
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
                            onChange={(e)=> setNubmer(e.target.value)}
                                id='phone-1'
                                type="number"
                                value={number}
                                placeholder="+91 55 000-000"
                                required
                                className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>

            
                    <button onClick={handlePayment}
                        className="w-full px-4 py-2  bg-bg-logo font-medium  text-white   rounded-lg duration-150"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
