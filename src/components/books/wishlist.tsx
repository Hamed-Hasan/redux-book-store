import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'path/to/redux/store'; // Replace with the actual path

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.books);
  const books = useSelector((state: RootState) => state.books); // Assuming you have a books slice in your Redux store

  // Function to get book details from the book ID
  const getBookDetails = (bookId) => {
    return books?.find((book) => book._id === bookId);
  };
  

  // Function to render the list of books in the wishlist
  const renderWishlist = () => {
    console.log(wishlist);
  console.log(books);
    return wishlist?.map((bookId) => {
      const book = getBookDetails(bookId);
      return (
        <div key={book?._id}>
          <h3>{book?.title}</h3>
          <p>{book?.author}</p>
          {/* Add other book details as needed */}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length > 0 ? (
        renderWishlist()
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
