import React from 'react'
import person from '../assets/person1.jpg'
import rating from '../assets/rating.png'
import spoon from '../assets/spoon.png'
import tiffinbox from '../assets/tiffinbox.png'

const Hero = () => {
  return (
    <div className='bg-white md:mx-[60px] mx-[10px] flex items-center justify-items-center'>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-items-center md:ml-[130px] ml-[0px] md:pt-[120px] pt-[60px]'>
        <div className='grid grid-rows-5 justify-center h-[500px] items-center'>
          <h1 className='font-poppins text-[#323232] md:text-[44px] text-[28px] font-bold md:pb-[40px] pb-[5px]'>Fastest Online</h1>
          <h1 className='font-poppins text-[#323232] md:text-[44px] text-[28px] font-bold pb-[140px]'>Food Delivery Service</h1>
          <h4 className='font-poppins font-medium text-[12px] text-[#323232] text-opacity-[40%] pb-[200px]'>The first mobile app for the indian people's who are most interested in home made food with the beneficial of monthly plans. Download the app now and get the home made food at your door step</h4>
          <form className=' pb-[190px]'>   
            <label for="default-search" class="mb-2 text-sm font-poppins font-medium text-[#323232] sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-[#323232] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm font-poppins border border-gray-300 rounded-lg dark:text-[#323232] " placeholder="Search Mockups, Logos..." required></input>
                <button type="submit" class="text-[#323232] absolute right-2.5 bottom-2.5 bg-[#FFCE54] font-poppins focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
          </form>
          <div className='grid grid-cols-3 justify-items-center md:mb-[0px] mb-[80px]'>
            <div className='md:h-[160px] md:w-[160px] h-[100px] w-[100px] bg-white shadow-lg mb-[60px] grid grid-rows-2 items-center justify-items-center rounded-2xl hover:scale-110 transition duration-300 ease-in-out'>
              <img src={rating} alt='/' className='md:h-[60px] md:w-[60px] h-[30px] w-[30px]'/>
              <div className='font-poppins md:text-[16px] text-[10px] text-[#323232] font-bold text-center'>15K Ratings<br/>(4.8)</div>
            </div>
            <div className='md:h-[160px] md:w-[160px] h-[100px] w-[100px] bg-white shadow-lg mb-[60px] grid grid-rows-2 items-center justify-items-center rounded-2xl hover:scale-110 transition duration-300 ease-in-out'>
              <img src={spoon} alt='/' className='md:h-[60px] md:w-[60px] h-[30px] w-[30px]'/>
              <div className='font-poppins md:text-[16px] text-[10px] text-[#323232] font-bold text-center'>3000+<br/>Restaurants</div>
            </div>
            <div className='md:h-[160px] md:w-[160px] h-[100px] w-[100px] bg-white shadow-lg mb-[60px] grid grid-rows-2 items-center justify-items-center rounded-2xl hover:scale-110 transition duration-300 ease-in-out'>
              <img src={tiffinbox} alt='/' className='md:h-[80px] md:w-[80px] h-[40px] w-[40px]'/>
              <div className='font-poppins md:text-[16px] text-[10px] text-[#323232] font-bold text-center'>9000+<br/>Food Items</div>
            </div>
          </div>
        </div>
        <img src={person} alt='/' className='h-[540px] w-[340px] object-cover rounded-full shadow-lg'/>
      </div>
    </div>
  )
}

export default Hero