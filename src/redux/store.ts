import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from '../api/booksApi';
import wishlistReducer from './features/wishlist/wishlistSlice';
import userReducer from './features/users/userSlice';
// import booksReducer from './features/books/booksSlice'; // Replace with the actual path

const store = configureStore({
  reducer: {
    user: userReducer,
    // wishlist: wishlistReducer,
    // books: booksReducer,

    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
