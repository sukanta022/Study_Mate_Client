import React, { useEffect, useState } from 'react';
import Partner from './Partner';
import useAxios from '../../hooks/useAxios';

const TopRated = () => {
    const [topUser, setTopUser] = useState([])
    const axiosInstace = useAxios()
    useEffect(() => {
        axiosInstace.get('/top-users')
        .then((data) => {
            setTopUser(data.data)
        })
    }, [axiosInstace])
    console.log(topUser)
    return (
        <div className='bg-[#0F172A] flex flex-col justify-center items-center p-10 lg:p-20'>
            <div className='space-y-3 flex flex-col justify-center items-center text-center'>
                <div className='bg-[#202652] text-primary font-semibold text-xl rounded-3xl py-2 px-4 w-fit text-center'>Top Rated</div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>Top Study Partners</h1>

                <p className='text-primary text-[18px]'>Connect with highly rated study partners ready to help you succeed</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-15'>
                {
                    topUser.map(user => <Partner key={user._id} user={user}></Partner>)
                }
                
            </div>
        </div>
    );
};

export default TopRated;