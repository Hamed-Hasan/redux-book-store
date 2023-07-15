import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { updateBook } from '../../utils/api';

interface BookDetailsParams {
  id: string;
}

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id); // Verify that the id is correctly accessed
  
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/books/${id}`);
      const bookData = response.data;
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setGenre(bookData.genre);
      setPublicationDate(bookData.publicationDate);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

const handleFormSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  try {
    const updatedBook = {
      id: id, // Include the id parameter
      title,
      author,
      genre,
      publicationDate,
    };

    await updateBook(updatedBook);
    // Handle success (e.g., show a success message, redirect, etc.)
    navigate(`/books/${id}`); // Redirect to book details page after update
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

  
  

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={e => setPublicationDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
