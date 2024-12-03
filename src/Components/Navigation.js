import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import Banner from './Banner';

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Overview", path: "course" },
       
        { title: "Content", path: "content" },
  
        { title: "Certificate", path: "certificate" },
        { title: "FAQ", path: "faq" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <nav className={`bg-white shadow-md  nav-1  w-full z-40 md:text-sm ${state ? "shadow-lg rounded-xl border  mt-2 md:shadow-none md:border-none  md:mt-0" : ""}`}>

           
            <div className="lg:gap-x-14 items-center  w-full mx-auto pr-4 pl-4 lg:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link className='cursor-pointer' to={"home"}>
                        <svg width="260" height="32" viewBox="0 0 260 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#5A30FF" />
                            <path d="M23.3486 21.0648C23.3486 15.7283 23.3486 12.7364 23.3486 7.3999H8.8139V23.3418M23.3486 21.0648V24.7999C23.3486 24.7999 11.8951 24.7999 10.0658 24.7999C9.28576 24.7999 8.89088 24.1209 8.8139 23.3418M23.3486 21.0648C23.3486 21.0648 11.6061 21.0648 10.0658 21.0648C9.18218 21.0648 8.71035 22.2938 8.8139 23.3418M22.193 22.8868H10.0658M17.9579 10.3151L14.3003 17.8763" stroke="white" stroke-linecap="round" />
                            <path d="M13.7224 12.228L11.7974 14.05L13.7224 15.9631" stroke="white" stroke-linecap="round" />
                            <path d="M18.7278 15.9629L20.6528 14.1409L18.7278 12.2278" stroke="white" stroke-linecap="round" />
                            <path d="M44.321 26V8.54545H56.4915V11.9716H48.5398V15.5511H55.8693V18.9858H48.5398V22.5739H56.4915V26H44.321ZM73.9886 8.54545V26H70.4091L63.4631 15.9261H63.3523V26H59.1335V8.54545H62.7642L69.6335 18.6023H69.7784V8.54545H73.9886ZM92.4851 14.8693H88.2237C88.1669 14.4318 88.0504 14.0369 87.8743 13.6847C87.6982 13.3324 87.4652 13.0312 87.1754 12.7812C86.8857 12.5312 86.5419 12.3409 86.1442 12.2102C85.7521 12.0739 85.3175 12.0057 84.8402 12.0057C83.9936 12.0057 83.2635 12.2131 82.6499 12.6278C82.0419 13.0426 81.5732 13.642 81.2436 14.4261C80.9197 15.2102 80.7578 16.1591 80.7578 17.2727C80.7578 18.4318 80.9226 19.4034 81.2521 20.1875C81.5874 20.9659 82.0561 21.554 82.6584 21.9517C83.2663 22.3437 83.9851 22.5398 84.8146 22.5398C85.2805 22.5398 85.7038 22.4801 86.0845 22.3608C86.4709 22.2415 86.8089 22.0682 87.0987 21.8409C87.3942 21.608 87.6357 21.3267 87.8232 20.9972C88.0163 20.6619 88.1499 20.2841 88.2237 19.8636L92.4851 19.8892C92.4112 20.6619 92.1868 21.4233 91.8118 22.1733C91.4425 22.9233 90.9339 23.608 90.2862 24.2273C89.6385 24.8409 88.8487 25.3295 87.9169 25.6932C86.9908 26.0568 85.9283 26.2386 84.7294 26.2386C83.1499 26.2386 81.7351 25.892 80.4851 25.1989C79.2408 24.5 78.2578 23.483 77.5362 22.1477C76.8146 20.8125 76.4538 19.1875 76.4538 17.2727C76.4538 15.3523 76.8203 13.7244 77.5533 12.3892C78.2862 11.054 79.2777 10.0398 80.5277 9.34659C81.7777 8.65341 83.1783 8.30682 84.7294 8.30682C85.7862 8.30682 86.7635 8.45455 87.6612 8.75C88.5589 9.03977 89.3487 9.46591 90.0305 10.0284C90.7124 10.5852 91.2663 11.2699 91.6925 12.0824C92.1186 12.8949 92.3828 13.8239 92.4851 14.8693ZM111.374 17.2727C111.374 19.1932 111.004 20.821 110.266 22.1562C109.527 23.4915 108.527 24.5057 107.266 25.1989C106.01 25.892 104.601 26.2386 103.038 26.2386C101.47 26.2386 100.058 25.8892 98.8026 25.1903C97.5469 24.4915 96.5497 23.4773 95.8111 22.1477C95.0781 20.8125 94.7116 19.1875 94.7116 17.2727C94.7116 15.3523 95.0781 13.7244 95.8111 12.3892C96.5497 11.054 97.5469 10.0398 98.8026 9.34659C100.058 8.65341 101.47 8.30682 103.038 8.30682C104.601 8.30682 106.01 8.65341 107.266 9.34659C108.527 10.0398 109.527 11.054 110.266 12.3892C111.004 13.7244 111.374 15.3523 111.374 17.2727ZM107.061 17.2727C107.061 16.1364 106.899 15.1761 106.575 14.392C106.257 13.608 105.797 13.0142 105.195 12.6108C104.598 12.2074 103.879 12.0057 103.038 12.0057C102.203 12.0057 101.484 12.2074 100.882 12.6108C100.28 13.0142 99.8168 13.608 99.4929 14.392C99.1747 15.1761 99.0156 16.1364 99.0156 17.2727C99.0156 18.4091 99.1747 19.3693 99.4929 20.1534C99.8168 20.9375 100.28 21.5312 100.882 21.9347C101.484 22.3381 102.203 22.5398 103.038 22.5398C103.879 22.5398 104.598 22.3381 105.195 21.9347C105.797 21.5312 106.257 20.9375 106.575 20.1534C106.899 19.3693 107.061 18.4091 107.061 17.2727ZM120.288 26H113.837V8.54545H120.28C122.058 8.54545 123.589 8.89489 124.874 9.59375C126.163 10.2869 127.158 11.2869 127.857 12.5938C128.555 13.8949 128.905 15.4517 128.905 17.2642C128.905 19.0824 128.555 20.6449 127.857 21.9517C127.163 23.2585 126.172 24.2614 124.882 24.9602C123.592 25.6534 122.061 26 120.288 26ZM118.055 22.4034H120.126C121.104 22.4034 121.93 22.2386 122.607 21.9091C123.288 21.5739 123.803 21.0312 124.149 20.2812C124.501 19.5256 124.678 18.5199 124.678 17.2642C124.678 16.0085 124.501 15.0085 124.149 14.2642C123.797 13.5142 123.277 12.9744 122.589 12.6449C121.908 12.3097 121.067 12.142 120.067 12.142H118.055V22.4034ZM131.368 26V8.54545H143.538V11.9716H135.587V15.5511H142.916V18.9858H135.587V22.5739H143.538V26H131.368ZM146.18 26V8.54545H153.391C154.697 8.54545 155.825 8.78125 156.774 9.25284C157.729 9.71875 158.464 10.3892 158.982 11.2642C159.499 12.1335 159.757 13.1648 159.757 14.358C159.757 15.5682 159.493 16.5966 158.964 17.4432C158.436 18.2841 157.686 18.9261 156.714 19.3693C155.743 19.8068 154.592 20.0256 153.263 20.0256H148.703V16.7017H152.479C153.115 16.7017 153.646 16.6193 154.072 16.4545C154.504 16.2841 154.831 16.0284 155.053 15.6875C155.274 15.3409 155.385 14.8977 155.385 14.358C155.385 13.8182 155.274 13.3722 155.053 13.0199C154.831 12.6619 154.504 12.3949 154.072 12.2188C153.641 12.0369 153.109 11.946 152.479 11.946H150.399V26H146.18ZM156.007 18.0227L160.354 26H155.751L151.49 18.0227H156.007ZM171.506 13.7784C171.449 13.1534 171.196 12.6676 170.747 12.321C170.304 11.9688 169.67 11.7926 168.847 11.7926C168.301 11.7926 167.847 11.8636 167.483 12.0057C167.119 12.1477 166.847 12.3438 166.665 12.5938C166.483 12.8381 166.389 13.1193 166.384 13.4375C166.372 13.6989 166.423 13.929 166.537 14.1278C166.656 14.3267 166.827 14.5028 167.048 14.6562C167.276 14.804 167.548 14.9347 167.866 15.0483C168.185 15.1619 168.543 15.2614 168.94 15.3466L170.44 15.6875C171.304 15.875 172.065 16.125 172.724 16.4375C173.389 16.75 173.946 17.1222 174.395 17.554C174.849 17.9858 175.193 18.483 175.426 19.0455C175.659 19.608 175.778 20.2386 175.784 20.9375C175.778 22.0398 175.5 22.9858 174.949 23.7756C174.398 24.5653 173.605 25.1705 172.571 25.5909C171.543 26.0114 170.301 26.2216 168.847 26.2216C167.386 26.2216 166.114 26.0028 165.028 25.5653C163.943 25.1278 163.099 24.4631 162.497 23.571C161.895 22.679 161.585 21.5511 161.568 20.1875H165.608C165.642 20.75 165.793 21.2188 166.06 21.5938C166.327 21.9688 166.693 22.2528 167.159 22.446C167.631 22.6392 168.176 22.7358 168.795 22.7358C169.364 22.7358 169.847 22.6591 170.244 22.5057C170.648 22.3523 170.957 22.1392 171.173 21.8665C171.389 21.5937 171.5 21.2812 171.506 20.929C171.5 20.5994 171.398 20.3182 171.199 20.0852C171 19.8466 170.693 19.642 170.278 19.4716C169.869 19.2955 169.347 19.1335 168.71 18.9858L166.886 18.5597C165.375 18.2131 164.185 17.6534 163.315 16.8807C162.446 16.1023 162.014 15.0511 162.02 13.7273C162.014 12.6477 162.304 11.7017 162.889 10.8892C163.474 10.0767 164.284 9.44318 165.318 8.98864C166.352 8.53409 167.531 8.30682 168.855 8.30682C170.207 8.30682 171.381 8.53693 172.375 8.99716C173.375 9.4517 174.151 10.0909 174.702 10.9148C175.253 11.7386 175.534 12.6932 175.545 13.7784H171.506ZM177.915 26V8.54545H185.125C186.432 8.54545 187.56 8.80114 188.509 9.3125C189.463 9.81818 190.199 10.5256 190.716 11.4347C191.233 12.3381 191.491 13.3892 191.491 14.5881C191.491 15.7926 191.227 16.8466 190.699 17.75C190.176 18.6477 189.429 19.3437 188.457 19.8381C187.486 20.3324 186.332 20.5795 184.997 20.5795H180.548V17.2557H184.213C184.849 17.2557 185.381 17.1449 185.807 16.9233C186.239 16.7017 186.565 16.392 186.787 15.9943C187.009 15.5909 187.119 15.1222 187.119 14.5881C187.119 14.0483 187.009 13.5824 186.787 13.1903C186.565 12.7926 186.239 12.4858 185.807 12.2699C185.375 12.054 184.844 11.946 184.213 11.946H182.134V26H177.915ZM193.571 26V8.54545H200.781C202.088 8.54545 203.216 8.78125 204.165 9.25284C205.119 9.71875 205.855 10.3892 206.372 11.2642C206.889 12.1335 207.148 13.1648 207.148 14.358C207.148 15.5682 206.884 16.5966 206.355 17.4432C205.827 18.2841 205.077 18.9261 204.105 19.3693C203.134 19.8068 201.983 20.0256 200.653 20.0256H196.094V16.7017H199.869C200.506 16.7017 201.037 16.6193 201.463 16.4545C201.895 16.2841 202.222 16.0284 202.443 15.6875C202.665 15.3409 202.776 14.8977 202.776 14.358C202.776 13.8182 202.665 13.3722 202.443 13.0199C202.222 12.6619 201.895 12.3949 201.463 12.2188C201.031 12.0369 200.5 11.946 199.869 11.946H197.79V26H193.571ZM203.398 18.0227L207.744 26H203.142L198.881 18.0227H203.398ZM225.936 17.2727C225.936 19.1932 225.567 20.821 224.828 22.1562C224.089 23.4915 223.089 24.5057 221.828 25.1989C220.572 25.892 219.163 26.2386 217.601 26.2386C216.033 26.2386 214.621 25.8892 213.365 25.1903C212.109 24.4915 211.112 23.4773 210.374 22.1477C209.641 20.8125 209.274 19.1875 209.274 17.2727C209.274 15.3523 209.641 13.7244 210.374 12.3892C211.112 11.054 212.109 10.0398 213.365 9.34659C214.621 8.65341 216.033 8.30682 217.601 8.30682C219.163 8.30682 220.572 8.65341 221.828 9.34659C223.089 10.0398 224.089 11.054 224.828 12.3892C225.567 13.7244 225.936 15.3523 225.936 17.2727ZM221.624 17.2727C221.624 16.1364 221.462 15.1761 221.138 14.392C220.82 13.608 220.359 13.0142 219.757 12.6108C219.161 12.2074 218.442 12.0057 217.601 12.0057C216.766 12.0057 216.047 12.2074 215.445 12.6108C214.842 13.0142 214.379 13.608 214.055 14.392C213.737 15.1761 213.578 16.1364 213.578 17.2727C213.578 18.4091 213.737 19.3693 214.055 20.1534C214.379 20.9375 214.842 21.5312 215.445 21.9347C216.047 22.3381 216.766 22.5398 217.601 22.5398C218.442 22.5398 219.161 22.3381 219.757 21.9347C220.359 21.5312 220.82 20.9375 221.138 20.1534C221.462 19.3693 221.624 18.4091 221.624 17.2727Z" fill="#2E2D2D" />
                        </svg>



                    </Link>
                    <div className="md:hidden">
                        <button className="menu-btn text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0  md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="  text-text-logo text-lg cursor-pointer font-semibold  hover:bg-bg-logo-light px-3 rounded py-1.5">
                                        <Link smooth={true} duration={2000} to={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 my-3 lg:my-0 md:flex md:space-y-0 md:mt-0">

                        <Link to='enroll' smooth={true} duration={2000} className="flex cursor-pointer items-center font-semibold justify-center gap-x-1 py-2.5 px-6  text-white  text-lg   bg-bg-logo   rounded md:inline-flex">
                            Enroll Now

                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}