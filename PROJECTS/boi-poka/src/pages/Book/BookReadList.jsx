import React from 'react';

const BookReadList = ({book}) => {

    const { bookId,bookName, author, image, rating, category, tags, yearOfPublishing, publisher, totalPages } = book;

    return (
        <div className='flex border border-pink-300 mt-2 w-2/4 gap-3 p-3 items-center'>
            <div>
                <img className='w-28' src={image} alt={`image of ${bookName}`} />
            </div>

            <div>
                <h2>{bookName}</h2>
                <h2>By: {author}</h2>
                <h2>Pages : {totalPages}</h2>
                <h2>Ratings: {rating}</h2>
                <h2>Published : {yearOfPublishing}</h2>
            </div>
        </div>
    );
};

export default BookReadList;