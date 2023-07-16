// import { RootState } from '@/redux/store';
// import { useSelector } from 'react-redux';


// const Wishlist = () => {
//   const wishlist = useSelector((state: RootState) => state.wishlist.books);
//   const books = useSelector((state: RootState) => state.books); // Assuming you have a books slice in your Redux store

//   // Function to get book details from the book ID
//   const getBookDetails = (bookId: string) => {
//     return books?.find((book: { _id: string; }) => book._id === bookId);
//   };
  

//   const renderWishlist = () => {
//     console.log(wishlist);
//     console.log(books);
    
//     return wishlist?.map((bookId) => {
//       const book = getBookDetails(bookId);
  
//       // Type assertion to specify the expected type of 'book'
//       const typedBook = book as { title: string; author: string; _id: string };
  
//       return (
//         <div key={typedBook?._id}>
//           <h3>{typedBook?.title}</h3>
//           <p>{typedBook?.author}</p>
//           {/* Add other book details as needed */}
//         </div>
//       );
//     });
//   };
  

//   return (
//     <div>
//       <h2>My Wishlist</h2>
//       {wishlist.length > 0 ? (
//         renderWishlist()
//       ) : (
//         <p>Your wishlist is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Wishlist;




const wishlist = () => {
  return (
    <div>
      
    </div>
  );
};

export default wishlist;