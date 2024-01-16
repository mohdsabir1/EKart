import React from 'react'
import { Carousel } from 'flowbite-react';
import Banner1 from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner2.jpg'
import Banner3 from '../../assets/banner3.jpg'
export default function Banner() {
  return (
    <>
    <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-96">
      <Carousel slideInterval={3000}>
        <img src={Banner3} alt="..." />
        <img src={Banner3} alt="..." />
        <img src={Banner3} alt="..." />
        
      </Carousel>
    </div>
    <div className='   text-center h-24 sm:h-14 xl:h-[90px] 2xl:h-96 border w-full '>
        <p className=' align-middle lg:mt-5 mt-3 lg:text-5xl text-2xl font-medium'>Shipping All over India</p>
    </div>
    </>
 
  )}



