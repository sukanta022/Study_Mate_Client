import React from 'react';
import ProcessCard from './ProcessCard';

const Process = () => {
    return (
        <div className='bg-[#121931] flex flex-col justify-center items-center p-10 lg:p-20'>
            <div className='space-y-3 flex flex-col justify-center items-center text-center'>
                <div className='bg-[#202652] text-primary font-semibold text-xl rounded-3xl py-2 px-4 w-fit text-center'>Process</div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>How It Works</h1>

                <p className='text-primary text-[18px]'>Start learning together in 3 simple steps</p>
            </div>

            <div className=''>
                <ProcessCard></ProcessCard>
            </div>
        </div>
    );
};

export default Process;