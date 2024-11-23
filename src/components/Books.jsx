import React, { useEffect, useState } from 'react';
import bookServices from '../services/bookServices';

function Books() {
    const [books, setBooks] = useState([]);
    const currentUserId = localStorage.getItem('currentUserId'); // Retrieve user ID from local storage

    const fetchBooks = async () => {
        try {
            const response = await bookServices.getAllBooks();
            setBooks(response.data.books);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleRent = async (bookId) => {
        try {
            const response = await bookServices.rentBook(bookId);
            alert(response.data.message);
            fetchBooks(); // Refresh the book list
        } catch (error) {
            console.error('Error renting book:', error);
            alert('Could not rent book. Please try again.');
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            <div className='container mt-3'>
                <div className='row mt-3'>
                    <div className='col-md-12'>
                        <h4 className='text-center'>Rented Books</h4>
                    </div>
                    {books.map((book) => (
                        <div key={book._id} className='card-mb-3' style={{ width: '18rem', marginLeft: '10px' }}>
                            <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
                            <div className="card-header"> <p><strong>Title:</strong> {book.title}</p></div>
                            <div className="card-body"><p><strong>Author:</strong> {book.author}</p>
                                <p><strong>Description:</strong> {book.description}</p>
                                <p><strong>Status:</strong> {book.isRented ? (
                                    book.rentedBy === currentUserId ? 'Rented by you' : 'Unavailable'
                                ) : 'Available'}</p>
                                {!book.isRented && (
                                    <button onClick={() => handleRent(book._id)} className="btn btn-primary">
                                        Rent Book
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Books;