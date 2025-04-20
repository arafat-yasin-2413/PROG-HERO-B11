import React from 'react';
import bookImage from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className='flex justify-around p-16 items-center bg-slate-100 rounded-3xl my-6 shadow-md hidden'>
            <div className=''>
                <h1 className='text-6xl mb-6 font-medium '>Books to freshen <br /> up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>

            <div>
                <img className='w-full rounded-3xl' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;