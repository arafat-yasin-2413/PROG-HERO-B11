import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase.init';

const Register = () => {

    const handleRegister=(e)=>{
        e.preventDefault();


        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email,password);


        // creating user
        createUserWithEmailAndPassword(auth,email, password)
        .then((result)=> {
            console.log(result);
        })
        .catch((error)=> {
            console.log(error);
        })
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0  shadow-2xl ">
			<h1 className="text-3xl text-center font-bold">Register now!</h1>
			<div className="card-body ">
				<form onSubmit={handleRegister}>
					<label className="label mt-2" >Name</label>
					<input type="text" name="name" className="input mt-2" placeholder="your name" />
					<label className="label mt-2" >Email</label>
					<input type="email" name="email" className="input mt-2" placeholder="Email" />
					<label className="label mt-2">Password</label>
					<input
						type="password"
                        name="password"
						className="input mt-2"
						placeholder="Password"
					/>
					
					<button className="btn btn-neutral mt-4 hover:bg-gray-600 ">Register</button>
				</form>

                <p>Already have an account? Please <Link to="/login" className="text-blue-500 underline">Login</Link></p>
			</div>
		</div>
    );
};

export default Register;