import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const Partner = ({user}) => {
    
    const {name, _id, profileimage, subject, rating, expertise} = user
    return (
        <div className='bg-[#171F3F] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl'>
            <div className='flex gap-4'>
                <img src={profileimage} alt="" className='w-15 h-15 rounded-full'/>

                <div className='space-y-1'>
                    <p className='text-2xl font-semibold text-white'>{name}</p>

                    <div className='text-[#FBBF25] flex justify-start items-center gap-2'>
                        <p><FaStar /></p>
                        <p>{rating}</p>
                        <p className='text-primary'>(127 reviews)</p>
                    </div>
                    
                </div>
            </div>

            <div className='text-primary flex flex-col gap-2'>
                <p className='text-xl font-semibold'>Subject</p>

                <div className='flex gap-3'>
                    {
                        subject.map((data) => 
                            <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>{data}</p>
                        )
                    }
                </div>

                
            </div>

            <div className='text-primary flex flex-col gap-1'>
                <p className='text-xl font-semibold'>Skills</p>

                <p className='text-[#A8D5E1]'>{expertise}</p>

            </div>

            <div>
                
                <Link to={`/Profile/${_id}`} onClick={() => window.scrollTo(0, 0)} className="btn w-full linear-bg text-white text-xl font-bold rounded-lg border-0">View Profile</Link>
            </div>




            
        </div>

        
    );
};

export default Partner;