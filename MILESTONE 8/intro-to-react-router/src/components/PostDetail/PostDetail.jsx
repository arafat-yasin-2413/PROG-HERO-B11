import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {

    const post = useLoaderData();
    // console.log(post);

    const navigate = useNavigate();



    return (
        <div style={{
            border: '2px solid green',
            margin: '10px',
            padding: '10px',
            borderRadius: '20px',
        }}>

            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>


            <button onClick={()=> navigate(-1)}>
                Go Back
            </button>
            
        </div>
    );
};

export default PostDetail;