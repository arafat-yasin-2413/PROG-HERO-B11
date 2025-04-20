import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ book }) => {
	console.log(book);

    const { bookName, author, image, rating, category  } = book;

	return (
		<div className="card bg-base-100 shadow-sm border border-amber-200 p-6">
			<figure className="p-4 rounded-2xl bg-slate-100 w-2/3 mx-auto">
				<img 
                    className="w-28 rounded-md"
					src={image}
					alt={`image of ${bookName}`}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>
					A card component has a figure, a body part, and inside body
					there are title and actions parts
				</p>
				<div className="card-actions justify-end ">
					<div className="badge font-medium">{category}</div>
					<div className="badge font-medium">{rating} <FaStarHalfAlt></FaStarHalfAlt> </div>
				</div>
			</div>
		</div>
	);
};

export default Book;
