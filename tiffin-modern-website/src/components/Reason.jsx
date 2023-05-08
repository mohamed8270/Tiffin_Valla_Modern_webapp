import React from 'react'
import image02 from '../assets/img02.png'
import { IoIosTimer, IoIosList, IoIosPeople, IoMdDoneAll } from "react-icons/io";

const Reason = () => {
  return (
    <div className='md:pt-[10px] pt-[0px] md:h-[400px] w-screen h-[750px] bg-white items-center justify-center justify-items-center'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-items-center md:px-[60px] px-[0px]'>
            <div className='grid grid-rows-2 items-center md:w-[550px] w-screen md:pl-[0px] pl-[10px]'>
                <h1 className='font-poppins font-bold md:text-[32px] text-[16px] text-[#323232]'>A very simple process to make order your favorite foods from your Local</h1>
                <div className='grid grid-rows-4 items-center pb-[10px]'>
                    <div className='flex grid-cols-2 pb-[20px] items-center'>
                        <IoIosTimer size={20} className='text-[#323232] text-opacity-[60%]'/>
                        <h3 className='font-poppins font-medium text-[14px] text-[#323232] pl-[20px] text-opacity-[40%]'>Fastest Food Delivery</h3>
                    </div>
                    <div className='flex grid-cols-2 pb-[20px] items-center'>
                        <IoIosList size={20} className='text-[#323232] text-opacity-[60%]'/>
                        <h3 className='font-poppins font-medium text-[14px] text-[#323232] pl-[20px] text-opacity-[40%]'>Monthly Plans Available</h3>
                    </div>
                    <div className='flex grid-cols-2 pb-[20px] items-center'>
                        <IoIosPeople size={20} className='text-[#323232] text-opacity-[60%]'/>
                        <h3 className='font-poppins font-medium text-[14px] text-[#323232] pl-[20px] text-opacity-[40%]'>Hygiene & Healthy</h3>
                    </div>
                    <div className='flex grid-cols-2 pb-[20px] items-center'>
                        <IoMdDoneAll size={20} className='text-[#323232] text-opacity-[60%]'/>
                        <h3 className='font-poppins font-medium text-[14px] text-[#323232] pl-[20px] text-opacity-[40%]'>Well Preserved Tiffins</h3>
                    </div>
                </div>
            </div>
            <img src={image02} alt='/' className='md:h-[450px] h-[350px] bg-white rounded-3xl hover:scale-110 transition duration-300 ease-in-out'/>
        </div>
    </div>
  )
}

export default Reason