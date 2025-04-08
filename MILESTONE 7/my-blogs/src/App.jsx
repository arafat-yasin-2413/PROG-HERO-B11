import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [bookMarked, setBookMarked] = useState([]);
    const [readingCount, setReadingCount] = useState(0);

	const handleBookMark = (blog) => {
		// console.log(blog);
		// console.log('bookmark button clicked', blog);

		setBookMarked([...bookMarked, blog]);
	};

	const handleMarkAsRead = (time) => {
		console.log("handle mark as read working ....", time);
        setReadingCount(readingCount + time);
	};

	return (
		<>
			<Navbar></Navbar>

			<div className="main-container flex text-center">
				<div className="left-container w-[70%] border-2">
					<Blogs
						handleBookMark={handleBookMark}
						handleMarkAsRead={handleMarkAsRead}
					></Blogs>
				</div>

				<div className="right-container w-[30%] border-2">
					<h1>Reading time : {readingCount} </h1>
					<h2>Bookmarked count : {bookMarked.length} </h2>

					{bookMarked.map((bookmark) => (
						<p className="bg-green-500 m-2 p-3 rounded-md text-white" key={bookmark.id}>
							{bookmark.title}
						</p>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
