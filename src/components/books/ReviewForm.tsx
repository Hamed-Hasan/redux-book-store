import React, { useState } from 'react';
import { useAddCommentMutation, useGetCommentsQuery } from '../../api/booksApi';
import Loading from '../../shared/Loading/Loading';

interface Comment {
  _id: string;
  comment: string;
}

interface ReviewFormProps {
  bookId: string;
}
interface ReviewFormProps {
  bookId: string;
  onSubmit: (commentValue: string) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ bookId, onSubmit }) => {
  const [commentValue, setCommentValue] = useState('');
  const { data: comments, isError, isLoading } = useGetCommentsQuery(bookId);
  const [addComment] = useAddCommentMutation();

  const handleSubmitComment = () => {
    if (commentValue.trim() === '') {
      return;
    }

    addComment({ bookId, comment: commentValue })
      .then(() => {
        setCommentValue('');
      })
      .catch((error: unknown) => {
        console.error('Failed to add comment:', error);
      });
  };

  if (isLoading) {
    return <p><Loading/></p>;
  }

  if (isError) {
    return <p>Error fetching comments.</p>;
  }

  const commentArray = Array.isArray(comments) ? comments : [];

  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mt-11 mx-8 mb-4 max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-1">Some Info.</p>
            </div>
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
                onClick={handleSubmitComment}
              />
            </div>
          </div>
        </div>
      </form>

      <div className="mt-10">
      <div className="mt-10">
      
      {/* {commentArray.map((comment: Comment, index: number, array: Comment[]) => (
        <div key={comment._id} className="flex gap-3 items-center mb-5">
          <p>{comment.comment}</p>
        </div>
      ))} */}

</div>






      </div>
    </div>
  );
};

export default ReviewForm;
