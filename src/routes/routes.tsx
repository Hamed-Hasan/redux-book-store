import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import BookList from '../components/books/BookList';
import BookDetails from '../components/books/BookDetails';
import AddNewBook from '../components/books/AddNewBook';
import EditBook from '../components/books/EditBook';





// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <BookList />,
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
      },
      {
        path: '/books/add-new',
        element: <AddNewBook />,
      },
      {
        path: '/books/:id/edit',
        element: <EditBook />,
      },
      {
        path: '/checkout',
        // element: (
        //   <PrivateRoute>
        //     <Checkout/>
        //   </PrivateRoute>
        // ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '*',
    // element: <NotFound />,
  },
]);

export default routes;
