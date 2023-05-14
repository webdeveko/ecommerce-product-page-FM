import React from 'react'

import { minus, plus, cart } from '../assets'

const ProductPage = () => {
  return (
    <section className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        <div className='flex flex-col sm:flex-row gap-5 w-full mx-4'>
            <div className='sm:basis-1/2 bg-red-100'>image carousel</div>
            <div className='sm:basis-1/2'>
                <h3 className='text-[13px] uppercase font-bold text-orangeish my-3'>Sneaker Company</h3>
                <h1 className='text-[44px] font-bold leading-none my-5'>Fall Limited Edition Sneakers</h1>
                <p className='text-grayFont my-5'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='flex gap-x-5 items-center mt-3'>
                    <h2 className='text-[28px] font-bold'>$125.00</h2>
                    <h3 className='font-bold bg-pale-orange rounded-md text-orangeish w-[50px] text-center'>50%</h3>
                </div>
                <h3 className='line-through text-grayish-blue font-bold mb-5'>$250.00</h3>

                <div className='flex justify-between w-full gap-5 h-[50px]'>
                    <div className='basis-2/5 flex bg-light-grayish-blue rounded-md justify-between items-center p-2'>
                        <img className='mx-2 cursor-pointer' src={minus} />
                        <p className=' text-center font-bold mx-2'>0</p>
                        <img className='mx-2 cursor-pointer' src={plus} />
                    </div>
                    <div className='flex bg-orangeish rounded-lg basis-3/5 justify-center items-center gap-x-4 cursor-pointer'>
                        <img className='fill-white' src={cart} />
                        <p className='text-white'> Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductPage