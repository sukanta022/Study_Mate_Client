import React from 'react';
import Banner from '../Component/Banner/Banner';
import TopRated from '../Component/TopRated/TopRated';
import Process from '../Component/Process/Process';
import Success from '../Component/Success/Success';

const Home = () => {
    return (
        <div>
            {/* <p>This is hone</p> */}
            <Banner></Banner>
            <TopRated></TopRated>
            <Process></Process>
            <Success></Success>
        </div>
    );
};

export default Home;