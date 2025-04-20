import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
	const { id } = useParams();
	// console.log('book id: ', id);

	const data = useLoaderData();
	// console.log(data);

	const singleBook = data.find((book) => book.bookId === parseInt(id));
	console.log("id: ", id, "book: ", singleBook, "type: ", typeof id);

	// console.log('type of original id: ', typeof singleBook.bookId);

	const {
		bookName,
		image,
		author,
		category,
		rating,
		publisher,
		review,
		tags,
		totalPages,
		yearOfPublishing,
	} = singleBook;
	return (
		// Book Details Container
		<section className="grid grid-cols-2 gap-3 p-4">
			
            <div className="border rounded-2xl p-12 bg-slate-100 shadow-md">
				<img
					className="rounded-xl"
					src={image}
					alt={`image of ${bookName}`}
				/>
			</div>

			<div>
				<h2>{bookName}</h2>

				<h3>By : {author}</h3>

                <div className="border-t w-md border-dashed">

                </div>
                <p>
                    {category}
                </p>
                <div className="border-t w-md border-dashed"></div>

                <p>
                    <span className="font-bold">Review : </span> {review}
                </p>

                <div className="flex gap-8">
                    <span className="font-bold">Tag</span>
                    <p className="flex gap-5">
                        {
                            tags.map((tag,index) => <h5 key={index}>#{tag}</h5>)
                        }
                    </p>
                </div>

                <div className="border-t w-md border-dashed"></div>



                <p>Number of Pages: <span>{totalPages}</span></p>
                <p>Publisher: <span>{publisher}</span></p>
                <p>Year of Publishing: <span>{yearOfPublishing}</span></p>
                <p>Rating: <span>{rating}</span></p>

                <div className="flex gap-5 mb-4 mt-4">
                    <button className="btn btn-primary btn-outline">Read</button>
                    <button className="btn btn-secondary">Wishlist</button>
                </div>
			</div>

		</section>
	);
};

export default BookDetails;
