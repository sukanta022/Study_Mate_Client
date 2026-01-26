import { use, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const ViewProfile = () => {
    const {user} = use(AuthContext)
    const axiosInstace = useAxios()
    const userProfile = useLoaderData()
    const {_id,name,rating,email,about_you,subject = [],expertise,experienceLevel,availabilityTime,partnerCount,image,requestPartner} = userProfile || {};
    const[isConnected, setIsConnected] = useState(requestPartner?.includes(user.email))
    const[partnerCountUpdate, setPartnerCountUpdate] = useState(partnerCount)
    const handleUpdatePartner = async() => {

        try{
            await axiosInstace.patch(`/users/id/${_id}/connect`, {requestPartner : user.email}).then(res => {
                console.log("1",res)
                setPartnerCountUpdate(partnerCountUpdate+1)
            })
            
            await axiosInstace.patch(`/users/email/${user.email}/connect`, {partner : email})
            .then(res => console.log("2", res))

            setIsConnected(true)

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Partner added to your connection",
                showConfirmButton: false,
                timer: 1500
            });
        }
        
        
        catch(error){
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"           
            });
        }
        
    }
    
    return (
        <div className="flex justify-center items-center bg-[#0F172A] min-h-screen p-5">
            <div className="bg-[#1E293B] p-10 space-y-6 rounded-xl w-full max-w-5xl mx-auto  border-4 border-[#202751] shadow-2xl">
            
            {/* Header */}
            <div className='flex gap-4'>
                <img 
                    src={image || "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341"} 
                    alt="" 
                    className='w-24 h-24 rounded-xl object-cover'
                />

                <div className='space-y-1'>
                    <p className='text-3xl font-semibold text-white'>{name}</p>

                    <div className='text-[#FBBF25] flex items-center gap-2'>
                        <FaStar />
                        <p>{rating}</p>
                        <p className='text-primary'>(127 reviews)</p>
                    </div>
                    
                    <p className='text-[#8E9CB1]'>{email}</p>
                </div>
            </div>

            {/* About */}
            <div>
                <p className='text-2xl font-semibold text-white'>About</p>
                <p className='text-[#A8D5E1]'>{about_you}</p>
            </div>

            {/* Subjects */}
            <div>
                <p className='text-2xl font-semibold text-white'>Subject</p>
                <div className='flex gap-3 flex-wrap mt-2'>
                    {
                        subject.map((data, idx) => (
                            <p key={idx} className='bg-[#262D62] py-1 px-3 rounded-3xl text-primary'>
                                {data}
                            </p>
                        ))
                    }
                </div>
            </div>

            {/* Skills */}
            <div>
                <p className='text-2xl font-semibold text-white'>Skills & Expertise</p>
                <p className='text-[#A8D5E1]'>{expertise}</p>
            </div>

            {/* Info Row */}
            <div className='flex justify-between items-center flex-wrap gap-6'>
                <div>
                    <p className='text-xl font-semibold text-white'>Experience</p>
                    <p className='text-[#A8D5E1]'>{experienceLevel}</p>
                </div>

                <div>
                    <p className='text-xl font-semibold text-white'>Availability</p>
                    <p className='text-[#A8D5E1]'>{availabilityTime}</p>
                </div>

                <div>
                    <p className='text-xl font-semibold text-white'>Connected With</p>
                    <p className='text-[#A8D5E1] text-center'>{partnerCountUpdate}</p>
                </div>
            </div>

            <button disabled={isConnected} className='btn border-0 linear-bg w-full text-xl text-white font-semibold' onClick={() => handleUpdatePartner()}>
                 {isConnected? "Already Addeded" : `Connect With ${name}`}   
            </button>
        </div>
        </div>
        
    );
};

export default ViewProfile;
