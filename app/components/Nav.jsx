'use client'
import React, { useState } from 'react'
import Logo from "@/public/assets/Pluggerzz.png"
import Image from 'next/image'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { ArrowRight, Menu, X } from 'lucide-react'
import MaterialSymbol from '@/public/assets/material-symbols.png'
import Repair from '@/public/assets/repair.png'
import People from '@/public/assets/team-fill.png'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function Nav() {

    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    // const toggleNavbar = () => {
    //     setMobileDrawerOpen(!MobileDrawerOpen);
    // };
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-accent text-black">
            <div className="mx-auto max-w-7xl relative text-sm">
                <div className="flex justify-between items-center py-4 lg:py-6 px-12">
                    <div className='mt-3 lg:mt-0'>
                        <h3 className="text-2xl" href="/">
                            <Image src={Logo} className="w-26 lg:w-30 h-auto" alt="Logo" />
                        </h3>
                    </div>
                    <div className="hidden lg:flex justify-center font-medium items-center cursor-pointer">

                        <div>
                            <ul className="flex text-[14px] space-x-12 items-center">
                                <li className='text-center border-red-600 border rounded-full px-3 py-2 bg-red-500 text-white'>
                                    Get Our App
                                </li>
                                <li>
                                    Explore
                                </li>
                                <li>
                                    Login
                                </li>
                                <li>
                                    <HoverCard >
                                        <HoverCardTrigger className='border-black border-2 rounded-full px-3 py-2'>Register</HoverCardTrigger>
                                        <HoverCardContent>
                                            <div className='hover:bg-gray-200 transition-all rounded-xl p-4'>
                                                <div className='flex justify-between items-center'>
                                                    <span><Image src={MaterialSymbol} alt='/' className='size-6' /></span>
                                                    <label className='text-[15px] font-bold pr-12'>Join Pluggerzz</label>
                                                    <span><ArrowRight className='size-6' /></span>
                                                </div>
                                                <p className='text-[14px] px-10'>Get things done without lifting a finger.</p>
                                            </div>
                                            <div className='hover:bg-gray-200 transition-all rounded-xl p-4'>
                                                <div className='flex justify-between items-center'>
                                                    <span><Image src={Repair} alt='/' className='size-6' /></span>
                                                    <label className='text-[15px] font-bold pr-2'>Become a handyman</label>
                                                    <span><ArrowRight className='size-6' /></span>
                                                </div>
                                                <p className='text-[14px] px-10'>Deliver on time and get paid weekly</p>
                                            </div>
                                            <div className='hover:bg-gray-200 transition-all rounded-xl p-4'>
                                                <div className='flex justify-between items-center'>
                                                    <span><Image src={People} alt='/' className='size-6' /></span>
                                                    <label className='text-[15px] font-bold pr-4'>Become a provider</label>
                                                    <span><ArrowRight className='size-6' /></span>
                                                </div>
                                                <p className='text-[14px] px-10'>Add your team to Pluggerzz and boost your income</p>
                                            </div>

                                        </HoverCardContent>
                                    </HoverCard>

                                </li>
                            </ul>
                        </div>

                        <div>
                        </div>
                    </div>

                    <div className="lg:hidden md:flex justify-end pr-5 pt-2">
                        <button
                            onClick={() => setOpen(true)}
                            className="rounded-md  px-2.5 py-1.5 text-sm font-semibold text-black inset-ring inset-ring-white/5 hover:bg-white/20"
                        >
                            {MobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    <Dialog open={open} onClose={setOpen} className="relative z-10">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                        />

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                    <DialogPanel
                                        transition
                                        className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                                    >
                                        <TransitionChild>
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </TransitionChild>
                                        <div className="relative flex h-full flex-col overflow-y-auto bg-white text-black py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                                            <div className="px-4 sm:px-6 flex justify-between">
                                                <DialogTitle className="text-2xl font-bold ">Login</DialogTitle>
                                                <span><ArrowRight className='size-6' /></span>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6 flex justify-between">
                                                <DialogTitle className="text-2xl font-bold">Register</DialogTitle>
                                                <span><ArrowRight className='size-6' /></span>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </nav>
    )
}

export default Nav