/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import  { useState } from 'react';
import { useAppDispatch } from '../../redux/hook';
import { createUser, setLoading } from '../../redux/features/users/userSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
interface ICredential {
  email: string | null;
  // other properties
}

const Social = () => {
  const [errorMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      dispatch(setLoading(true));
  
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
  
      if (result.user && result.user.email !== null) {
        const { email } = result.user;
        dispatch(createUser({ email, password: '' }));
        navigate('/');
      }
      
  
      dispatch(setLoading(false));
      toast.success('Google signup successful!');
    } catch (error) {
      dispatch(setLoading(false));
      toast.error('Error occurred during Google signup. Please try again.');
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
