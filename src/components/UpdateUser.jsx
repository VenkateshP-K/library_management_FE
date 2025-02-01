import React, { useState, useEffect } from 'react';
import userServices from '../services/userServices';

function UpdateUser() {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);

  // Fetch current user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userServices.GetMe();
        if (response && response.data.user) {
          setUserData({
            userName: response.data.user.userName,
            email: response.data.user.email,
            phoneNumber: response.data.user.phoneNumber,
            location: response.data.user.location,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userServices.UpdateUser(
        userData.userName,
        userData.email,
        userData.phoneNumber,
        userData.location
      );
      alert('User details updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card shadow border-0" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="card-header text-center bg-dark text-white py-2">
            <h2>Update Your Details</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={userData.userName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-12">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={userData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;