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

  const handlePrevPage = (event) => {
    event.preventDefault(); // Prevent navigation when the button is clicked
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
        <a
          key={page}
          href="#"
          onClick={() => setCurrentPage(page)}
          className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            page === currentPage ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          {page}
        </a>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
              <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
                {filteredBooks && filteredBooks.length > 0 ? (
                  filteredBooks.map(book => <BookCard key={book._id} book={book} />)
                ) : (
                  <p>No books found.</p>
                )}
              </div>
            </div>
            <div className="filter w-56">
              <FilterOptions onFilter={handleFilter} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto my-9">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === 1 ? 'cursor-not-allowed' : ''
                }`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>
            <li>{getPageButtons()}</li>
            <li>
              <a
                href="#"
                className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === totalPages || totalPages === 0 ? 'cursor-not-allowed' : ''
                }`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BookList;
