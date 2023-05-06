import React from 'react'
import image05 from '../assets/women.jpg'
import image06 from '../assets/googleplay.png'
import image07 from '../assets/appstore.png'

const Download = () => {
  return (
    <div className='md:h-[400px] h-[800px] bg-white'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-items-center pt-[60px] md:pl-[140px] pl-[10px]'>
          <div className='grid grid-rows-3 items-center'>
            <h1 className='font-poppins text-[#323232] md:text-[38px] text-[24px] font-bold'>It's Now More Easy to Order by Our Mobile App</h1>
            <p className='font-poppins text-[#323232] text-opacity-40 md:w-[600px] w-[360px] md:text-left text-justify font-medium text-[14px]'>Download the app now and get the delcious home made food at your door step without any hesitation by our beneficial plans. Get the app now start ordering today</p>
            <div className='grid grid-cols-2 items-center md:mr-[300px] mr-[30px]'>
              <img src={image06} alt='/' className='md:h-[100px] h-[80px] object-cover' />
              <img src={image07} alt='/' className='md:h-[60px] h-[50px]  object-cover' />
            </div>
          </div>
          <img src={image05} alt='/' className='md:h-[350px] md:w-[350px] h-[250px] w-[250px] object-cover' />
        </div>
    </div>
  )
}

export default Download