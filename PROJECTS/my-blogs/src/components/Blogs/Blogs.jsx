import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	console.log(blogs);

	return (
		<div>
			<h1 className="text-3xl">total blogs : {blogs.length}</h1>

			<div className="all-blogs-container grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
				{blogs.map((blog) => (
					<Blog
						blog={blog}
						key={blog.id}
						handleBookMark={handleBookMark}
                        handleMarkAsRead={handleMarkAsRead}
					></Blog>
				))}
			</div>
		</div>
	);
};

export default Blogs;
