import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('secret')

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('submitted');
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" 
                id="" placeholder='Email' required 
                />
                <br />
                <input type="password" name="password" 
                id="" placeholder='Password'  required
                onChange={handlePasswordOnChange} defaultValue={password} 
                />
                <br />
                <input type="submit" value="Submit" />
            </form>      
        </div>
    );
};

export default ControlledField;