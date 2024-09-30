import React, { useState } from "react";
import { CiDumbbell } from "react-icons/ci";
import { FaBars, FaX } from "react-icons/fa6";
// import { Dumbbell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navItems = [
        { name: "Home", link: "/", active: true, },
        { name: "About", link: "/about", active: false, },
        { name: "Services", link: "/services", active: false, },
        { name: "Plan", link: "/plan", active: false, },
        { name: "Contact", link: "/contact", active: false, },
    ];
    return (
        <>
            <nav className="w-full h-auto bg-transparent backdrop-blur-lg shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3 z-50">
                <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
                    {/* Navbar logo & toggle button section */}
                    <div>
                        <div className="flex items-center justify-between py-1 md:py-1 md:block">
                            {/* Logo section */}
                            <Link className="text-3xl text-red-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                                G<span className="text-xl font-bold text-neutral-100">Y</span>M
                                <CiDumbbell className="w-5 h-4 text-red-600 absolute top-0 left-[46%] translate-x-[-50%]" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-neutral-700 rounded-md outline-none border border-transparent focus:border-neutral-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FaX className="text-neutral-400 cursor-pointer" size={24} />
                                    ) : (
                                        <FaBars className="text-neutral-400 cursor-pointer" size={24} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navbar menu items section */}
                    <div
                        className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-4 gap-y-10">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className={`w-fit px-4 py-2 hover:bg-neutral-700/40 text-base text-neutral-200 font-medium ${item.active ? "w-fit px-4 py-2 bg-red-600 text-base text-neutral-50 font-medium uppercase" : "text-neutral-300"} ease-out duration-700`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="md:ml-8 ml-0">
                                <button className="w-fit px-6 py-2 bg-red-600 text-base text-neutral-50 font-medium">
                                    Join Now
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;