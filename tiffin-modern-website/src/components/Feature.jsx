import React from 'react'
import image03 from '../assets/img03.png'

const Feature = () => {
  return (
    <div className='pt-[30px]'>
       <div class='md:h-[500px] h-[600px] w-screen bg-white grid md:grid-cols-2 grid-cols-1 items-center justify-items-center md:px-[20px] px-[10px]'>
          <img src={image03} alt='/' className='md:h-[450px] h-[350px] bg-white rounded-3xl hover:scale-110 transition duration-300 ease-in-out' />
          <div className='grid md:grid-rows-2 grid-rows-1 items-center'>
            <h1 className='md:text-[32px] text-[16px] text-[#323232] font-poppins font-bold pb-[30px] md:pb-[0px] .js-show-on-scroll'>Get the food delivered in minutes at the door step and enjoy the meal in hot condition</h1>
            <button className='md:h-[50px] md:w-[140px] h-[40px] w-[120px] bg-[#FFCE54] rounded-full text-[#323232] font-poppins font-medium md:text-[16px] text-[14px]'>Order Now</button>
          </div>
       </div>
    </div>
  )
}

export default Feature