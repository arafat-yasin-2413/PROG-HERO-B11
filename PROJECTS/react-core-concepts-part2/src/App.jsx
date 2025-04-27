import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Friends from "./Friends";
import { Suspense, useState } from "react";
import Posts from "./Posts";

import Players from "./Players";
import ShowHideText from "./ShowHide";
import Users from "./Users";

// const fetchFriends = async () => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 	return res.json();
// };


// const fetchPosts = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }


const fetchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

function App() {
	// const friendsPromise = fetchFriends();

    // const postsPromise = fetchPosts();

    const usersPromise = fetchUsers();


	return (
		<>
			<h1>Vite + React</h1>

            <Counter></Counter>

            <ShowHideText></ShowHideText>

            <Suspense fallback={<p>Data is loading ....</p>}>
                <Users usersPromise={usersPromise}></Users>
            </Suspense>











































            {/* <Players></Players> */}


            {/* <Suspense fallback={<p>posts are coming ....</p>}>

                <Posts postsPromise = {postsPromise}></Posts>

            </Suspense> */}



			{/* <Suspense fallback={<p>friends are coming for treat ....</p>}>
				<Friends friendsPromise={friendsPromise}></Friends>
			</Suspense> */}



		</>
	);
}

export default App;

// function handleClick(){
//     alert('I am clicked');
// }

// const handleClick3 = () => {
//     alert('clicked 3');
// }

// const handleAdd5 = (num) => {
//     const newNum = num + 5;
//     alert(newNum)
// }

{
	/* <button onClick={handleClick}>Click Me</button>

<button onClick={
    function handleClick2(){
        alert('clicked 2')
    }
}>Click Me 2</button>

<button onClick={handleClick3}>Click Me 3</button>

<button onClick={()=> handleAdd5(7)}>Click Me to Add 5</button> */
}
