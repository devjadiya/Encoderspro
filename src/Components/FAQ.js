import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What is the refund policy?",
            a: "Customer satisfaction is our first priority. If you are not satisfied with the course, send a mail to encoderspro@gmail.com with the reason for refund and your feedback on the course with the subject line encoderspro – Refund” , within 7 days of purchasing the course. Your refund will be processed immediately."
        },
        {
            q: " How do I get my doubts resolved? ",
            a: " Our state-of-the-art doubt support platform is the fastest in the industry. We have expert instructors, industry mentors, and a huge team of Teaching Assistants.  You can raise doubts through a portal we will connect you via chat, voice notes or voice call for your doubt resolution."
        },
        {
            q: " Do I need a computer science background to enrol for this course? ",
            a: " No. This is not a prerequisite. We have seen learners from all types of backgrounds (Engineering, Bachelor of Sciences, BCA/MCA, Arts, Business, and so on) take up our courses and have successful tech careers thereafter. "
        },
        {
            q: " In which language are the courses taught? ",
            a: " Certain popular courses come with the option for both English or Hinglish. The rest of the courses are in English. You can find more details in the specific course pages. "
        },
        {
            q: "On what basis are the certificates rolled out?",
            a: "The certificates are rolled out as and when you complete a course. "
        }
    ]
  
    return (
        <section id="faq" className="leading-relaxed  fa  w-full  bg-white flex justify-center items-center flex-col py-20 lg:py-0  lg:h-[120vh] px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked
                 <span className="text-3xl text-text-logo font-semibold"> Questions</span></h1>
               
            </div>
            <div className="mt-14 max-w-2xl mx-auto ">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}