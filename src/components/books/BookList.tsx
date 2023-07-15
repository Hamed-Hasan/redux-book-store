import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { getAllBooks } from '../../utils/api';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  const pageRange = 3; // Number of buttons to show in the middle

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, selectedGenre, currentPage]);

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
      setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const handleFilter = (selectedGenre: string) => {
    setSelectedGenre(selectedGenre);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const filterBooks = () => {
    let filteredData = books;
    if (selectedGenre !== '') {
      filteredData = books.filter(book => book.genre === selectedGenre);
    }

    const totalBooks = filteredData?.length || 0;
    const totalPages = Math.ceil(totalBooks / itemsPerPage);
    setTotalPages(totalPages);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const paginatedData = filteredData?.slice(startIndex, endIndex) || [];

    setFilteredBooks(paginatedData);
  };

  const getPageButtons = () => {
    const pageButtons = [];
    const startPage = Math.max(currentPage - pageRange, 1);
    const endPage = Math.min(currentPage + pageRange, totalPages);

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      <FilterOptions onFilter={handleFilter} />
      <SearchBar onSearch={handleSearch} />
      {filteredBooks && filteredBooks.length > 0 ? (
        filteredBooks.map(book => <BookCard key={book.id} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {getPageButtons()}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
