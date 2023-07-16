import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bagsq from '../Images/BagsQ.png';
import CustomLink from '../CustomLink/CustomLink';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setUser } from '../redux/features/users/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Navbar = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [authenticated, setAuthenticated] = useState(false); // Track authentication status

  const handleLogout = () => {
    console.log('Logout');
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUser(null));
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(setUser(userAuth));
        setAuthenticated(true);
      } else {
        // User is logged out
        dispatch(setUser(null));
        setAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <nav className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0 z-50">
      <div className="flex justify-evenly items-center mx-auto">
        {/*------------------- logo ---------------------*/}
        <div className="lg:w-[20%] w-[70%]">
          <Link to="/" className="inline mr-0 w-1/3">
            <span className="self-center font-extrabold text-xl whitespace-nowrap dark:text-white">
              <img className="w-1/3" src={bagsq} alt="" />
            </span>
          </Link>
        </div>
        <div className="flex items-center md:order-2">
        {!authenticated ? (
            <Link to="/login">
              <button className="px-4 py-2 text-sm text-white bg-[#4FA9E3] rounded-md hover:bg-[#00B3FF]">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

          {/*--------------------------- user image navigation ------------------------------*/}
          <div
            className={`z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
              userClicked ? 'flex' : 'hidden'
            }`}
            id="dropdown"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
            style={{
              position: ' absolute',
              top: '100%',
              right: '3%',
              margin: ' 0px',
            }}
          >
            <div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <CustomLink
                    to="/dashboard"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            onClick={() => setMenuClicked(!menuClicked)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {menuClicked ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/*--------------------------- Header navigation ------------------------------*/}
        <div
          className={`${
            menuClicked ? 'block absolute bg-white top-14' : 'hidden'
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-2 z-50 px-5 leading-9"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <CustomLink
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/books"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Books
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/books/add-new"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Add New Book
              </CustomLink>
            </li>
          
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
