import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { IoMdBook } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { AuthContext } from '../../context/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {

    const {user, signOutUser} = use(AuthContext)

    const handleSignOut = () => {
        signOutUser()
    }
    const navList = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink to={'/FindPartners'}>Find Partners </NavLink></li>
        {
            user && <>
                <li><NavLink to={'/CreateProfile'}>Create Partner Profile</NavLink></li>
                <li><NavLink to={'/MyConnection'}>My Connections</NavLink></li>
            </>
        }
        
    </>

    const profileView = (
        <>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li>
                <button onClick={() => handleSignOut()} className="flex items-center gap-2">Logout <IoMdLogOut /></button>
            </li>
        </>
    );

    

    return (
        <div>
            <div className="navbar bg-[#0F172A] shadow-sm z-50 border-b-2 border-b-[#202751]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  p-0">
                            <p className='text-xl text-primary font-bold'><GiHamburgerMenu /></p>
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

                    {
                        user ? 
                            <div className="dropdown  dropdown-end">
                                <div  tabIndex={0} role="button" className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-[#1E293B] transition cursor-pointer">
                                        
                                    <p className="text-primary font-semibold px-2 py-1 border border-dotted border-white rounded-lg hidden md:block"> {user.displayName}</p>

                                    <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full object-cover border-2 border-[#9F62F2]"/>
                                </div>

                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-22 p-2 shadow text-black">
                                    {profileView}
                                </ul>
                            </div> :

                            <div className="flex items-center gap-3">
                                <Link to="/login" className="btn bg-transparent border border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2]/10 rounded-full px-6">Log in</Link>

                                <Link to="/register" className="btn linear-bg text-white rounded-full px-6">Sign Up</Link>
                            </div>  
                    }
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Header;