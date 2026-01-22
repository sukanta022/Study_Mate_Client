import React from 'react';
import ReviewCard from './ReviewCard';

const Success = () => {
    return (
        <div className='bg-[#0F172A] flex flex-col justify-center items-center p-10 lg:p-20'>
            <div className='space-y-3 flex flex-col justify-center items-center text-center'>
                <div className='bg-[#2E2353] text-primary font-semibold text-xl rounded-3xl py-2 px-4 w-fit text-center'>Success Stories</div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>What Students Say</h1>

                <p className='text-primary text-[18px]'>Real results from real students using StudyMate</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-15'>
                {[...Array(3)].map((_, i) => (
                    <ReviewCard key={i}></ReviewCard>
                ))}
            </div>
        </div>
    );
};

export default Success;