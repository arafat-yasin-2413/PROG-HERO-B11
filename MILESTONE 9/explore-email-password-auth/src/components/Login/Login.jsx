
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";
import { SiSourceengine } from "react-icons/si";

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false);


    const handleLogin=(e)=> {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(email, password);


        setErrorMessage('');
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
        .then((result => {
            console.log(result.user);
            setSuccess(true);

        }))
        .catch((error=> {
            console.log(error.message);
            setErrorMessage(error.message)
        }))

    }










	return (
		<div className="card bg-base-100 w-full mx-auto my-10 border border-indigo-200 max-w-sm shrink-0 shadow-2xl">
			<div className="card-body">
				<h1 className="text-5xl font-bold">Login now!</h1>
				<form onSubmit={handleLogin} className="fieldset">
					<label className="label">Email</label>
					<input name="email" type="email" className="input" placeholder="Email" />
					<label className="label">Password</label>
					<input
						type="password"
                        name="password"
						className="input"
						placeholder="Password"
					/>
					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>
					<button className="btn btn-neutral mt-4">Login</button>
				</form>

                {
                    errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>
                }

                {
                    success && <p className="text-green-500 font-semibold">User Login Successfull.</p>
                }


                <p>New to this website? Please <Link to="/signup" className="text-blue-500 underline"> Sign Up</Link></p>
			</div>
		</div>
	);
};

export default Login;
