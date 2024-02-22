import Logo from './assets/images/logo.webp';
import React, { useState } from 'react';


    

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div className="header">
            <nav className="container mx-auto py-4">
                <div className=" flex justify-between items-center px-4  py-5 lg:py-2 md:px-0">
                    <div id="logo" className="logo">
                        <a href="..."><img src={Logo} alt="syche" className="w-40 md:w-60 "></img></a>
                    </div>
                    <button onClick={toggleNavbar} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class={`${ isOpen ? 'hidden' : 'block' } w-6 h-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class={`${ isOpen ? 'block' : 'hidden' } w-6 h-6`}   viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                    <div id="nav-items" className="hidden lg:flex items-center">
                        <ul className ="block lg:flex  lg:flex-row lg:gap-8 xl:gap-12 font-medium text-xl text-white">
                            <li><a className="hover:text-2xl transition-all hover:border-b-2 border-[#3a1978]" href="...">Services</a></li>
                            <li><a className="hover:text-2xl transition-all hover:border-b-2 border-[#3a1978]" href="...">Blogs</a></li>
                            <li><a className="hover:text-2xl transition-all hover:border-b-2 border-[#3a1978]" href="...">Pricing</a></li>
                        </ul>
                    </div>
                    <div id="top-cta" className="hidden lg:block"> 
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                            Get Started
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                </div>                
            </nav>
            <div className= {`${ isOpen ? 'block' : 'hidden' } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 w-4/6 p-10 rounded-xl shadow-xl shadow-slate-50 transition-all shadow-md lg:hidden`} >
                <ul className ="font-medium text-xl text-white text-center">
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">Home</a></li>
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">About</a></li>
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">Services</a></li>
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">Blogs</a></li>
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">Career</a></li>
                    <li className="p-2 px-8 "><a className="hover:text-[#3a1978] hover:border-b-2 border-[#3a1978]" href="...">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;