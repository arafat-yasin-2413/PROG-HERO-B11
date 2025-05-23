import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addBookIdToStorage } from "../../utilities/addToStorage";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



import { ToastContainer, toast } from 'react-toastify';



const BookDetails = () => {
	const { id } = useParams();
	// console.log('book id: ', id);

	const data = useLoaderData();
	// console.log('printing',data);

	const singleBook = data.find((book) => book.bookId === parseInt(id));
	// console.log("id: ", id, "book: ", singleBook, "type: ", typeof id);

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


    const handleMarkAsRead=(id)=>{
        // console.log('handleMarkAsRead... Id paisi. ', id, 'type: ', typeof id);


        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   })

        toast("Wow so easy!");

        addBookIdToStorage(id);
    }

    


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

                <ToastContainer></ToastContainer>

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
                    <div className="flex gap-5">
                        {
                            tags.map((tag,index) => <h5 key={index}>#{tag}</h5>)
                        }
                    </div>
                </div>

                <div className="border-t w-md border-dashed"></div>



                <p>Number of Pages: <span>{totalPages}</span></p>
                <p>Publisher: <span>{publisher}</span></p>
                <p>Year of Publishing: <span>{yearOfPublishing}</span></p>
                <p>Rating: <span>{rating}</span></p>

                <div className="flex gap-5 mb-4 mt-4">
                    <button onClick={()=> handleMarkAsRead(id)} className="btn btn-primary btn-outline">Mark As Read</button>
                    <button className="btn btn-secondary">Add To Wishlist</button>
                </div>
			</div>

		</section>
	);
};

export default BookDetails;
