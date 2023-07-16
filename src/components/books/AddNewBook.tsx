import React, { useState } from 'react';
import { addNewBook } from '../../utils/api';
import Swal from 'sweetalert2';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFormSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const newBook = {
        title,
        author,
        genre,
        publicationDate,
        image: imageUrl, // Pass the image URL instead of uploading the file
      };

      const response = await addNewBook(newBook);
      console.log('New book added:', response);

      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
      setImageUrl('');

      // Display success message with Swal notification
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: 'Book Added!',
          text: 'Your book has been added successfully.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'OK',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Perform any additional logic or navigate to another page if needed
          }
        });
    } catch (error) {
      console.error('Error adding new book:', error);
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      {/* Add book form */}
      <div className="flex shadow-md">
        {/* Add book form */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
          <div className="w-72">
            {/* Heading */}
            <h1 className="text-xl font-semibold">Add New Book</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* Form */}
            <form className="mt-4" onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Title:</label>
                <input
                  type="text"
                  placeholder="Enter the book title"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Author:</label>
                <input
                  type="text"
                  placeholder="Enter the book author"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Genre:</label>
                <input
                  type="text"
                  placeholder="Enter the book genre"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Publication Date:</label>
                <input
                  type="date"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={publicationDate}
                  onChange={(e) => setPublicationDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Image URL:</label>
                <input
                  type="text"
                  placeholder="Enter the image URL"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>

              <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md" type="submit">
                Add Book
              </button>
            </form>
          </div>
        </div>

        {/* Login banner */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Login banner" />
        </div>
      </div>

  
    </div>
  );
};

export default AddNewBook;
