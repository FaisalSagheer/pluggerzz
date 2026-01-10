'use client'
import { SearchIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import HeroImg from '@/public/assets/hero-img.png'
import Image from 'next/image'
function Hero({ heroData }) {
    if (heroData === 0) {
        return (
            <>No Content</>
        )
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-10 text-black">
                    {
                        heroData.map((hero) => (
                            <h2 className="font-bold tracking-widest text-[7px] lg:text-[22px] mb-1" key={hero.id} dangerouslySetInnerHTML={{ __html: hero.title.rendered }}></h2>
                        ))
                    }
                    <h1 className="text-[23.59px] lg:text-[76px] font-bold mb-4">Stay in and book a pro.</h1>
                    <p className="mx-auto leading-relaxed text-[7px] lg:text-[22px] text-black font-bold">From plumbing to painting; get the right handyman, right at your doorstep.</p>
                </div>
                <div className='bg-gray-300 mx-auto lg:w-2xl rounded-full flex items-center p-3'>
                    <SearchIcon className='size-5 text-gray-400' />
                    <input
                        id="email-address"
                        name="email"
                        type="text"
                        required
                        placeholder="Search Service"
                        autoComplete="email"
                        className=" outline-0 bg-white/5 px-3 pt-1 placeholder:text-lg text-base text-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>
            <Image
                className='w-full -mt-8'
                loading='eager'
                src={HeroImg}
                alt='/'
            />
        </section>
    )
}

export default Hero