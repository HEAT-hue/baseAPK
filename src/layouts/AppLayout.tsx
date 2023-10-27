/* Please do not modify this file. This will affect the layout of the application */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from 'react-icons/cg'
import { NavLink } from "react-router-dom";

export function AppLayout() {

    // State to handle navigation
    const [nav, setNav] = useState<boolean>(false);

    // Toggle navigation
    function toggleNavigation() {
        setNav((prev) => !prev);
    }

    return (
        <>
            {/******************** DESKTOP VIEW NAVIGATION *********************/}
            <header className="fixed top-0 inset-x-0 items-center bg-whites z-[1000]">

                {/* Navigation */}
                <nav className="h-[60px] px-4 max-w-[1200px] mx-auto flex items-center justify-between border-b border-gray-400 bg-white relative">
                    <h1 className="w-max text-xl font-bold">Logo</h1>

                    {/* Desktop nav */}
                    <div className={`${nav ? "h-screen backdrop-blur-[2px] bg-black/50 border-t border-gray-300" : "h-0 overflow-hidden"} absolute top-[59px] left-0 w-full md:h-max md:static`}>
                        <ul className={`flex flex-col md:flex-row md:justify-end gap-5 bg-white w-full`} onClick={toggleNavigation}>
                            <NavLink to="/" >
                                {({ isActive }) => (
                                    <li className={`p-4 ease-in-out transition duration-500 ${isActive && "text-pry"}`}>Home</li>
                                )}
                            </NavLink>
                            <NavLink to="/about" >
                                {({ isActive }) => (
                                    <li className={`p-4 w-max ease-in-out transition duration-500 ${isActive && "text-pry"}`}>About Us</li>
                                )}
                            </NavLink>
                            <NavLink to="/services" >
                                {({ isActive }) => (
                                    <li className={`p-4 ease-in-out transition duration-500 ${isActive && "text-pry"}`}>Services</li>
                                )}
                            </NavLink>
                            <NavLink to="/contact" >
                                {({ isActive }) => (
                                    <li className={`p-4 ease-in-out transition duration-500 ${isActive && "text-pry"}`}>Contact</li>
                                )}
                            </NavLink>
                        </ul>
                    </div>

                    {/* Mobile open or close menu */}
                    <div className="block md:hidden cursor-pointer text-black" onClick={toggleNavigation} >
                        {nav ? (<AiOutlineClose size={20} />) : (<CgMenuRight size={25} />)}
                    </div>
                </nav>
            </header>

            {/* Render Outlet, Each page */}
            <div className="mt-[60px]">
                <Outlet />
            </div >
        </>
    );
}
