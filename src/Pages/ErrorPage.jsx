import React from 'react';
import { Link } from 'react-router';
import error from '../../public/error.png'
const ErrorPage = () => {
    return (
        <div className='flex flex-col bg-[#0F172A] justify-center items-center text-center py-10'>
            <img src={error} alt="" />
            <h1 className='text-4xl text-[#001931] font-bold'>Oops, page not found!</h1>
            <p className='text-[18px] mt-3 text-[#627382]'>The page you are looking for is not available.</p>
            <Link to={'/'} className="btn p-4 px-8 mt-5 border-none text-white rounded-md linear-bg">Go Back!</Link>
        </div>
    );
};

export default ErrorPage;