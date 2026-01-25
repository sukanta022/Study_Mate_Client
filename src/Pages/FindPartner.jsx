import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Partner from '../Component/TopRated/Partner';

const FindPartner = () => {
    const [searchName, setSearchName] = useState('')
    const [searchSubject, setSearchSubject] = useState('')
    const [studyMode, setStudyMode] = useState("None")
    const [sort, setSort] = useState("None")
    const [users, setUsers] = useState([])
    
    console.log(searchSubject)
    console.log(studyMode)
    console.log(sort)
    const axiosInstace = useAxios()
    useEffect(() => {
        axiosInstace.get('/users')
        .then((data) => setUsers(data.data))
    }, [axiosInstace])
    console.log(users)

    const termName = searchName.trim().toLowerCase()
    const termSubject = searchSubject.trim().toLowerCase()
 
    const sortedUsers = () => {
        if(termName){
           return users.filter(user => user.name.toLowerCase().includes(termName))
        }
        if (termSubject) {
            return users.filter(user =>
                user.subject.some(sub =>
                    sub.toLowerCase().includes(termSubject)
                )
            )
        }

        if(studyMode !== "None"){
            if(studyMode === "Online"){
                return users.filter(user =>  user.studyMode === "Online")
            }
            else if(studyMode === "Offline"){
                return users.filter(user =>  user.studyMode === "Offline")
            }
            else if(studyMode === "Hybrid"){
                return users.filter(user =>  user.studyMode === "Hybrid")
            }
            else{
                return []
            }
        }

        if(sort !== "None"){
            if(sort === "Highest Rating"){
                return [...users].sort((a,b) => b.rating - a.rating)
            }
            else if(sort === "Name (A-Z)"){
                return [...users].sort((a,b) => a.name.localeCompare(b.name))
            }
            else if(sort === "Most Recent"){
                return [...users].sort( (a, b) => new Date(b.created_at) - new Date(a.created_at))
            }
            else{
                return []
            }
        }
        
        else{
            return users
        }
    }
    return (
        <div className='min-h-screen bg-[#0F172A] flex flex-col items-center  gap-5 p-5'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>Find Study Partners</h1>
            <p className='text-primary text-xl'>Browse and connect with study partners that match your needs</p>

            <div>
               <form className="bg-[#131B34] p-6 md:p-10 rounded-3xl border-2 border-[#202751] space-y-6 w-full max-w-5xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Name */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Name</label>
                            <input value={searchName} onChange={(e) => setSearchName(e.target.value)} type="text" name="name" placeholder="Search by name.." className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                        </fieldset>

                        {/* Subject */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Subject</label>
                            <input value={searchSubject} onChange={(e) => setSearchSubject(e.target.value)} type="text" name="subject" placeholder="Search by Subject.." className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                        </fieldset>

                        {/* Study Mode */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Study Mode</label>
                            <select value={studyMode} onChange={(e) => setStudyMode(e.target.value)} name="studyMode" className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full">
                                <option value="">None</option>
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>
                        </fieldset>

                        {/* Sort By */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Sort By</label>
                            <select  value={sort} onChange={(e) => setSort(e.target.value)} name="sortBy" className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" >
                                <option value="">None</option>
                                <option>Highest Rating</option>
                                <option>Name (A-Z)</option>
                                <option>Most Recent</option>
                            </select>
                        </fieldset>

                    </div>

                </form>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-15'>
                {
                    sortedUsers().map(user => <Partner key={user._id} user={user}></Partner>)
                    
                }
                
            </div>
        </div>
    );
};

export default FindPartner;