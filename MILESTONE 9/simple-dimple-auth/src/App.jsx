import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase.init";
import { useState } from "react";






const googleProvider = new GoogleAuthProvider()







function App() {

    const [user, setUser] = useState(null)


    const handleGoogleSignIn = () => {
        console.log('clicked google sign in');

        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })

        .catch(error=> {
            console.log(error);
        })

    }


	return (
		<>
			<h2>Simple Dimple Auth</h2>

            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            {
                user && <div>
                    <h3>user Name : {user.displayName}</h3>
                </div>
            }
		</>
	);
}

export default App;
