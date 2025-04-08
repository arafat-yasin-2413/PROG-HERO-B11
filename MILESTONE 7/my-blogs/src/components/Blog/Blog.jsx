import React from "react";
import { FaBookmark } from "react-icons/fa";




const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
	// console.log(blog);

	return (
		<div className="m-2">


			<div className="card bg-base-100 shadow-md">
				<figure>
					<img
						src={blog.cover}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">

                    <div className="author flex justify-around items-center" >

                        <h3>{blog.author}</h3>
                        <img className="w-16" src={blog.author_img} alt="" />

                        <button onClick={()=> handleBookMark(blog)} className="btn">
                            <FaBookmark size={25}/>
                        </button>
                    </div>


					<h2 className="card-title">{blog.title}</h2>
					<p>
						A card component has a figure, a body part, and inside
						body there are title and actions parts
					</p>

                    <div className="flex">
                    {
                        blog.hashtags.map((hashtag, index) => <p key={index}>#{hashtag}</p>)
                    }
                    </div>

                    

					<div className="card-actions justify-end">
						<button onClick={()=>handleMarkAsRead(blog.reading_time, blog.id
)} className="btn btn-primary">Mark as Read</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
<h1>Single blog</h1>;
