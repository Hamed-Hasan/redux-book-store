
import { useFetchBooksQuery } from '../../api/booksApi';
import { Link } from 'react-router-dom';

const HomeBook = () => {
  const { data: bookData = []} = useFetchBooksQuery();
  const randomBooks = bookData.slice(0, 3); // Get random three books from the book data

  return (
    <div className="container mx-auto" id='books'>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Featured Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {randomBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg p-8"
                src={book.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                  {book.title}
                </h3>
              </a>
              <p className="text-gray-600 mt-2">
                {new Date(book.publicationDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto w-36 mt-11 items-center justify-between">
        <Link
          to="/books"
          
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See All Books
        </Link>
      </div>
    </div>
  );
};

export default HomeBook;
