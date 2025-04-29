import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
	const [success, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleSignUp = (e) => {
		e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
        const terms = e.target.terms.checked;

		// console.log(email, password);
        // console.log(terms);

		setSuccess(false);
		setErrorMessage("");

        if(!terms) {
            setErrorMessage('Please Accept our Terms & Conditions.');
            return;
        }

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

		if (!haveLength.test(password)) {
			setErrorMessage("Password must be 8 character or long!!");
			return;
		} else if (!haveDigitExp.test(password)) {
			setErrorMessage("Password must have at least one Digit!!!");
			return;
		} else if (!haveLowerCase.test(password)) {
			setErrorMessage("Password must have one Lowercase Letter!");
			return;
		} else if (!haveUpperCase.test(password)) {
			setErrorMessage("Password must have one Uppercase Letter!");
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result.user);
                // console.log(auth.currentUser);
                
                // email verify here
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    
                    setSuccess(true);
                    alert('Sent you an verification email. Please check your email')
                })

                // update user profile
                const profile = {
                    displayName: name,
                    photoURL: photo,
                }
                updateProfile(auth.currentUser, profile)
                .then(()=>{
                    console.log('User Profile Updated');
                })
                .catch((error)=> {
                    console.log(error);
                })
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
					<label className="label">Name</label>
					<input
						type="text"
						name="name"
						className="input"
						placeholder="your name"
					/>
					<label className="label">Photo URL</label>
					<input
						type="text"
						name="photo"
						className="input"
						placeholder="photo URL"
					/>
					<label className="label">Email</label>
					<input
						type="email"
						name="email"
						className="input"
						placeholder="Email"
					/>

					<label className="label">Password</label>

					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							className="input pr-12"
							placeholder="Password"
						/>

						<span
							onClick={() => {
								setShowPassword(!showPassword);
							}}
							className="absolute p-1 mt-1 -ml-10 border border-gray-300 rounded-md hover:bg-indigo-500 hover:text-white"
						>
							{showPassword ? (
								<FaEyeSlash size={20}></FaEyeSlash>
							) : (
								<BiShow size={20}></BiShow>
							)}
						</span>
					</div>

					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>

					<label className="label text-gray-600 font-semibold ">
						<input
							type="checkbox"
							name="terms"
							className="checkbox"
						/>

						Accept Terms & Conditions
					</label>

					<button className="btn w-full hover:bg-black hover:text-white hover:font-bold mt-4 ">
						Sign Up
					</button>
				</form>

                <p>Already have an account ? Please <Link to="/login" className="text-blue-500 underline">Login</Link></p>

				{errorMessage && (
					<p className="text-red-400 font-semibold">{errorMessage}</p>
				)}

				{success && (
					<p className="text-green-500 font-semibold">
						User Has been Created Successfully.
					</p>
				)}
			</div>
		</div>
	);
};

export default SignUp;
