const getStoredBooks = () => {
    const storedBooksSTR = localStorage.getItem('readlist');
    console.log('storedBooksSTR : ', storedBooksSTR);

    if(storedBooksSTR) {
        const storedBooks = JSON.parse(storedBooksSTR);
        return storedBooks;
    }

    else{
        return [];
    }
}


const addBookIdToStorage=(id)=>{
    const allStoredBooks = getStoredBooks();

    if (allStoredBooks.includes(id)) {
        alert('ei id already exist')
    }

    else{
        allStoredBooks.push(id);
        localStorage.setItem("readlist", JSON.stringify(allStoredBooks));
    }


}


export {addBookIdToStorage};