import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const SignUp = () => {
	const [errorMessage, setErrorMessage] = useState("");

	const handleSignUp = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		// console.log(email, password);


        setErrorMessage('');

		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage(error.message);
			});
	};

	return (
		<div className="card bg-base-100 w-full max-w-sm mt-4 border border-indigo-100 mx-auto  shrink-0 shadow-2xl">
			<div className="card-body">
				<h1 className="text-3xl font-bold ">Please Sign Up Now</h1>
				<form onSubmit={handleSignUp} className="space-y-4">
					<label className="label">Email</label>
					<input
						type="email"
						name="email"
						className="input"
						placeholder="Email"
					/>
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
					<button className="btn w-full hover:bg-black hover:text-white hover:font-bold mt-4 ">
						Sign Up
					</button>
				</form>

				{errorMessage && <p className="text-red-400">{errorMessage}</p>}
			</div>
		</div>
	);
};

export default SignUp;
