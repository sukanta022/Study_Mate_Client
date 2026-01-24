import React, {  use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
     
    const [email, setEmail] = useState("");
    
    
    const {signInUser,signInGoogle} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handlePasswordFeild = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        setError('')
        setSuccess(false)
        signInUser(email,password)
        .then(() =>{
            setSuccess(true)
            
            navigate(`${location.state ? location.state : "/"}`)
        } )
        .catch(error => setError(error.message))

    }

    const handleGoogleSignIn = () => {
        setError('')
        setSuccess(false)
        signInGoogle()
        .then((data) => {
            console.log(data)
            setSuccess(true)
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch((error) => {
            console.log(error)
            setError(error.message)
        })
    }


    return (
         <div className="hero  bg-[#0F172A] min-h-screen">
            <div className="hero-content flex-col space-y-3 animate__animated animate__fadeIn">
                <div className="text-center">
                    <h1 className="text-5xl font-bold gradient-text">Login now!</h1>
                
                </div>
                <div className="card bg-base-100 w-80 md:w-100  shadow-2xl">
                    <div className="card-body bg-[#131B34]  border-2 border-[#202751]">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset text-white">
                                <label className="label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email"  className="input w-full bg-[#0F172A] text-white border-[#262D62] " placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} name="password" className="input w-full bg-[#0F172A] text-white border-[#262D62]" placeholder="Password" />
                                    <button onClick={handlePasswordFeild} className='text-2xl absolute top-2 right-2'>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </button>
                                </div>
                                <div ><a  className="link link-hover">Forgot password?</a></div>
                                <button className="btn text-white linear-bg mt-4 w-full">Login</button>
                                
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleSignIn} className='btn font-semibold text-white bg-[#001931]'><FcGoogle /> Sign in with Google</button>
                        <p className='text-white'>New to our website? Please <Link to={'/register'} className='text-blue-500 underline'>Register</Link></p>
                    </div>
                    {
                        error && <p className='text-red-500 text-center font-semibold'>{error}</p> 
                    }
                    {
                        success &&  <p className='text-green-500 text-center'>Logged in successfully</p>
                    }
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default Login;