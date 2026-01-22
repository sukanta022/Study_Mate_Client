import React from 'react';

const ProcessCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-15'>
            <div className='bg-[#181D3C] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl flex flex-col justify-center items-center'>
                <div className='w-22 h-22 flex justify-center items-center text-3xl font-bold text-white linear-bg rounded-full'>1</div>

                <h2 className='font-semibold text-3xl text-white'>Create Your Profile</h2>
                <p className='text-primary text-[18px] text-center'>Sign up and tell us about your courses, study habits, and learning goals.</p>
            </div>


            <div className='bg-[#181D3C] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl flex flex-col justify-center items-center'>
                <div className='w-22 h-22 flex justify-center items-center text-3xl font-bold text-white linear-bg rounded-full'>2</div>

                <h2 className='font-semibold text-3xl text-white'>Find Your Match</h2>
                <p className='text-primary text-[18px] text-center'>Browse top-rated study partners and find the perfect match for your needs.</p>
            </div>


            <div className='bg-[#181D3C] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl flex flex-col justify-center items-center'>
                <div className='w-22 h-22 flex justify-center items-center text-3xl font-bold text-white linear-bg rounded-full'>3</div>

                <h2 className='font-semibold text-3xl text-white'>Collaborate & Grow</h2>
                <p className='text-primary text-[18px] text-center'>Connect with partners, schedule sessions, and watch your grades improve!</p>
            </div>

        </div>
    );
};

export default ProcessCard;