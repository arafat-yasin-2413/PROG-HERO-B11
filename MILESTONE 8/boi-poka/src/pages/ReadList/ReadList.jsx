import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../../utilities/addToStorage";
import Book from "../Book/Book";

const ReadList = () => {
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

	return (
		<div>
			<Tabs>
				<TabList>
					<Tab>Read List</Tab>
					<Tab>Wishlist</Tab>
				</TabList>

				<TabPanel>
					<h2>Book I have read: {readList.length}</h2>
					<section className="grid md:grid-cols-2">
						{readList.map((b) => (
							<Book book={b} key={b.bookId}></Book>
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
