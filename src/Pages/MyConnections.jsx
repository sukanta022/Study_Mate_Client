import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { MdDelete } from "react-icons/md";
const MyConnections = () => {
    const usersData = useLoaderData()
    const {user} = use(AuthContext)
    const accountUser = usersData.find(users => users.email === user.email)
    const {partner} = accountUser
    const accountUserPartner = usersData.filter(users => partner.includes(users.email))

    console.log(accountUserPartner)
    return (
        <div className='bg-[#0F172A] min-h-screen flex flex-col items-center gap-5 p-5'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold'>My Connections</h1>
            <p className='text-primary text-xl'>Manage your study partner profiles</p>
            
            <div className="overflow-x-auto w-full">
  <table className="min-w-full text-white border-collapse border border-[#262D62]">
    {/* Table Head */}
    <thead className="bg-[#202652] text-white uppercase text-sm md:text-base">
      <tr>
        <th className="py-3 px-4 text-left">Name</th>
        <th className="py-3 px-4 text-left">Subject</th>
        <th className="py-3 px-4 text-left">Study Mode</th>
        <th className="py-3 px-4 text-left">Action</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {accountUserPartner.map((userPartner, idx) => (
        <tr key={idx} className="even:bg-[#1A2036] hover:bg-[#262D62] transition-colors duration-200">
          {/* Name */}
          <td className="py-4 px-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={userPartner.profileimage}
                    alt={userPartner.name}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">{userPartner.name}</span>
                <span className="text-sm text-gray-400">{userPartner.location}</span>
              </div>
            </div>
          </td>

          {/* Subjects */}
          <td className="py-4 px-4">
            <div className="flex gap-2 flex-wrap">
              {userPartner.subject.map((sub, subIdx) => (
                <span
                  key={subIdx}
                  className="bg-[#262D62] text-primary text-xs md:text-sm py-1 px-3 rounded-full"
                >
                  {sub}
                </span>
              ))}
            </div>
          </td>

          {/* Study Mode */}
          <td className="py-4 px-4">
            <span className="text-sm md:text-base">{userPartner.studyMode}</span>
          </td>

          {/* Action */}
          <td className="py-4 px-4">
            <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white flex items-center gap-1">
              <MdDelete size={16} /> Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </div>
    );
};

export default MyConnections;