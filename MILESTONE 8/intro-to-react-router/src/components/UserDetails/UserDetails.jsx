import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name,website} = user;


    // const params = useParams();
    // console.log(params);

    const {userId} = useParams();
    console.log(userId);
    

    return (
        <div>
            <h3>This is User Details here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;