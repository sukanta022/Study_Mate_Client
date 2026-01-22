import React, { useRef } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const Partner = () => {
    const bidModalRef = useRef(null)
    const handleBidOpen = () => {
        bidModalRef.current.showModal()
    }

    return (
        <div className='bg-[#171F3F] space-y-4 md:space-y-5 p-6 rounded-3xl border-2 border-[#202751] shadow-xl'>
            <div className='flex gap-4'>
                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-15 h-15 rounded-full'/>

                <div className='space-y-1'>
                    <p className='text-2xl font-semibold text-white'>Emily Rodriguez</p>

                    <div className='text-[#FBBF25] flex justify-start items-center gap-2'>
                        <p><FaStar /></p>
                        <p>4.9</p>
                        <p className='text-primary'>(127 reviews)</p>
                    </div>
                    
                </div>
            </div>

            <div className='text-primary flex flex-col gap-2'>
                <p className='text-xl font-semibold'>Subject</p>

                <div className='flex gap-3'>
                    <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>English Literature</p>

                    <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>Mathematics</p>
                </div>

                
            </div>

            <div className='text-primary flex flex-col gap-1'>
                <p className='text-xl font-semibold'>Skills</p>

                <p className='text-[#A8D5E1]'>Essay Writing, Literary Analysis, Research Papers, Citation Formats</p>

            </div>

            <div>
                <button onClick={handleBidOpen} className="btn w-full linear-bg text-white text-xl font-bold rounded-lg border-0">View Profile</button>
            </div>




            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={bidModalRef} className="modal">
                <div className="modal-box bg-[#1E293B] p-10  space-y-5  w-[95%] sm:w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1000px] max-w-none">
                    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle text-white text-2xl font-bold btn-ghost absolute right-2 top-1">✕</button>
    </form>
                    <div className='flex gap-4'>
                        <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-25 h-25 rounded-xl'/>

                        <div className='space-y-1'>
                            <p className='text-3xl font-semibold text-white'>Emily Rodriguez</p>

                            <div className='text-[#FBBF25] flex justify-start items-center gap-2'>
                                <p><FaStar /></p>
                                <p>4.9</p>
                                <p className='text-primary'>(127 reviews)</p>
                            </div>
                            
                            <p className='text-[#8E9CB1]'>sarah.chen@example.com</p>
                        </div>
                    </div>

                    <div className='text-primary flex flex-col gap-1'>
                        <p className='text-2xl font-semibold text-white'>About</p>

                        <p className='text-[#A8D5E1]'>Graduate student in Computer Science with 3 years of tutoring experience. Passionate about helping students understand complex concepts through practical examples.</p>
                    </div>

                    <div className='text-primary flex flex-col gap-2'>
                        <p className='text-xl md:text-2xl font-semibold text-white'>Subject</p>

                        <div className='flex gap-3'>
                            <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>English Literature</p>

                            <p className='bg-[#262D62] py-1 px-3 w-fit rounded-3xl'>Mathematics</p>
                        </div>

                        
                    </div>

                    <div className='text-primary flex flex-col gap-1'>
                        <p className='text-xl md:text-2xl font-semibold text-white'>Skills & Expertise</p>

                        <p className='text-[#A8D5E1]'>Calculus, Linear Algebra, Python Programming, Data Structures.</p>
                    </div>

                    <div className='flex justify-between items-center flex-wrap'>
                        <div className='text-primary flex flex-col gap-1'>
                            <p className='text-xl md:text-2xl font-semibold text-white'>Experience</p>

                            <p className='text-[#A8D5E1]'>Intermidiate</p>
                        </div>


                        <div className='text-primary flex flex-col gap-1'>
                            <p className='text-xl md:text-2xl font-semibold text-white'>Availability</p>

                            <p className='text-[#A8D5E1]'>Evening 6–9 PM</p>
                        </div>

                        <div className='text-primary flex flex-col gap-1'>
                            <p className='text-xl md:text-2xl font-semibold text-white'>Connected With</p>

                            <p className='text-[#A8D5E1] text-center'>10</p>
                        </div>
                        
                    </div>

                    <button className='btn border-0 linear-bg w-full text-xl text-white font-semibold text-xl'>Connect With ALex</button>
                </div>
            </dialog>
        </div>

        
    );
};

export default Partner;