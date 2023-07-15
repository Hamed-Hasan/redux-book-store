// ReviewForm.tsx
import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (review: string) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    onSubmit(review);
  };

  return (
    <div>
      <textarea
        value={review}
        onChange={e => setReview(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
