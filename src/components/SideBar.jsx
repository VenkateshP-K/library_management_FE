import React from 'react';
import { Link } from 'react-router-dom';

function SideBar({ user }) {
  const isAdmin = user && user.role === 'admin';

  return (
    <div className="d-flex" style={{width: '150px'}}>
      <ul className="nav flex-column">
        <li>
          <Link to="/dashboard/books" className="nav-link link-dark">Books</Link>
        </li>
        <li>
          <Link to="/dashboard/rentedBooks" className="nav-link link-dark">Rented Books</Link>
        </li>
        <li>
          <Link to="/dashboard/update" className="nav-link link-dark">Update Profile</Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/dashboard/createBook" className="nav-link link-dark">Create Book</Link>
            </li>
            <li>
              <Link to="/dashboard/allRentedBooks" className="nav-link link-dark">AllRentedBooks</Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="nav-link link-dark">Users</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default SideBar;