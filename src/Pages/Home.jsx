import React from 'react';
import Banner from '../Component/Banner/Banner';
import TopRated from '../Component/TopRated/TopRated';
import Process from '../Component/Process/Process';

const Home = () => {
    return (
        <div>
            {/* <p>This is hone</p> */}
            <Banner></Banner>
            <TopRated></TopRated>
            <Process></Process>
        </div>
    );
};

export default Home;