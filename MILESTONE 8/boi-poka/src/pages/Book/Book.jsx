import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
	// console.log(book);

	const { bookId,bookName, author, image, rating, category, tags, yearOfPublishing, publisher } = book;

	return (

        <Link to={`/bookDetails/${bookId}`} className="border mx-2">
            <div className="card bg-base-100 shadow-sm border border-amber-200 p-5 my-6">
                <figure className="p-4 rounded-2xl bg-slate-100 w-2/3 mx-auto">
                    <img
                        className="w-28 h-48 
                        rounded-md"
                        src={image}
                        alt={`image of ${bookName}`}
                    />
                </figure>
                <div className="card-body">
                    {/* tags */}
                    <div className="flex justify-center gap-6">
                        {tags.map((tag, index) => (
                            <button className="btn btn-sm text-blue-600 font-semibold" key={index}>
                                {tag}
                            </button>
                        ))}
                    </div>


                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary text-[12px] py-4">Published: {yearOfPublishing}</div>
                    </h2>
                    <p className="">
                        Publisher: {publisher}
                    </p>

                    <p>
                        By: <span className="font-medium">{author}</span>
                    </p>

                    <div className="border-t border-dashed border-gray-400">

                    </div>


                    <div className="card-actions justify-end ">
                        <div className="badge font-medium">{category}</div>
                        <div className="badge font-medium">
                            {rating} <FaStarHalfAlt></FaStarHalfAlt>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
	);
};

export default Book;
