import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            setAllBooks(data);
        })
    },[] )


    console.log(allBooks);


    return (
        <div>
            <h1>hello ami books</h1>
        </div>
    );
};

export default Books;