import React, { ReactNode, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import { deleteBook } from '../../utils/api';
import {
  useGetCommentsQuery,
  useAddCommentMutation,
} from '../../api/booksApi';
import { AiOutlineDelete,AiOutlineEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';
import Loading from '../../shared/Loading/Loading';
// import withReactContent from 'sweetalert2-react-content';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string; // Add the 'image' property to the Book interface
}

interface Comment {
  _id: string;
  content: string;
}

interface BookDetailsParams {
  id: string;
  [key: string]: string | undefined;
}

const BookDetails: React.FC = () => {
  const { id = '' } = useParams<BookDetailsParams>();
  const navigate = useNavigate();
  
  const [book, setBook] = useState<Book | null>(null);
  const { data: comments, isError, isLoading } = useGetCommentsQuery(id);
  const [addComment] = useAddCommentMutation();


  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://redux-book-store-server.vercel.app/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

const handleDelete = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await deleteBook(id);
        navigate('/books');
        Swal.fire('Deleted!', 'The book has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting book:', error);
        Swal.fire('Error', 'An error occurred while deleting the book.', 'error');
      }
    }
  });
};


  const handleSubmitComment = (commentValue: string) => {
    if (commentValue.trim() === '') {
      return;
    }

    addComment({ bookId: id, comment: commentValue }) // Pass bookId in the request body
      .unwrap()
      .then(() => {
        // Comment added successfully, you can handle any additional logic here
      })
      .catch((error: unknown) => {
        console.error('Failed to add comment:', error);
      });
  };

  if (!book || isLoading) {
    return <div><Loading/></div>;
  }

  if (isError) {
    return <div>Error fetching book details.</div>;
  }

  return (
    <div className="min-w-screen min-h-screen bg-yellow-300  items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img src={book.image} className="w-full relative z-10" alt={book.title} />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">{book.title}</h1>
              <p className="text-sm">Author: {book.author}</p>
              <p className="text-sm">Genre: {book.genre}</p>
              <p className="text-sm">Publication Date: {book.publicationDate}</p>
            
            </div>
            <div>
          
              <div className="flex items-center gap-3">

                <Link to={`/books/${id}/edit`} className="flex items-center gap-2 justify-center bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                <AiOutlineEdit/>
                  Edit</Link>
                <button className="flex items-center gap-2 justify-center bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"  onClick={handleDelete}>
                  <AiOutlineDelete/>
                  Delete Book</button>
              </div>
            </div>
          </div>
        </div>
        <ReviewForm bookId={id} onSubmit={handleSubmitComment} />
        <div>
        <h3>Review:</h3>
        {/* {comments &&
  comments.map((comment: Comment) => {
    return (
      <p key={comment._id}>{comment.content}</p>
    );
  })} */}


      </div>
      </div>
      
    
    </div>
  );
};

export default BookDetails;
