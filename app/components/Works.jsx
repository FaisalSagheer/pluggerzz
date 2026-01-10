'use client'
import React from 'react'
import WorkCard from './WorkCard'

function Works() {
    return (
        <>
            <div className='py-20'>
                <div className="text-center flex flex-col justify-center items-center ">
                    <h1 className="text-5xl font-bold tracking-tight text-balance text-black sm:text-[58.92px]">
                        How it <span className='text-[#EB1F2A]'>
                            Works
                        </span>
                    </h1>
                </div>
                <div className='mx-auto max-w-7xl py-10 flex flex-wrap lg:flex-nowrap justify-center gap-4'>
                    <WorkCard />
                </div>
            </div>
        </>
    )
}

export default Works