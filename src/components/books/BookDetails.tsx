import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import { deleteBook } from '../../utils/api';

interface BookDetailsParams {
  id: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const BookDetails: React.FC = () => {
  const { id } = useParams<BookDetailsParams>();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      // Handle success (e.g., show a success message, redirect, etc.)
      navigate('/books'); // Redirect to book list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
      {/* Other book details */}

      {/* {book.reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))} */}
<Link to={`/books/${book?._id}/edit`}>Edit</Link>
 
      <button onClick={handleDelete}>Delete Book</button>
      {/* <ReviewForm bookId={id}/> */}
    </div>
  );
};

export default BookDetails;
