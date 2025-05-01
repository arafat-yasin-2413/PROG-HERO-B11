import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={
                
                <div className='flex justify-center items-center h-12 mt-4'>
                    <p className="loading loading-dots loading-xl"></p>
                </div>
                
                
                }>

                <Categories></Categories>

            </Suspense>
        </div>
    );
};

export default LeftAside;