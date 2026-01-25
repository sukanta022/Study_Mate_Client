import React, { use, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import useAxios from '../hooks/useAxios';

const Profile = () => {

    const {user,loading} = use(AuthContext)
    const axiosInstace = useAxios()
    const [userProfile, setUserProfile] = useState([])
    useEffect(() => {
        if(!loading){
            axiosInstace.get(`/users?email=${user.email}`)
            .then(data => setUserProfile(data.data))
        }
        
    },[axiosInstace,user,loading])

    if (loading || userProfile.length === 0) {
        return <div className="min-h-screen bg-[#0F172A] text-white flex justify-center items-center">
            Loading profile...
        </div>
    }
    

    return (
        <div className="min-h-screen bg-[#0F172A] flex justify-center items-start py-16 px-4">
            <div className="bg-[#131B34] border-2 border-[#202751] rounded-3xl p-8 md:p-12 w-full max-w-4xl text-white space-y-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={userProfile[0].profileimage} 
                        alt="profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#9F62F2]"
                    />

                    <div className="text-center md:text-left space-y-2">
                        <h1 className="text-3xl font-bold">{userProfile[0].name}</h1>
                        <p className="text-primary">{userProfile[0].email}</p>

                        <div className="flex justify-center md:justify-start items-center gap-2 text-[#FBBF25]">
                            <FaStar />
                            <span>{userProfile[0].rating}</span>
                            <span className="text-primary">
                                ({userProfile[0].partnerCount} partners)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#0F172A] p-5 space-y-2 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Subject</p>
                        <div className='flex flex-wrap gap-2'>
                            {
                                userProfile[0].subject.map((data) => 
                                    <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>{data}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Study Mode</p>
                        <p className="text-xl font-semibold">{userProfile[0].studyMode}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Availability</p>
                        <p className="text-xl font-semibold">{userProfile[0].availabilityTime}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Location</p>
                        <p className="text-xl font-semibold">{userProfile[0].location}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62] md:col-span-2">
                        <p className="text-primary">Experience Level</p>
                        <p className="text-xl font-semibold">{userProfile[0].experienceLevel}</p>
                    </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
                    <p className="text-[#A8D5E1]">{userProfile[0].expertise}</p>
                </div>

                {/* About */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">About Me</h2>
                    <p className="text-[#A8D5E1]">{userProfile[0].about}</p>
                </div>

                {/* Action */}
                <div className="flex justify-end">
                    <button className="btn linear-bg border-0 text-white text-lg px-8">
                        Update Profile
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;
