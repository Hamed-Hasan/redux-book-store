import React, { useState } from 'react';
import { addNewBook } from '../../utils/api';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const newBook = {
        title,
        author,
        genre,
        publicationDate,
      };

      // Send a POST request to the backend API to add a new book
      const response = await addNewBook(newBook);

      // Handle the response as needed (e.g., show a success message, redirect, etc.)
      console.log('New book added:', response);

      // Reset the form inputs
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
    } catch (error) {
      console.error('Error adding new book:', error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
