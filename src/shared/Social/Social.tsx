/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hook';
import { createUser, setLoading } from '../../redux/features/users/userSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';


const Social = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();

  const handleGoogleSignup = async () => {
    try {
      dispatch(setLoading(true));
  
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const provider = new GoogleAuthProvider();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await signInWithPopup(auth, provider);
  
      if (result.user) {
        const { email } = result.user;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(createUser({ email, password: '' }));
      }
  
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      // Handle error
      console.log('Google signup error:', error.message);
      // Display an error message to the user
      // For example, you can use a state variable to store the error message and render it in the component
      setErrorMessage('Error occurred during Google signup. Please try again.');
    }
  };
  

  return (
    <>
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleGoogleSignup}
        className="mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 z-10"
      >
        <span>Sign In with Google</span>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      </button>
    </>
  );
};

export default Social;
