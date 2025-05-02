import React from 'react';

import swim from '../../assets/swimming.png'
import classRoom from '../../assets/class.png'
import playGround from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-5">QZone</h2>

            <div className='space-y-5'>
                <img className='md:w-full' src={swim} alt="" />
                <img className='md:w-full' src={classRoom} alt="" />
                <img className='md:w-full' src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;