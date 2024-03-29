import { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() =>{
        fetch('/bookList.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className="my-24">
            <div className="text-center mb-9">
                <h1 className="font-playfair text-5xl font-bold">Books</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                {
                    books.map(book => <Book
                    key={book.bookId}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;