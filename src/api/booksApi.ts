import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../types/bookTypes';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    fetchBooks: builder.query<Book[], void>({
      query: () => 'books',
    }),
    fetchBookById: builder.query<Book, string>({
      query: (id) => `books/${id}`,
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (book) => ({
        url: 'books',
        method: 'POST',
        body: book,
      }),
    }),
    searchBooks: builder.query<Book[], string>({
      query: (searchTerm) => `books?search=${searchTerm}`,
    }),
    filterBooksByGenre: builder.query<Book[], string>({
      query: (genre) => `books?genre=${genre}`,
    }),
    filterBooksByYear: builder.query<Book[], number>({
      query: (year) => `books?year=${year}`,
    }),
  }),
});

export const {
  useFetchBooksQuery,
  useFetchBookByIdQuery, // Add the useFetchBookByIdQuery export
  useAddBookMutation,
  useSearchBooksQuery,
  useFilterBooksByGenreQuery,
  useFilterBooksByYearQuery,
} = booksApi;

export default booksApi;
