import React, { use, useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router';

const Profile = () => {
    const profileUpdateModal = useRef(null)
    const axiosInstace = useAxios();
    const {user,loading} = use(AuthContext)
    const [userProfile, setUserProfile] = useState([])
    useEffect(() => {
        if(!loading){
            axiosInstace.get(`/users?email=${user.email}`)
            .then(data => setUserProfile(data.data))
        }
        
    },[axiosInstace,user,loading])

    

    if (loading ) {
        return <div className="min-h-screen bg-[#0F172A] text-white flex justify-center items-center">
            Loading profile...
        </div>
    }

    console.log(userProfile.length)
    
    const updateModal = () => {
        profileUpdateModal.current.showModal()
    }
    
    const handleProfileUpdate = async(e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const subject = e.target.subject.value.split(",");
        const studyMode = e.target.studyMode.value;
        const experienceLevel = e.target.experienceLevel.value;
        const availabilityTime = e.target.availabilityTime.value;
        const about = e.target.about.value;
        const profile = {name,subject,studyMode,experienceLevel,availabilityTime,about}
        console.log(profile)
        axiosInstace.patch(`/users/${userProfile[0]._id}`, profile)
        .then(res => {
            console.log("Updated", res.data)
            
            profileUpdateModal.current.close()
            window.location.reload();

        })
    }

    return (
        <div className="min-h-screen bg-[#0F172A] flex justify-center items-center py-16 px-4">
            {
                userProfile.length === 0 ? 
                    <Link className='btn linear-bg text-xl font-bold text-white rounded-lg border-0' to={'/createProfile'}>Create Your Profile</Link> :
                    <div className="bg-[#131B34] border-2 border-[#202751] rounded-3xl p-8 md:p-12 w-full max-w-4xl text-white space-y-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={userProfile[0]?.profileimage} 
                        alt="profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#9F62F2]"
                    />

                    <div className="text-center md:text-left space-y-2">
                        <h1 className="text-3xl font-bold">{userProfile[0]?.name}</h1>
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
                    <p className="text-[#A8D5E1]">{userProfile[0].about_you}</p>
                </div>

                {/* Action */}
                <div className="flex justify-end">
                    <button className="btn linear-bg border-0 text-white text-lg px-8"
                    onClick={() => updateModal()}>
                        Update Profile
                    </button>
                </div>

                    </div>

            }

            {
                userProfile.length !== 0 &&
                //profile update modal
            <dialog ref={profileUpdateModal}  className="modal">
                <div className="modal-box bg-[#131B34] border-2 border-[#202751] max-w-2xl">
                    
                    <h3 className="font-bold text-2xl text-white mb-6">Update Profile</h3>

                    <form className="space-y-4" onSubmit={handleProfileUpdate}>

                        {/* Name */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Name</label>
                            <input type="text" name='name' defaultValue={userProfile[0].name}className="input input-info bg-[#0F172A] text-white border-[#262D62] w-full"/>
                        </fieldset>

                        {/* Subject */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Subjects</label>
                            <input type="text" name='subject' defaultValue={userProfile[0].subject}placeholder="Math, Physics" className="input input-info bg-[#0F172A] text-white border-[#262D62] w-full"/>
                        </fieldset>

                        {/* Study Mode (Dropdown) */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Study Mode</label>
                            <select name='studyMode' defaultValue={userProfile[0].studyMode} className="select bg-[#0F172A] text-white border-[#262D62] w-full">
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>
                        </fieldset>

                        {/* Experience Level (Dropdown) */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Experience Level</label>
                            <select name='experienceLevel' defaultValue={userProfile[0].experienceLevel}
                            className="select bg-[#0F172A] text-white border-[#262D62] w-full">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </fieldset>

                        {/* Availability */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Availability</label>
                            <input type="text" name="availabilityTime"  defaultValue={userProfile[0].availabilityTime}className="input input-info bg-[#0F172A] text-white border-[#262D62] w-full"/>
                        </fieldset>

                        {/* About */}
                        <fieldset className="fieldset">
                            <label className="text-white label">About</label>
                            <textarea name='about' defaultValue={userProfile[0].about_you} className="textarea textarea-info bg-[#0F172A] text-white border-[#262D62] w-full"/>
                        </fieldset>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 pt-4">
                            
                            <button  className="btn linear-bg border-0 text-white">Save Changes</button>
                        </div>

                    </form>
                </div>
            </dialog>

            }
            
            


            
        </div>
    );
};

export default Profile;
