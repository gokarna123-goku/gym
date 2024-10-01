import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'
import { CiDumbbell } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='w-full relative bg-[url("https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886576_1280.jpg")] bg-cover bg-top bg-no-repeat bg-fixed'>

            {/* Other content */}
            <Layout className="w-full z-50 bg-gradient-to-t from-neutral-950/90 to-neutral-950/90 !py-14">
                <div className="w-full flex items-center justify-center text-center flex-col space-y-10">
                    <div className="w-full flex items-center justify-center gap-6">
                        <Link to="/" className='w-14 h-14 bg-neutral-700/50 hover:bg-neutral-700/30 flex items-center justify-center text-3xl text-neutral-200 hover:text-red-600 ease-in-out duration-300'>
                            <FaInstagram />
                        </Link>
                        <Link to="/" className='w-14 h-14 bg-neutral-700/50 hover:bg-neutral-700/30 flex items-center justify-center text-3xl text-neutral-200 hover:text-red-600 ease-in-out duration-300'>
                            <FaYoutube />
                        </Link>
                        <Link to="/" className='w-14 h-14 bg-neutral-700/50 hover:bg-neutral-700/30 flex items-center justify-center text-3xl text-neutral-200 hover:text-red-600 ease-in-out duration-300'>
                            <FaFacebookF />
                        </Link>
                        <Link to="/" className='w-14 h-14 bg-neutral-700/50 hover:bg-neutral-700/30 flex items-center justify-center text-3xl text-neutral-200 hover:text-red-600 ease-in-out duration-300'>
                            <FaXTwitter />
                        </Link>
                    </div>
                    <div className='w-full space-y-5 flex items-center justify-center flex-col'>
                        <Link className="text-7xl text-red-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                            F<span className="text-5xl font-bold text-neutral-100 px-0.5">I</span>T
                            <CiDumbbell className="w-8 h-6 text-neutral-50 absolute top-0 left-[46%] translate-x-[-50%]" />
                        </Link>

                        <p className="text-base text-neutral-300 font-normal line-clamp-2 md:w-1/2 w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid dicta ex ipsa rerum tenetur laboriosam aliquam facere quo autem!
                        </p>

                    </div>

                    <div className="md:w-1/2 w-full flex items-center gap-x-2">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3.5 text-base text-neutral-50 font-normal border-2 border-neutral-500/50 bg-neutral-500/5 focus:bg-red-600/5 focus:border-red-600 outline-none" />
                        <button className="w-fit px-8 py-3.5 bg-red-600 hover:bg-neutral-950 border-2 border-red-600 text-base text-neutral-50 font-medium uppercase ease-in-out duration-300">Subscribe</button>
                    </div>
                </div>
            </Layout>

            {/* Copyright */}
            <div className="w-full h-10 bg-neutral-950 text-center flex items-center justify-center">
                <p className="text-sm text-neutral-500 font-thin">Copyright © 2024 G-Tech Official. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer