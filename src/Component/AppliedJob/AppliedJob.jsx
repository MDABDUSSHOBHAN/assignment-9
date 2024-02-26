import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';


const AppliedJob = () => {

    const {newArr,product}  = useLoaderData()
    console.log(newArr)
    console.log(product)
    return (
        <div className='flex main-h-screen items-start justify-start
        bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl  p-6 space-y-4 sm:p-10'>
            <h2 className='text-xl font-semibold'>{newArr.length ? 'Applied Jobs':'Cart is Empty!'}</h2>

            <ul className='flex flex-col divide-y divide-gray-700'>

                {
                  newArr.map(product=> <CartItem product ={product} key={product.id}></CartItem>)  
                }

            </ul>
            </div>
        </div>
    );
};

export default AppliedJob;