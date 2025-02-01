import React from 'react';
import { Link } from 'react-router-dom';

function SideBar({ user }) {
  const isAdmin = user && user.role === 'admin';

  return (
    <div className="d-flex" style={{ width: '150px'}}>
      <ul className="nav flex-column">
        <li>
          <Link to="/dashboard/books" className="nav-link link-dark">
            <button className='btn btn-dark' style={{ width: '150px' }}>Books</button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/rentedBooks" className="nav-link link-dark">
          <button className='btn btn-dark'  style={{ width: '150px' }}>Rented Books</button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/update" className="nav-link link-dark">
          <button className='btn btn-dark'  style={{ width: '150px' }}>Update Profile</button>
          </Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/dashboard/createBook" className="nav-link link-dark">
              <button className='btn btn-dark'  style={{ width: '150px' }}>Create Book</button>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allRentedBooks" className="nav-link link-dark">
              <button className='btn btn-dark'  style={{ width: '150px' }}>All Rented Books</button>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="nav-link link-dark">
              <button className='btn btn-dark'  style={{ width: '150px' }}>Users</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default SideBar;