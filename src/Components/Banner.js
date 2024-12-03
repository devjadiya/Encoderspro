import React, { useEffect, useState } from 'react'
import app from './Firebase'
import { getDatabase, ref, set, get, update } from 'firebase/database';
import Lottie from 'react-lottie';
import animationData from './Animations/Animation - 1704651436762.json'; // Replace with your actual animation file
import { Link } from 'react-scroll';


export default () => {
    const [show, setShow] = useState(true)
    const [isPaused, setIsPaused] = useState(false);

    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          // Fetch the fixed time from Firebase Realtime Database
          const database = getDatabase();
          const snapshot = await get(ref(database, '/contact/time/hour'));
          const fixedTime = snapshot.val();
    
          // Calculate the time remaining
          const currentTime = new Date().getTime();
          const timeRemaining = Math.max(0, fixedTime - currentTime);
    
          if (timeRemaining > 0) {
            // Update the state with the initial countdown value
            setCountdown(timeRemaining);
    
            // Start a countdown timer
            const countdownInterval = setInterval(() => {
              setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1000));
    
              // If countdown reaches zero, update the fixed time in the database
              if (countdown === 0) {
                const newFixedTime = new Date("2024-01-18T00:00:00+05:30").getTime();
                update(ref(getDatabase(), 'contact/time'), { hour: newFixedTime });
              }
            }, 1000);
    
            // Clear the interval when the component unmounts or when the countdown reaches zero
            return () => clearInterval(countdownInterval);
          }
        };
    
        fetchData();
      }, []);
    const defaultOptions = {
        loop: true,
        autoplay: !isPaused,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };


    // useEffect to toggle isPaused every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsPaused(prevIsPaused => !prevIsPaused);
        }, 5000); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);
    const targetDate = new Date(); // Use the current date as the starting point
    targetDate.setHours(targetDate.getHours() + 42); // Add 72 hours (3 days) to the current date

    const calculateTimeRemaining = () => {
        const now = new Date();
        const timeRemaining = Math.max(targetDate - now, 0);

        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    };

    const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    return (
        <div className={`${show ? "block  banner" : " hidden"}       bg-bg-orange`}>
            <div className="w-full px-4 py-3 flex  lg:flex-row flex-col lg:items-start items-center justify-center lg:justify-between text-black md:px-8">
                <div className="flex lg:w-3/4 w-full lg:pl-32 px-4  lg:gap-x-4">
                    <div className="lg:w-10 lg:h-10 h-5 w-5 mr-3 lg:mr-0 flex-none rounded-lg mt-2  bg-bg-orange flex items-center justify-center">
                        <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.2986 42.1329C35.4055 42.1804 35.5198 42.204 35.6335 42.204C35.7906 42.204 35.9471 42.1591 36.083 42.0707C36.3172 41.9186 36.4582 41.6582 36.4582 41.3793V6.89653C36.4582 6.61741 36.3169 6.35703 36.0828 6.20494C35.8489 6.05295 35.5535 6.02939 35.2985 6.1429C35.2985 6.14294 35.2984 6.14297 35.2983 6.143L14.6089 15.3383C14.6089 15.3383 14.6089 15.3383 14.6089 15.3383C14.3111 15.4706 14.1191 15.766 14.1191 16.0919V32.1839C14.1191 32.5098 14.3111 32.8052 14.6091 32.9375L35.2986 42.1329ZM34.8088 8.16559V40.1103L15.7686 31.648V16.628L34.8088 8.16559Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M5.74854 33.0085H14.9439C15.3993 33.0085 15.7687 32.6393 15.7687 32.1838V16.0918C15.7687 15.6364 15.3994 15.2671 14.9439 15.2671H5.74854C5.29311 15.2671 4.92383 15.6364 4.92383 16.0918V32.1838C4.92383 32.6393 5.29315 33.0085 5.74854 33.0085ZM14.1192 16.9165V31.359H6.57325V16.9165H14.1192Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M1.15088 29.5604H5.74859C6.20398 29.5604 6.5733 29.1913 6.5733 28.7357V19.5403C6.5733 19.0849 6.20401 18.7156 5.74859 18.7156H1.15088C0.695457 18.7156 0.326172 19.0849 0.326172 19.5403V28.7357C0.326172 29.1913 0.69549 29.5604 1.15088 29.5604ZM4.92387 20.365V27.911H1.9756V20.365H4.92387Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M6.89698 47.9513H12.6441C13.0995 47.9513 13.4688 47.5822 13.4688 47.1266V32.1841C13.4688 31.7285 13.0995 31.3594 12.6441 31.3594H6.89698C6.44158 31.3594 6.07227 31.7285 6.07227 32.1841V47.1266C6.07227 47.5822 6.44158 47.9513 6.89698 47.9513ZM11.8194 33.0088V46.3019H7.72169V33.0088H11.8194Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M12.645 42.2042H16.0933C16.5487 42.2042 16.918 41.835 16.918 41.3794V36.7817C16.918 36.3262 16.5487 35.957 16.0933 35.957H12.645C12.1896 35.957 11.8203 36.3262 11.8203 36.7817V41.3794C11.8203 41.835 12.1896 42.2042 12.645 42.2042ZM15.2686 37.6065V40.5547H13.4697V37.6065H15.2686Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M35.6333 29.5604H36.7827C39.7729 29.5604 42.2051 27.1281 42.2051 24.138C42.2051 21.1478 39.7729 18.7156 36.7827 18.7156H35.6333C35.1777 18.7156 34.8086 19.0849 34.8086 19.5403V28.7357C34.8086 29.1912 35.1778 29.5604 35.6333 29.5604ZM36.7827 27.911H36.458V20.365H36.7827C38.8629 20.365 40.5557 22.0578 40.5557 24.138C40.5557 26.2182 38.8629 27.911 36.7827 27.911Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M30.2109 34.4826C30.2109 34.9382 30.5801 35.3073 31.0357 35.3073C31.4912 35.3073 31.8604 34.9382 31.8604 34.4826V13.793C31.8604 13.3376 31.4912 12.9683 31.0357 12.9683C30.5801 12.9683 30.2109 13.3376 30.2109 13.793V34.4826Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M26.7617 29.8851C26.7617 30.3407 27.1309 30.7098 27.5864 30.7098C28.042 30.7098 28.4111 30.3407 28.4111 29.8851V18.3909C28.4111 17.9355 28.042 17.5662 27.5864 17.5662C27.1309 17.5662 26.7617 17.9355 26.7617 18.3909V29.8851Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M23.3145 26.4368C23.3145 26.8924 23.6838 27.2615 24.1392 27.2615C24.5946 27.2615 24.9639 26.8924 24.9639 26.4368V21.8391C24.9639 21.3837 24.5946 21.0144 24.1392 21.0144C23.6837 21.0144 23.3145 21.3837 23.3145 21.8391V26.4368Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M11.4947 21.2644H9.19581C8.87845 21.2644 8.62109 21.0071 8.62109 20.6897C8.62109 20.3723 8.87845 20.115 9.19581 20.115H11.4947C11.812 20.115 12.0694 20.3723 12.0694 20.6897C12.0694 21.0071 11.812 21.2644 11.4947 21.2644Z" fill="black" />
                            <path d="M11.4947 24.7127H9.19581C8.87845 24.7127 8.62109 24.4554 8.62109 24.1379C8.62109 23.8205 8.87845 23.5632 9.19581 23.5632H11.4947C11.812 23.5632 12.0694 23.8205 12.0694 24.1379C12.0694 24.4554 11.812 24.7127 11.4947 24.7127Z" fill="black" />
                            <path d="M11.4947 28.1609H9.19581C8.87845 28.1609 8.62109 27.9037 8.62109 27.5862C8.62109 27.2687 8.87845 27.0115 9.19581 27.0115H11.4947C11.812 27.0115 12.0694 27.2687 12.0694 27.5862C12.0694 27.9037 11.812 28.1609 11.4947 28.1609Z" fill="black" />
                            <path d="M46.0161 24.6838H49.425C49.8805 24.6838 50.2497 24.3147 50.2497 23.8591C50.2497 23.4037 49.8805 23.0344 49.425 23.0344H46.0161C45.5605 23.0344 45.1914 23.4037 45.1914 23.8591C45.1914 24.3147 45.5606 24.6838 46.0161 24.6838Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M43.9369 19.6605C43.9369 19.6605 43.9369 19.6605 43.9369 19.6605L46.3473 17.2501L46.3474 17.25L46.5241 17.4268L43.9369 19.6605ZM43.9369 19.6605C43.6148 19.9825 43.6148 20.5046 43.9368 20.8267L43.9369 19.6605ZM43.9369 20.8268C43.9369 20.8268 43.9369 20.8268 43.9369 20.8268C44.0978 20.9879 44.3095 21.0683 44.52 21.0683C44.7307 21.0683 44.9423 20.9876 45.1031 20.8268L47.5135 18.4164C47.5135 18.4164 47.5135 18.4164 47.5136 18.4164C47.8357 18.0943 47.8356 17.5722 47.5136 17.2501L43.9369 20.8268Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M47.5136 30.4681C47.3526 30.6293 47.1409 30.7098 46.9305 30.7098C46.72 30.7098 46.5083 30.6293 46.3474 30.4681L46.3472 30.468L43.9368 26.8916C43.9369 26.8915 43.9369 26.8915 43.9369 26.8914C44.2588 26.5694 44.7812 26.5694 45.1031 26.8915C45.1031 26.8915 45.1032 26.8915 45.1032 26.8916L47.5135 29.3019C47.8357 29.6239 47.8357 30.1461 47.5136 30.4681ZM47.5136 30.4681C47.5136 30.4681 47.5135 30.4682 47.5135 30.4682L47.3368 30.2914L47.5137 30.468C47.5137 30.468 47.5136 30.4681 47.5136 30.4681Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M7.47171 10.9195C5.57033 10.9195 4.02344 9.3726 4.02344 7.47123C4.02344 5.56985 5.57033 4.02295 7.47171 4.02295C9.37309 4.02295 10.92 5.56985 10.92 7.47123C10.92 9.3726 9.37309 10.9195 7.47171 10.9195ZM7.47171 5.17237C6.20413 5.17237 5.17286 6.20364 5.17286 7.47123C5.17286 8.73881 6.20413 9.77008 7.47171 9.77008C8.7393 9.77008 9.77056 8.73881 9.77056 7.47123C9.77056 6.20364 8.7393 5.17237 7.47171 5.17237Z" fill="black" />
                            <path d="M43.6783 47.7012C42.0938 47.7012 40.8047 46.4121 40.8047 44.8277C40.8047 43.2432 42.0938 41.9541 43.6783 41.9541C45.2627 41.9541 46.5518 43.2432 46.5518 44.8277C46.5518 46.4121 45.2627 47.7012 43.6783 47.7012ZM43.6783 43.1035C42.7276 43.1035 41.9541 43.877 41.9541 44.8277C41.9541 45.7784 42.7276 46.5518 43.6783 46.5518C44.6289 46.5518 45.4024 45.7784 45.4024 44.8277C45.4024 43.877 44.6289 43.1035 43.6783 43.1035Z" fill="black" />
                            <path d="M44.8272 9.19533C44.1923 9.19533 43.6777 8.68074 43.6777 8.04591C43.6777 7.41108 44.1923 6.89648 44.8272 6.89648C45.462 6.89648 45.9766 7.41108 45.9766 8.04591C45.9766 8.68074 45.462 9.19533 44.8272 9.19533Z" fill="black" />
                            <path d="M27.5869 2.29885C26.9521 2.29885 26.4375 1.78425 26.4375 1.14943C26.4375 0.514598 26.9521 0 27.5869 0C28.2218 0 28.7364 0.514598 28.7364 1.14943C28.7364 1.78425 28.2218 2.29885 27.5869 2.29885Z" fill="black" />
                            <path d="M17.2412 9.19533C16.6064 9.19533 16.0918 8.68074 16.0918 8.04591C16.0918 7.41108 16.6064 6.89648 17.2412 6.89648C17.876 6.89648 18.3906 7.41108 18.3906 8.04591C18.3906 8.68074 17.876 9.19533 17.2412 9.19533Z" fill="black" />
                            <path d="M1.14943 41.3794C0.514598 41.3794 0 40.8648 0 40.23C0 39.5952 0.514598 39.0806 1.14943 39.0806C1.78425 39.0806 2.29885 39.5952 2.29885 40.23C2.29885 40.8648 1.78425 41.3794 1.14943 41.3794Z" fill="black" />
                            <path d="M24.1377 44.8277C23.5029 44.8277 22.9883 44.3131 22.9883 43.6782C22.9883 43.0434 23.5029 42.5288 24.1377 42.5288C24.7725 42.5288 25.2871 43.0434 25.2871 43.6782C25.2871 44.3131 24.7725 44.8277 24.1377 44.8277Z" fill="black" />
                            <path d="M48.2764 39.0803C47.6416 39.0803 47.127 38.5657 47.127 37.9309C47.127 37.2961 47.6416 36.7815 48.2764 36.7815C48.9112 36.7815 49.4258 37.2961 49.4258 37.9309C49.4258 38.5657 48.9112 39.0803 48.2764 39.0803Z" fill="black" />
                            <path d="M16.9922 20.6897C16.9922 21.4626 17.6187 22.0891 18.3916 22.0891C19.1645 22.0891 19.791 21.4626 19.791 20.6897C19.791 19.9168 19.1645 19.2903 18.3916 19.2903C17.6187 19.2903 16.9922 19.9168 16.9922 20.6897Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M16.9922 24.138C16.9922 24.9108 17.6187 25.5374 18.3916 25.5374C19.1645 25.5374 19.791 24.9108 19.791 24.138C19.791 23.3651 19.1645 22.7385 18.3916 22.7385C17.6187 22.7385 16.9922 23.3651 16.9922 24.138Z" fill="black" stroke="black" stroke-width="0.5" />
                            <path d="M16.9922 27.5862C16.9922 28.3591 17.6187 28.9856 18.3916 28.9856C19.1645 28.9856 19.791 28.3591 19.791 27.5862C19.791 26.8133 19.1645 26.1868 18.3916 26.1868C17.6187 26.1868 16.9922 26.8133 16.9922 27.5862Z" fill="black" stroke="black" stroke-width="0.5" />
                        </svg>


                    </div>
                    <p className="lg:py-2  font-medium text-center mt-2 text-sm">
                        <span className=' hidden lg:block'>🚀 Elevate your skills in blockchain development with our exclusive New Year's Discount – </span>  <Link to='enroll' smooth={true} className="font-semibold cursor-pointer underline duration-150 hover:text-indigo-100">Limited time offer for the best-ever rate!</Link>
                    </p>
                </div>
                <div className=' flex flex-row lg:flex-col justify-center items-center'>
                    <p className=' hidden lg:block text-text-black-dark text-xs font-medium'>Offers End in</p>
                    <p className=' text-white font-bold lg:text-2xl text-xl'>
                        {hours} h {minutes} m {seconds} s
                    </p>
                </div>
                <div className='w-24 h-8 hidden lg:block   scale-150'>
                    <Lottie className="scale-150" options={defaultOptions} />
                </div>

                <button className="lg:p-2 rounded-lg duration-150 text-black hover:bg-indigo-500 ring-offset-2 focus:ring">

                </button>
            </div>
        </div>
    )
}