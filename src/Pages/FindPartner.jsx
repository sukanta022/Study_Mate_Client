import React from 'react';

const FindPartner = () => {
    return (
        <div className='min-h-screen bg-[#0F172A] flex flex-col items-center text-center gap-5 p-5'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>Find Study Partners</h1>
            <p className='text-primary text-xl'>Browse and connect with study partners that match your needs</p>

            <div>
               <form className="bg-[#131B34] p-6 md:p-10 rounded-3xl border-2 border-[#202751] space-y-6 w-full max-w-5xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Name */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Name</label>
                            <input type="text" name="name" placeholder="Search by name.." className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                        </fieldset>

                        {/* Subject */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Subject</label>
                            <input type="text" name="subject" placeholder="Search by Subject.." className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                        </fieldset>

                        {/* Study Mode */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Study Mode</label>
                            <select name="studyMode" className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full">
                                <option value="">All mode</option>
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Hybrid</option>
                            </select>
                        </fieldset>

                        {/* Sort By */}
                        <fieldset className="fieldset">
                            <label className="text-white label">Sort By</label>
                            <select  name="sortBy" className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" >
                                <option value="">All</option>
                                <option>Highest Rating</option>
                                <option>Name (A-Z)</option>
                                <option>Most Recent</option>
                            </select>
                        </fieldset>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default FindPartner;