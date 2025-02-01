import React, { useEffect, useState } from 'react'
import bookServices from '../services/bookServices'

function RentedBooks() {
  const [rentedBooks, setRentedBooks] = useState([]);

  useEffect(() => {
    const fetchRentedBooks = async () => {
      try {
        const response = await bookServices.getRentedBooks();
        console.log(response);
        if (response && response.data && Array.isArray(response.data.rentedBooks)) {
          setRentedBooks(response.data.rentedBooks);
        }
      } catch (error) {
        console.error("Error fetching rented books:", error);
      }
    };

    fetchRentedBooks();
  })

  //return a book
  const handleReturn = async (bookId) => {
    try {
        await bookServices.returnBook(bookId);
        alert("Book returned successfully");
        setBooks(books.map(book => 
            book._id === bookId ? { ...book, isRented: false } : book
        ));
    } catch (error) {
        console.error("Error returning book:", error);
    }
};

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12'>
          <h4 className='text-center'>Rented Books</h4>
        </div>
        {rentedBooks.map(book => (
          <div key={book._id}
            className="card mb-3" style={{ width: '18rem', marginLeft: '10px' }}>
            <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Author: {book.author}</p>
              <p className="card-text">Description: {book.description}</p>
              <button className="btn btn-primary" onClick={() => handleReturn(book._id)}>Return</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RentedBooks