import React, { useEffect, useState } from 'react'
import userServices from '../services/userServices'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userServices.getAllUsers();
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
      }
      fetchUsers();
  })
  return (
    <div className='container mt-3' style={{ margin: '10px' }}>
    <div className='row'>
        <div className='col-md-12'>
            <h1 align='center'>Users</h1>
        </div>
        {users.map((user) => (
            <div key={user._id} className="card" style={{ width: '18rem' , margin: '10px'}}>
                <div className="card-body">
                    <h5 className="card-title">Name: {user.userName}</h5>
                    <p className="card-text">Phone : {user.phoneNumber}</p>
                    <p className="card-text">Location: {user.location}</p>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Users