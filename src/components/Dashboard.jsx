import React, {useEffect, useState} from 'react'
import userServices from '../services/userServices'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from './SideBar';

function Dashboard() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await userServices.GetMe();
            setUser(response.data.user);  
        } catch (error) {
            if (error.response?.status === 401) {
                navigate('/login');  // Redirect to login if unauthorized
            } else {
                console.error("Error fetching user data:", error);
            }
        }
    };

    fetchUserData();  // Call the function to fetch user data
}, [navigate]);

const handleLogout = async () => {
  try {
    await userServices.Logout();
    localStorage.removeItem('token');
    navigate('/login');
  } catch (error) {
    console.error('Logout error:', error);
  }
};

const isRootPath = location.pathname === '/dashboard';

  return (
    <>
     <>
      <nav className="navbar">
        <div className="container-fluid">
          <h2 className="navbar-brand">Hi {user.userName}</h2>
          <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="row mt-5">
        <div className="col-md-3">
          <SideBar user={user} />
        </div>
        <div className="col-md-9">
          {isRootPath && (
            <>
              <h2>Welcome {user.userName}</h2>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
              <p>Phone Number: {user.phoneNumber}</p>
            </>
          )}
          <Outlet />
        </div>
      </div>
    </>
    </>
  )
}

export default Dashboard