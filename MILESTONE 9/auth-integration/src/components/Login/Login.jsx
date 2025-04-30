import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {

    const {signInUser} = use(AuthContext);



    const handleLogin=(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
        .then((result)=> {
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })


    }

	return (
		<div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0  shadow-2xl ">
			<h1 className="text-3xl text-center font-bold">Login now!</h1>
			<div className="card-body ">
				<form onSubmit={handleLogin}>
					<label className="label mt-2" >Email</label>
					<input type="email" name="email" className="input mt-2" placeholder="Email" />
					<label className="label mt-2">Password</label>
					<input
						type="password"
                        name="password"
						className="input mt-2"
						placeholder="Password"
					/>
					<div className="mt-2">
						<a className="link link-hover mt-2">Forgot password?</a>
					</div>
					<button className="btn btn-neutral mt-4 hover:bg-gray-500">Login</button>
				</form>

                <p>New to this website? Please <Link to="/register" className="text-blue-500 underline">Register</Link></p>
			</div>
		</div>
	);
};

export default Login;
