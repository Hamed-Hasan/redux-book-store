import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types/bookTypes';
import { RootState } from '../../store';
import { useSearchBooksQuery } from '../../../api/booksApi';

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
  searchResults: Book[];
}

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
  searchResults: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await useFetchBooksQuery().unwrap();
  return response;
});

export const searchBooks = (searchTerm: string) => async (dispatch: any, getState: () => RootState) => {
  try {
    const response = await dispatch(useSearchBooksQuery(searchTerm)).unwrap();
    dispatch(setSearchResults(response));
  } catch (error) {
    dispatch(setSearchResults([]));
  }
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterBooksByGenre: (state, action: PayloadAction<string>) => {
      const genre = action.payload;
      state.books = state.books.filter((book) => book.genre === genre);
    },
    filterBooksByYear: (state, action: PayloadAction<number>) => {
      const year = action.payload;
      state.books = state.books.filter((book) => book.publicationYear === year);
    },
    setSearchResults: (state, action: PayloadAction<Book[]>) => {
      state.searchResults = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});

export const selectBooks = (state: RootState) => state.books.books;
export const selectLoading = (state: RootState) => state.books.loading;
export const selectBookById = (state: RootState, id: string) =>
  state.books.books.find((book) => book.id === id);
export const selectSearchResults = (state: RootState) => state.books.searchResults;

export const {
  filterBooksByGenre,
  filterBooksByYear,
  setSearchResults,
  addBook,
} = booksSlice.actions;

export default booksSlice.reducer;
