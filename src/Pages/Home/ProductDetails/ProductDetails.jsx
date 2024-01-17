import React from 'react';
import { useParams } from 'react-router-dom';
import DealsDayData from '../DealsDay/DealsDayData';
import TopDealsData from '../TopDeals/TopDealsData'; // Import your TopDealsData

import { FaStar } from "react-icons/fa";

export default function ProductDetails() {
    const { itemId } = useParams();
    const item = DealsDayData.find(item => item.id === parseInt(itemId, 10)) || TopDealsData.find(item => item.id === parseInt(itemId, 10));

    if (!item) {
        return <p>Item not found</p>; // Handle the case when the item is not found
    }

    return (
        <>
            <div className='lg:grid lg:grid-cols-2 lg:mt-10 md:mt-10 mt-5'>
                <div className=' lg:w-[500px] lg:h-[350px] lg:ml-10'>
                    <img src={item.img} className=' lg:w-fit lg:h-[350px] p-5' alt="" />

                    <div>
                        <div className='flex  w-fit md:mx-auto space-x-2 ml-5  md:space-x-14  '>
                            <img src={item.img} className=' mix-blend-darken h-24 w-32 mb-5' alt="" />
                            <img src={item.img} className='  mix-blend-darken h-24 w-32 mb-5' alt="" />
                            <img src={item.img} className='  h-24 w-32' alt="" />
                        </div>
                    </div>
                    <div className='w-fit mx-auto space-x-10 mt-4'>
                        <button className='border px-8 bg-black p-2 text-white rounded-md  hover:bg-white hover:text-black'>Add Cart</button>

                        <button  className='border px-8 bg-black p-2 text-white rounded-md hover:bg-white hover:text-black' >Buy Now</button>
                    </div>
                </div>

                <div className=' lg:mt-14 md:mt-14 mt-[15px]'>
                    <h1 className='text-5xl font-medium lg:ml-0 text-center'>{item.heading}</h1>
                    <div className='flex mt-2 ml-1'>
                        <div className='flex  ml-1  mt-5 space-x-2 '>
                            <FaStar fill='black' className='mt-1 w-4' />
                            <FaStar fill='black' className='mt-1 w-4' />
                            <FaStar fill='black' className='mt-1 w-4' />
                            <FaStar fill='black' className='mt-1 w-4' />
                        </div>
                        <div className='lg:mt-2  mt-4 ml-6'>
                            <p className='lg:text-4xl text-2xl font-medium'>{`$${item.price}`}</p>
                        </div>
                        <div className='lg:mt-4 mt-5 ml-2 '>
                            <p className='text-xl'>{item.delivery ? 'Free Delivery' : 'Delivery charges apply'}</p>
                        </div>
                    </div>
                    <div className='mt-5 p-5'>
                        <div>
                            <span className='text-lg font-semibold'>Special Price :</span><span> Get extra 5% off (price inclusive of discount)</span>
                        </div>
                        <div>
                            <span className='text-lg font-semibold'>Bank Offer :</span><span> Get  5% off HDFC Credit Card</span>
                        </div>
                        <div>
                            <span className='text-lg font-semibold'>Bank Price :</span><span> Get extra 10% off Kotak Mahindra Bank</span>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5 p-5'>
                            <p className='text-2xl font-medium'>Description</p>
                            <p className='mt-2'>{item.des}</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
