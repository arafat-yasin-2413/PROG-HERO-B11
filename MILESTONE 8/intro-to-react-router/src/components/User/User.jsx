import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {id,name, email, phone ,password} = user;


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
             
        </div>
    );
};

export default User;