import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const SignUp = () => {
    const [success, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSignUp = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		// console.log(email, password);


        setSuccess(false);
        setErrorMessage('');


        // password validation
        // const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        // if(!passwordRegExp.test(password)){
        //     setErrorMessage('Password must have one lowercase, one uppercase, one digit and minimum 8 characters long!!')
        //     return;
        // } 


        const haveDigitExp = /(?=.*\d)/;
        const haveLowerCase = /(?=.*[a-z])/;
        const haveUpperCase = /(?=.*[A-Z])/;
        const haveLength = /^.{8,}$/;

        if(!haveLength.test(password)) {
            setErrorMessage('Password must be 8 character or long!!')
            return;
        }

        else if(!haveDigitExp.test(password)) {
            setErrorMessage('Password must have at least one Digit!!!');
            return;
        }

        else if(!haveLowerCase.test(password)){
            setErrorMessage('Password must have one Lowercase Letter!')
            return;
        }

        else if(!haveUpperCase.test(password)){
            setErrorMessage('Password must have one Uppercase Letter!')
            return;
        }

        

		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result);
                setSuccess(true)
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

				{errorMessage && <p className="text-red-400 font-semibold">{errorMessage}</p>}
			
                {
                    success && <p className="text-green-500 font-semibold">User Has been Created Successfully.</p>
                }
            </div>
		</div>
	);
};

export default SignUp;
