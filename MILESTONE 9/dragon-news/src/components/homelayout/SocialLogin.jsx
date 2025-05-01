import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>

            <div className='flex flex-col space-y-3 '>
                <button className="btn w-full btn-outline btn-secondary">
                    <FcGoogle size={24}></FcGoogle> Login with Google
                </button>
                <button className="btn w-full btn-outline">
                    <FaGithub size={24}></FaGithub> Login with Github   
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;