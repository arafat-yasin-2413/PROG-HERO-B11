import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
            <img className='w-[350px]' src={logo} alt="" />

            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;