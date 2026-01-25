import React, { use } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../context/AuthContext';

const CreateProfile = () => {
    const axiosInstace = useAxios()
    const {user} = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const profileimage = user.photoURL
        const email = e.target.email.value;
        const subject = e.target.subject.value.split(",");
        const studyMode = e.target.studyMode.value;
        const experienceLevel = e.target.experienceLevel.value;
        const location = e.target.location.value;
        const language = e.target.language.value;
        const availabilityTime = e.target.availabilityTime.value;
        const expertise = e.target.expertise.value;
        const about = e.target.about.value;
        const created_at = new Date().toISOString();
        const patnerCount = 0
        const rating = 0
        const profile = {name,email,profileimage,subject,studyMode,experienceLevel,location,language,availabilityTime,expertise,about,created_at, patnerCount, rating}

        console.log(profile)

        axiosInstace.post('/users', profile)
        .then(data => console.log(data))

        e.target.reset()
    }

    const handleClear = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className='min-h-screen bg-[#0F172A] flex flex-col items-center text-center gap-5 p-5'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>Create Partner Profile</h1>
            <p className='text-primary text-xl'>Share your expertise and connect with fellow students</p>

            <form className="bg-[#131B34]  border-2 border-[#202751] p-6 md:p-10 rounded-3xl space-y-6 w-full max-w-5xl" onSubmit={handleSubmit}>
  
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset">
                        <label className="text-white label">Full Name</label> 
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Enter your full name" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="text-white label">Contact Email</label>
                        <input type="email" defaultValue={user?.email} readOnly name="email" placeholder="your.email@example.com" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                    </fieldset>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset">
                        <label className="text-white label">Subjects</label> 
                        <input type="text" name="subject" placeholder="e.g., Mathematics, Physics, Computer Science" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="text-white label">Study Mode</label>
                        <select name='studyMode' className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full">
                            <option disabled selected>Pick a mode</option>
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Hybrid</option>
                        </select>
                    </fieldset>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset">
                        <label className="text-white label">Experience Level</label>
                        <select name='experienceLevel' className="select bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full">
                            <option disabled selected>Select level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Expert</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="text-white label">Location</label> 
                        <input type="text" name="location" placeholder="e.g., New York" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                    </fieldset>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset">
                        <label className="text-white label">Languages</label> 
                        <input type="text" name="language" placeholder="e.g., English, Spanish" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full"  />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="text-white label">Availability</label>
                        <input type="text" name='availabilityTime' placeholder="e.g., Evening 6–9 PM" className="input input-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full" />
                    </fieldset>
                </div>

                {/* Textareas */}
                <fieldset className="fieldset">
                    <label className="text-white label">Skills & Expertise</label>
                    <textarea name="expertise" placeholder="Describe your key skills and area of expertise"className="textarea textarea-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full min-h-[120px]"/>
                </fieldset>

                <fieldset className="fieldset">
                    <label className="text-white label">About You</label>
                    <textarea placeholder="Tell potential study partners about yourself and your teaching style" name='about' className="textarea textarea-info bg-[#0F172A] text-white border-[#262D62] focus:border-[#9F62F2] focus:outline-none w-full min-h-[140px]"/>
                </fieldset>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="btn linear-bg border-0 w-full md:w-3/4 text-white font-semibold text-xl rounded-xl">Create Profile</button>
                    <button onClick={() => handleClear()} className="btn w-full md:w-1/4 bg-[#2A3148] text-white font-semibold text-xl rounded-xl">Clear</button>
                </div>

            </form>

        </div>
        
    );
};

export default CreateProfile;