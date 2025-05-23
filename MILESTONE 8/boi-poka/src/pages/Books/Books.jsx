import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=> res.json())
    //     .then(data => {
    //         // console.log(data);
    //         setAllBooks(data);
    //     })
    // },[] )


    // console.log(allBooks);



    // const booksPromise = fetch('booksData.json').then(res=> res.json());


    console.log(data);

    return (

        
        <div>
            <h1 className='text-3xl text-center p-6 font-medium'>Books</h1>

            <Suspense fallback={<span>Loading....</span>}>
                {/* all book card container */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;