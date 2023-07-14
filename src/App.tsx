/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'
import MainLayout from './layouts/MainLayout'
import { setLoading, setUser } from './redux/features/users/userSlice';
import { useAppDispatch } from './redux/hook';
import { auth } from './utils/firebase';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
     <MainLayout/>
    </>
  )
}

export default App
