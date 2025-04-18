import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    // const user = use(userPromise);
    const {name, username} = use(userPromise);

    // console.log('user details2 : ', user);

    return (
        <div>

            <p>
                <small>
                    user name: {username}
                </small>
            </p>

            <p>
                {name}
            </p>
            
        </div>
    );
};

export default UserDetails2;