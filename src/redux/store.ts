import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import { booksApi } from '../api/booksApi';
// import booksReducer from './features/books/booksSlice'; // Update the import statement

const store = configureStore({
  reducer: {
    user: userReducer,
    // books: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    // Add any other slices or reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
