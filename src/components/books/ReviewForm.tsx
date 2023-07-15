import React, { useState } from 'react';
import { useAddCommentMutation, useGetCommentsQuery } from '../../api/booksApi';

interface Comment {
  _id: string;
  comment: string;
}

interface ProductReviewProps {
  bookId: string;
}

const ReviewForm = ({ bookId }: ProductReviewProps) => {
  const [commentValue, setCommentValue] = useState('');
  const { data: comments, isError, isLoading } = useGetCommentsQuery(bookId);
  console.log(comments)
  const [addComment] = useAddCommentMutation();

  const handleSubmitComment = () => {
    if (commentValue.trim() === '') return;

    addComment({ bookId, comment: commentValue })
      .then(() => {
        setCommentValue('');
      })
      .catch((error) => {
        console.error('Failed to add comment:', error);
      });
  };

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (isError) {
    return <p>Error fetching comments.</p>;
  }

  const commentArray = Array.isArray(comments) ? comments : []; // Ensure comments is an array

  return (
    <div>
      <textarea
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      ></textarea>
      <button onClick={handleSubmitComment}>Submit Review</button>

      <div className="mt-10">
        {commentArray.map((comment: Comment) => (
          <div key={comment._id} className="flex gap-3 items-center mb-5">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
