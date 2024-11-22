import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <p>Welcome</p>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_k4_zdB6Mqj7bjmr6pS-VA99GdZdEdI0jlxw8DChqQBrHaS6d5oLxBHqGBpvuAE8D_I&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Library Management App</h5>
                            <p className="card-text">Library management systems are designed to manage the movement of books and maintain records of the members in a library. The software solution is designed based on the system requirements, the people involved, the content of the operation and the activity to be performed.</p>
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home