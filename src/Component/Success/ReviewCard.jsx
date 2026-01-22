import React from 'react';
import { FaStar } from "react-icons/fa";
const ReviewCard = () => {
    return (
        <div>
            <div className='bg-[#171F3F] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl'>
                <p className="text-[#FBBF25] flex">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i}  />
                    ))}
                </p>

                <p className='text-primary text-xl'>"StudyMate helped me find an amazing study group for organic chemistry. My grades went from C to A in one semester!"</p>
                
                <div className='flex gap-4'>
                    <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-15 h-15 rounded-full'/>
                
                    <div className='space-y-1'>
                        <p className='text-xl font-semibold text-white'>Emily Rodriguez</p>
                
                        <p className='text-[#536D8B]'>Pre-Med Student, Harvard</p>
                                    
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ReviewCard;