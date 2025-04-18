import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const [showInfo,setShowInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false); 

    const location = useLocation();
    console.log(location);

    const {id,name, email, phone } = user;


    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json());


    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px',

    }

    if(visitHome) {
        return <Navigate to="/"></Navigate>
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


            <button onClick={()=> setVisitHome(true)}>Visit Home</button>
             
        </div>
    );
};

export default User;