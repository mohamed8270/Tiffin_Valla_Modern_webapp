import React from 'react'
import profile from '../assets/tiffin.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from "react";

const Navbar = () => {

    const [nav, setNav] = useState(true)
    const handleNav = ()=> {
    setNav(!nav)
    }

    const [top, setTop] = useState(true);

    useEffect(() => {
    const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

  return (
    <div className={`bg-white h-[80px] w-full mx-auto fixed z-50 flex-wrap ${!top && `bg-white shadow-xl`}`}>
        <div className='items-center md:mx-[60px] mx-[0px] h-[80px] flex justify-between justify-item-center'>
            <div className='flex items-center'>
                <img class="ring ring-primary ring-offset-base-100 ring-offset-2 ring-[#323232] w-12 h-12 md:ml-0 ml-5 rounded-full bg-[#FFCE54] ring-opacity-[10%]" src={profile} alt="Rounded avatar"/>
                <div className='text-[#323232] font-poppins font-bold md:text-[26px] text-[18px] justify-items-center ml-[20px]'>TIFFIN VALLA</div>
                <ul className='hidden md:flex ml-[20px]'>
                    <button href="#"><li className='text-[14px] font-poppins font-medium text-[#323232] px-[20px] hover:text-opacity-[100%] text-opacity-[50%]'>Our vision</li></button>
                    <button href="#"><li className='text-[14px] font-poppins font-medium text-[#323232] px-[20px] hover:text-opacity-[100%] text-opacity-[50%]'>Partner with us</li></button>
                    <button href="#"><li className='text-[14px] font-poppins font-medium text-[#323232] px-[20px] hover:text-opacity-[100%] text-opacity-[50%]'>Blog</li></button>
                </ul>
            </div>
            <div>
            <div className='flex items-center pr-[20px] md:pr-[0px]'>
                <button className='text-[14px] font-poppins font-semibold text-[#323232] bg-[#FFCE54] h-[50px] w-[140px] rounded-lg invisible md:visible hover:text-[#FFCE54] hover:bg-[#323232] transition-all duration-200 ease-linear'>Download App</button>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} className='text-[#323232] hover:text-opacity-[50%]'/> : <AiOutlineMenu size={20} className='text-[#323232] hover:text-opacity-[50%]'/>}
                </div>
            </div>
             <div className={!nav ? 'fixed left-0 top-0 z-10 w-[55%] h-full bg-[#FFCE54] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500' }>
                <h1 className='w-full text-3xl font-bold text-[#323232]'>TIFFIN VALLA.</h1>
                <ul className='p-4 text-[#323232] opacity-90'>
                    <li className='p-4 font-medium font-poppins'>Our vision</li>
                    <li className='p-4 font-medium font-poppins'>Explore</li>
                    <li className='p-4 font-medium font-poppins'>Valla's</li>
                    <li className='p-4 font-medium font-poppins'>About</li>
                    <li className='p-4 font-medium font-poppins'>Blog</li>
                </ul>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar