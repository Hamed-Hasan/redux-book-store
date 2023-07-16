// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';


// interface WishlistState {
//   books: string[]; // Array of book IDs in the wishlist
// }

// const initialState: WishlistState = {
//   books: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action: PayloadAction<string>) => {
//       state.books.push(action.payload);
//     },
//     removeFromWishlist: (state, action: PayloadAction<string>) => {
//       state.books = state.books.filter((bookId) => bookId !== action.payload);
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// export const selectWishlist = (state: RootState) => state.wishlist.books;

// export default wishlistSlice.reducer;
