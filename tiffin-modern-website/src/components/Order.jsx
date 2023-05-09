import React from 'react'
import image04 from '../assets/img04.png'

const Order = () => {
  return (
    <div className='md:pt-[80px] pt-[20px]'>
       <div class='md:h-[500px] h-[750px] w-screen bg-white grid md:grid-cols-2 grid-cols-1 items-center justify-items-center md:px-[20px] px-[10px]'>
          <img src={image04} alt='/' className='md:h-[450px] h-[350px] bg-white rounded-3xl hover:scale-110 transition duration-300 ease-in-out' />
          <div className='grid md:grid-rows-2 grid-rows-1 items-center'>
            <h1 className='md:text-[32px] text-[16px] text-[#323232] font-poppins font-bold pb-[30px] md:pb-[0px] md:w-[600px] w-[px]'>Get major advantages by selecting variuos plans in our app and Enjoy! the delicious Indian Foods without any delay</h1>
            <div className='grid grid-cols-3'>
                <div className='md:h-[180px] md:w-[180px] h-[170px] w-[115px] bg-white rounded-lg shadow-xl hover:scale-110 transition duration-300 ease-in-out'>
                    <div className='p-[10px]'>
                        <h1 className='md:text-[26px] text-[18px] font-poppins font-semibold text-[#323232]'>Starter</h1>
                        <p className='md:text-[10px] text-[8px] font-poppins font-medium text-[#323232] text-opacity-40'>No Offers Included</p>
                        <h1 className='font-poppins text-[26px] font-bold text-[#FFCE54] pt-[20px] hover:text-[#323232]'>₹70<span className='font-poppins font-medium md:text-[10px] text-[8px] text-[#323232] text-opacity-40'>/Month</span> </h1>
                    </div>
                    <div className='md:pt-[8px] pt-[12px]'>
                        <button className='h-[40px] md:w-[180px] w-[115px] bg-[#FFCE54] text-[#323232] font-poppins font-semibold justify-center rounded-b-lg'>Start Plan</button>
                    </div>
                </div>
                <div className='md:h-[180px] md:w-[180px] h-[170px] w-[115px] bg-white rounded-lg shadow-xl hover:scale-110 transition duration-300 ease-in-out'>
                    <div className='p-[10px]'>
                        <h1 className='md:text-[26px] text-[18px] font-poppins font-semibold text-[#323232]'>Pro</h1>
                        <p className='md:text-[10px] text-[8px] font-poppins font-medium text-[#323232] text-opacity-40'>Festival Offers</p>
                        <h1 className='font-poppins text-[26px] font-bold text-[#FFCE54] pt-[20px] hover:text-[#323232]'>₹450<span className='font-poppins font-medium md:text-[10px] text-[8px] text-[#323232] text-opacity-40'>/Month</span> </h1>
                    </div>
                    <div className='md:pt-[8px] pt-[12px]'>
                        <button className='h-[40px] md:w-[180px] w-[115px] bg-[#FFCE54] text-[#323232] font-poppins font-semibold justify-center rounded-b-lg'>Start Plan</button>
                    </div>
                </div>
                <div className='md:h-[180px] md:w-[180px] h-[170px] w-[115px] bg-white rounded-lg shadow-xl hover:scale-110 transition duration-300 ease-in-out'>
                    <div className='p-[10px]'>
                        <h1 className='md:text-[26px] text-[18px] font-poppins font-semibold text-[#323232]'>Unlimited</h1>
                        <p className='md:text-[10px] text-[8px] font-poppins font-medium text-[#323232] text-opacity-40'>Unlimited Offers</p>
                        <h1 className='font-poppins text-[26px] font-bold text-[#FFCE54] pt-[20px] hover:text-[#323232]'>₹1900<span className='font-poppins font-medium md:text-[10px] text-[8px] text-[#323232] text-opacity-40'>/Month</span> </h1>
                    </div>
                    <div className='md:pt-[8px] pt-[12px]'>
                        <button className='h-[40px] md:w-[180px] w-[115px] bg-[#FFCE54] text-[#323232] font-poppins font-semibold justify-center rounded-b-lg'>Start Plan</button>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Order