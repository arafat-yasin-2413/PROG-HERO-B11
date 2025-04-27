import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
	const [user, setUser] = useState(null);
	// prothome jodi use na thake, tai initial value 'null' dilam

	const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


	const handleGoogleSignIn = () => {
		console.log("sign in clicked");

		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result.user);
				setUser(result.user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSignOut = () => {
		console.log("clicked sign out");
		signOut(auth)
			.then(() => {
				console.log("sign out completed");
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};


    const handleGithubSignin = () => {
        console.log('sign in with github button clicked');

        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);

            if(!loggedInUser.email && loggedInUser?.providerData?.length) {
                console.log('user email is not directly provided', loggedInUser.providerData);
            }


            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }


	return (
		<div>
			<h2>Please Login</h2>

			{
            user ? 
				<button onClick={handleSignOut}>Sign Out</button>
			    : 
                <>
                	<button onClick={handleGoogleSignIn}>Sign in with Google</button>
                    <button onClick={handleGithubSignin}>Sign In with Github</button>
                
                </>
			}

			{user && (
				<div>
					<h3>User Name: {user.displayName}</h3>
					<h3>Email: {user.email}</h3>
					<img src={user.photoURL} alt="" />
				</div>
			)}
		</div>
	);
};

export default Login;
