import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { updateBook } from '../../utils/api';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

interface BookDetailsParams {
  id: string;
  [key: string]: string | undefined;
}

const EditBook: React.FC = () => {
  const { id } = useParams<BookDetailsParams>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`https://redux-book-store-server.vercel.app/books/${id}`);
      const bookData = response.data;
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setGenre(bookData.genre);
      setPublicationDate(bookData.publicationDate);
      setImage(bookData.image);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const updatedBook = {
        id: id,
        title,
        author,
        genre,
        publicationDate,
        image,
      };
  
      await updateBook(updatedBook);
      // Handle success (e.g., show a success message, redirect, etc.)
      navigate(`/books/${id}`); // Redirect to book details page after update
  
      // Display success message
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: 'Book Updated!',
        text: 'Your book has been successfully updated.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      {/* Login component */}
      <div className="flex shadow-md">
        {/* Login form */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
          <div className="w-72">
            {/* Heading */}
            <h1 className="text-xl font-semibold">Edit Your Book</h1>
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
                <label className="mb-2 block text-xs font-semibold">Image:</label>
                <input
                  type="text"
                  placeholder="Enter the image URL"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>

              <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md" type="submit">
                Update Book
              </button>
            </form>

           
          </div>
        </div>

        {/* Login banner */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg" alt="Login banner" />
        </div>
      </div>

     
    </div>
  );
};

export default EditBook;
