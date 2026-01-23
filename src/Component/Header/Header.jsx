import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoMdBook } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
const Header = () => {
    const navList = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink to={'/FindPartners'}>Find Partners </NavLink></li>
        <li><NavLink to={'/CreateProfile'}>Create Partner Profile</NavLink></li>
        <li><NavLink to={'/MyConnection'}>My Connections</NavLink></li>
    </>

    const profileView = (
        <>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li>
            <button className="flex items-center gap-2">
                Logout <IoMdLogOut />
            </button>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-[#0F172A] shadow-sm z-50 border-b-2 border-b-[#202751]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost">
                        <div className='p-2 bg-[#845EF5] rounded-xl'>
                            <p className='text-white  text-xl md:text-3xl'><IoMdBook /></p>
                        </div>
                        <p className='text-white text-xl md:text-2xl'>StudyMate</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-primary font-semibold px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <div className="dropdown  dropdown-end">
                        <div tabIndex={0} role="button" className='btn'>
                            <a >Button</a>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-22 p-2 shadow text-black">
                            {profileView}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;