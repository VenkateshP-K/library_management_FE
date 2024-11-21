import React, {useEffect, useState} from 'react'
import userServices from '../services/userServices'
import { useNavigate } from 'react-router-dom'

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

  return (
    <>
     <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Hi {user.userName}</a>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      </>
  )
}

export default Dashboard