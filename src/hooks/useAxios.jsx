import axios from 'axios';
import React from 'react';

const axiosInstace = axios.create({
    baseURL: 'https://study-mate-server-khaki.vercel.app'
})

const useAxios = () => {
    return axiosInstace;
};

export default useAxios;