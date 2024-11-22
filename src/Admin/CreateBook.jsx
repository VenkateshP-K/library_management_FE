import React, { useState } from 'react'
import bookServices from '../services/bookServices';

function CreateBook() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [description,setDescription] = useState('');

  const handleRegister = async(e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      description
    }
    try {
      const response = await bookServices.createBook(bookData);
      console.log('book creation response:', response);
      alert('book created successfully!');


    //clear the form
    setTitle('');
    setAuthor('');
    setDescription('');
    }
catch(error){
  console.log(error);
}
}

  return (
    <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className='card'>
                        <div className='card-header'>
                            <h2>Hotel Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Author</label>
                                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CreateBook