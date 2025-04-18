import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const [showInfo,setShowInfo] = useState(false);
    const {id,name, email, phone } = user;



    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json());


    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px',

    }

    return (
        <div style={userStyle}>


            <h2>{name}</h2>
            <h5>Email: {email}</h5>
            <h6>Phone: {phone}</h6>

            <Link to={`/users/${id}`}>Show Details</Link>
            <br />
            <br />
            <button onClick={()=> setShowInfo(!showInfo)}>
                { showInfo ? 'Hide' : 'Show'} info
            </button>


            {
                showInfo && <Suspense fallback={<span>Loading .....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
             
        </div>
    );
};

export default User;