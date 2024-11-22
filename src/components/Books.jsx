import React, { useEffect, useState } from 'react'
import bookService from '../services/bookServices'

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await bookService.getAllBooks();
                setBooks(response.data.books);
                console.log(response.data.books);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    //rent a book
    const handleRent = async (bookId) => {
        try {
            await bookService.rentBook(bookId);
            alert("Book rented successfully");
            setBooks(books.map(book => 
                book._id === bookId ? { ...book, isRented: true } : book
            ));
        } catch (error) {
            console.error("Error renting book:", error);
        }
    };

    //return a book
    const handleReturn = async (bookId) => {
        try {
            await bookService.returnBook(bookId);
            alert("Book returned successfully");
            setBooks(books.map(book => 
                book._id === bookId ? { ...book, isRented: false } : book
            ));
        } catch (error) {
            console.error("Error returning book:", error);
        }
    };

    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='text-center'>Books</h4>
                    </div>
                    {books.map((book) => (
                        <div key={book._id}
                            className="card mb-3" style={{ width: '18rem', marginLeft: '10px' }}>
                            <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" >{book.title}</h5>
                                <p className="card-text">{book.description}</p>
                                <p className="card-text">Author : <b>{book.author}</b></p>
                                {book.isRented ? (
                                    <div>
                                        <button className="btn btn-secondary" onClick={() => handleReturn(book._id)}>Return</button>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => handleRent(book._id)}>Rent</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Books