import React from 'react';
import { FaStar } from "react-icons/fa";

const Profile = () => {

    // demo data (later you will replace with real data from DB / context)
    const userProfile = {
        id: "1",
        name: "Aisha Rahman",
        profileimage: "https://i.ibb.co/profile-example.jpg",
        subject: "Mathematics",
        studyMode: "Online",
        availabilityTime: "Evening 6–9 PM",
        location: "Dhaka, Bangladesh",
        experienceLevel: "Intermediate",
        rating: 0,
        partnerCount: 0,
        email: "user@example.com",
        expertise: "Calculus, Linear Algebra, Problem Solving, Exam Preparation",
        about: "I am a passionate math tutor who loves helping students understand complex topics in a simple way."
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex justify-center items-start py-16 px-4">
            <div className="bg-[#131B34] border-2 border-[#202751] rounded-3xl p-8 md:p-12 w-full max-w-4xl text-white space-y-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={userProfile.profileimage} 
                        alt="profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#9F62F2]"
                    />

                    <div className="text-center md:text-left space-y-2">
                        <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                        <p className="text-primary">{userProfile.email}</p>

                        <div className="flex justify-center md:justify-start items-center gap-2 text-[#FBBF25]">
                            <FaStar />
                            <span>{userProfile.rating}</span>
                            <span className="text-primary">
                                ({userProfile.partnerCount} partners)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Subject</p>
                        <p className="text-xl font-semibold">{userProfile.subject}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Study Mode</p>
                        <p className="text-xl font-semibold">{userProfile.studyMode}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Availability</p>
                        <p className="text-xl font-semibold">{userProfile.availabilityTime}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62]">
                        <p className="text-primary">Location</p>
                        <p className="text-xl font-semibold">{userProfile.location}</p>
                    </div>

                    <div className="bg-[#0F172A] p-5 rounded-2xl border border-[#262D62] md:col-span-2">
                        <p className="text-primary">Experience Level</p>
                        <p className="text-xl font-semibold">{userProfile.experienceLevel}</p>
                    </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
                    <p className="text-[#A8D5E1]">{userProfile.expertise}</p>
                </div>

                {/* About */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">About Me</h2>
                    <p className="text-[#A8D5E1]">{userProfile.about}</p>
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
