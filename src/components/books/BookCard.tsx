import React from 'react';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  };
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
      <Link to={`/books/${book._id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
