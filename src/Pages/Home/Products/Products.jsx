import React from 'react';
import backgroundImage from '../../../assets/Deals/Banner.jpg';

export default function Products() {
 

  return (
    <>
    <div className=' relative'>
        <div>
            <img src={backgroundImage} alt=""  className=' h-[350px] w-full'/>
        </div>
        <div className='absolute lg:top-32 top-24 ml-5 lg:ml-10 lg:text-5xl text-4xl font-semibold'>
            <p>Best Products Find Here</p>
        </div>
    </div>
    </>
  );
}
