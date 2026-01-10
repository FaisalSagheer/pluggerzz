"use client"

import React from 'react';
import { footerLinks, socialLinks } from '../constant';
import AppStore from "@/public/assets/appstore.png"
import GooglePlay from "@/public/assets/googleplay.png"
import Logo from "@/public/assets/Pluggerzz.png"
import EN from "@/public/assets/EN.png"
import Image from 'next/image';

const Footer = () => {

    return (
        <footer className="bg-[#0E1010] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([title, links], index) => (
                        <div key={index}>
                            <h3 className="text-[15px] font-bold mb-4">{title}</h3>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-[15px]"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="border-t-2 border-[#605A5A] mt-12 pt-8">
                    <div className="grid md:grid-cols-2 lg:gap-8 items-center">
                        <div className='flex items-center -mb-7 lg:-mb'>
                            <Image
                                src={EN}
                                alt="/"
                                className="w-14"
                            />
                        </div>
                        <div className="flex gap-3 justify-end items-center">
                            <span className='text-[11px] lg:text-[15px]'>
                                Get Pluggerzz App
                            </span>
                            <Image alt='/' src={AppStore} className='w-20 lg:w-30' />
                            <Image alt='/' src={GooglePlay} className='w-20 lg:w-30' />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col md:flex-row justify-between lg:items-center">
                    <div className='flex lg:gap-16'>

                        <Image
                            src={Logo}
                            alt="/"
                            className="h-6 w-auto"
                        />
                        <div className='flex gap-6 items-center ml-35 lg:ml-0'>
                            {
                                socialLinks.map(item =>
                                (
                                    <span key={item.id}>
                                        <item.icon className='size-5' />
                                    </span>
                                ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center space-x-6 lg:mt-4 mt-6 lg:text-[15px] text-[11px] font-semibold">
                        <a href="#" className="text-white  transition-colors duration-300">
                            Suppliers
                        </a>
                        <a href="#" className="text-white transition-colors duration-300">
                            Terms and Conditions
                        </a>
                        <a href="#" className="text-white transition-colors duration-300">
                            Privacy
                        </a>
                        <a href="#" className="text-white  transition-colors duration-300">
                            Cookies
                        </a>
                        <a href="#" className="text-white  transition-colors duration-300">
                            Security
                        </a>
                        <p className="pt-6 text-gray-400  transition-colors duration-300">
                            © 2025 Pluggerzz Inc
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;