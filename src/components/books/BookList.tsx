import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { getAllBooks } from '../../utils/api';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, selectedGenre]);

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filteredBooks = books.filter(book => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      return (
        book.title.toLowerCase().includes(lowercasedSearchTerm) ||
        book.author.toLowerCase().includes(lowercasedSearchTerm) ||
        book.genre.toLowerCase().includes(lowercasedSearchTerm)
      );
    });

    setFilteredBooks(filteredBooks);
  };

  const handleFilter = (selectedGenre: string) => {
    setSelectedGenre(selectedGenre);
  };

  const filterBooks = () => {
    let filteredData = books;
    if (selectedGenre !== '') {
      filteredData = books.filter(book => book.genre === selectedGenre);
    }
    setFilteredBooks(filteredData);
  };

  return (
    <div>
      <FilterOptions onFilter={handleFilter} />
      <SearchBar onSearch={handleSearch} />
      {filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
