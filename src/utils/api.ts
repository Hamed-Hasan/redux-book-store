// api.ts
import axios from 'axios';

const BASE_URL = 'https://redux-book-store-server.vercel.app'; // Replace with your API base URL

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};

export const addNewBook = async (newBook: { title: string; author: string; genre: string; publicationDate: string; image: string; }) => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, newBook);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};

export const getBook = async (id: unknown) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};

export const updateBook = async (updatedBook: { id: any; title?: string; author?: string; genre?: string; publicationDate?: string; image?: string; }) => {
  try {
    const response = await axios.put(`${BASE_URL}/books/${updatedBook.id}`, updatedBook);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};

export const deleteBook = async (id: string | undefined) => {
  try {
    await axios.delete(`${BASE_URL}/books/${id}`);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
};