import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../../utilities/addToStorage";
import Book from "../Book/Book";
import BookReadList from "../Book/BookReadList";

const ReadList = () => {
    const [sort, setSort] = useState("");
	const [readList, setReadList] = useState([]);

	const allBooks = useLoaderData();
	console.log("allbooks in readlist: ", allBooks);

	useEffect(() => {
		const storedBooksIds = getStoredBooks();
		// console.log(storedBooksIds);

		const convertedStoredBooksIds = storedBooksIds.map((id) =>
			parseInt(id)
		);
		// console.log(convertedStoredBooksIds);

		const myReadList = allBooks.filter((book) =>
			convertedStoredBooksIds.includes(book.bookId)
		);
		// console.log(myReadList);
		setReadList(myReadList);
	}, []);


    const handleSort=(type)=>{
        setSort(type);

        if(type === "pages"){
            const sortedByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages)
        }

        else if(type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRatings);
        }
    }


	return (
		<div>
			<div className="dropdown">
				<div tabIndex={0} role="button" className="btn m-1">
					Sort by : {sort ? sort: " "} (Ascending)
				</div>
				<ul 
					tabIndex={0}
					className="dropdown-content menu bg-red-300 rounded-box z-1 w-52 p-2 shadow-sm"
				>
					<li>
						<a onClick={()=> handleSort("pages")}>Pages</a>
					</li>
					<li>
						<a onClick={()=> handleSort("ratings")}>Ratings</a>
					</li>
				</ul>
			</div>
			<Tabs>
				<TabList>
					<Tab>Read List</Tab>
					<Tab>Wishlist</Tab>
				</TabList>

				<TabPanel>
					<h2>Book I have read: {readList.length}</h2>
					<section className="my-3 mx-2">
						{readList.map((b) => (
							// <Book book={b} key={b.bookId}></Book>
                            <BookReadList key={b.bookId} book = {b}></BookReadList>
						))}
					</section>
				</TabPanel>

				<TabPanel>
					<h2>My Wishlist</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;
