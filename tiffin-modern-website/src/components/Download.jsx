import React from 'react'
import image05 from '../assets/man.jpg'

const Download = () => {
  return (
    <div className='h-[400px] bg-white'>
        <div className='grid grid-cols-2'>
        <img src={image05} alt='/' className='md:h-[300px] w-[300px] h-[350px] object-cover rounded-full' />
        </div>
    </div>
  )
}

export default Download