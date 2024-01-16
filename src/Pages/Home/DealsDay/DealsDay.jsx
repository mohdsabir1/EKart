import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DealsDayData from './DealsDayData';

export default function DealsDay() {
  const navigate = useNavigate()
  const handleClick = (id)=>
  {
    navigate(`/productdetails/${id}`)

  }
 

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='pl-14 pr-14 lg:mt-10'>
        <p className='font-bold text-3xl mb-4'>Deals of the Day</p>
        <Slider {...settings} className=' '>
          {DealsDayData.map((item) => (
            
            <div key={item.id} className='rounded-md  p-4  transition-all duration-500 hover:shadow-lg '>
              <div className='overflow-hidden  '>
              <img
                src={item.img}
                alt=''
                className='w-96 z-0 h-56 rounded-lg  hover:scale-110 hover:scale-y-110  transition-all duration-300'
              />
              </div>
            
              <p className='text-center mt-5'>{item.summary}</p>
              <div className='text-center mb-5'>
                <button
                  onClick={() => handleClick(item.id)}
                  className='mt-2 border bg-black text-white text-lg px-4 hover:bg-white hover:text-black rounded-lg transition-all duration-300'
                >
                  Check It
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
