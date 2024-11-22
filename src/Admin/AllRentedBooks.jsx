import React, { useEffect, useState } from 'react'
import bookServices from '../services/bookServices'

function AllRentedBooks() {
  const [allRentedBooks, setAllRentedBooks] = useState([]);

  useEffect(() => {
    const fetchRentedBooks = async () => {
      try {
        const response = await bookServices.booksRentedByAllUsers();
        if (response && response.data && Array.isArray(response.data.allRentedBooks)) {
          setAllRentedBooks(response.data.allRentedBooks);
        }
      } catch (error) {
        console.error("Error fetching rented books:", error);
      }
    };
  
    fetchRentedBooks();
  })
  return (
    <>
    <h4>All Rented Books</h4>
    {allRentedBooks.map((book) => (
      <div key={book._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
        {book.isRented && book.rentedBy && (
          <>
            <p><strong>Rented By:</strong> {book.rentedBy.userName}</p>
            <p><strong>Phone Number:</strong> {book.rentedBy.phoneNumber}</p>
          </>
        )}
      </div>
    ))}
    </>
  )
}

export default AllRentedBooks