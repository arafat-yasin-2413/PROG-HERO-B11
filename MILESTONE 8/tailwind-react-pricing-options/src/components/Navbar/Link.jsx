import React from 'react';

const Link = ({route}) => {
    return (
        <li>
            <a className='px-2 mr-4 lg:mr-10 hover:bg-amber-400' href={route.path}>{route.name}</a>
            
        </li>
    );
};

export default Link;