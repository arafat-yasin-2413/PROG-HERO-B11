import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mb-5">Find Us on</h2>

            <div>
                <div className="join join-vertical w-full ">
                    <button className="btn join-item text-accent bg-base-100 justify-start gap-4 py-5">
                        
                        
                        <span className='bg-[#3b5998] text-white p-1 rounded-full'>
                            <FaFacebookF  size={20}></FaFacebookF> 
                        </span>
                        
                        Facebook
                    </button>
                    
                    <button className="btn join-item text-accent bg-base-100 justify-start gap-4 py-5">
                        
                        <span className='bg-[#1DA1F2] text-white p-1 rounded-full'>
                            <FaTwitter size={20}></FaTwitter>
                        </span>
                        
                        Twitter
                        
                        </button>
                    
                    <button className="btn join-item text-accent bg-base-100 justify-start gap-4 py-5">
                        
                        <span className='bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-1 rounded-full'>
                            <FaInstagram size={20}></FaInstagram> 
                        </span>
                        
                        Instagram
                        </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;