'use client'
import React from 'react'

function Footer() {
    return (
        <div className='text-center flex justify-center items-center flex-col pt-20'>
            <div className='text-2xl'>
            Shoes Raining also u can interact with them
            <img src="./assets/bg-footer.png" alt="/" className='text-center bg-cover w-screen' />
            </div>
            <div>
                <ul className='flex gap-6 py-5 text-lg'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Our Designer</li>
                    <li>Video</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
