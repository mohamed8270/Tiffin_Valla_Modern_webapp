import React from 'react'
import profile from '../assets/tiffin.png'
import { GrFacebookOption, GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr";
import  playstore  from "../assets/googleplay.png";
import  appstore  from "../assets/appstore.png";

const Footer = () => {
  return (
    <div className='h-[400px] bg-[#F8F8F8] mt-[100px]'>
    <div className='grid md:grid-cols-5 grid-cols-2 pt-[60px]'>
        <img class=" w-20 h-20 ml-7 rounded-full bg-[#FFCE54] ring-opacity-[10%]" src={profile} alt="Rounded avatar"/>
        <div className='grid grid-rows-4'>
            <h1 className='text-[16px] font-poppins font-medium text-[#323232] mb-[25px]'>Company</h1>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>About us</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Team</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Blog</p>
        </div>
        <div className='grid grid-rows-4 md:pl-[0px] pl-[20px]'>
            <h1 className='text-[16px] font-poppins font-medium text-[#323232] mb-[25px]'>Contact us</h1>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Help & Support</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Location</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Partner with us</p>
        </div>
        <div className='grid grid-rows-4'>
            <h1 className='text-[16px] font-poppins font-medium text-[#323232] mb-[25px]'>Learn more</h1>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Privacy</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Security</p>
            <p className='text-[12px] font-poppins font-regular text-[#323232] text-opacity-[60%] mb-[15px]'>Terms</p>
        </div>
        <div className='grid grid-rows-3 md:pl-[0px] pl-[20px]'>
            <h1 className='text-[16px] font-poppins font-medium text-[#323232] mb-[25px]'>Socials</h1>
            <div className='grid grid-cols-4'>
                <GrFacebookOption size={20} className='fill-[#323232]'/>
                <GrInstagram size={20} className='fill-[#323232]'/>
                <GrYoutube size={20} className='fill-[#323232]'/>
                <GrTwitter size={20} className='fill-[#323232]'/>
            </div>
            <div className='grid grid-cols-2'>
                <img src={playstore} alt="/" className='md:h-[80px] h-[50px] ' />
                <img src={appstore} alt="/" className='md:h-[40px] h-[30px] md:mt-[20px] mt-[10px]'/>
            </div>
        </div>
    </div>
    <div className='flex items-center justify-center justify-items-center mt-[60px]'>
        <p className='font-poppins text-[12px] text-[#323232] text-opacity-[40%] font-medium'>Copyright 2022 TiffinValla.com all rights reserved</p>
    </div>
</div>
  )
}

export default Footer