import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'


const Navbar = () => {


    const links = <>
        <NavLink to="/" className="">Home</NavLink>
        <NavLink to="/about" className="">About</NavLink>
        <NavLink to="career" className="">Career</NavLink>
    
    </>

    return (
        <div className="flex justify-between items-center">
            <div className=''>
                
            </div>
            <div className='nav flex gap-5 text-accent'>
                {links}
            </div>

            <div className="login-btn flex gap-5">
                <img src={user} alt="" />
                <button className="btn btn-primary px-10 text-xl">Login</button>
            </div>
        </div>
    );
};

export default Navbar;