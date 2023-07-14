import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';





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
        path: '/products',
        // element: <Products />,
      },
      {
        path: '/product-details/:id',
        // element: <ProductDetails />,
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
    // element: <LoginForm/>,
  },
  {
    path: '/signup',
    // element: <SignupForm/>,
  },
  {
    path: '*',
    // element: <NotFound />,
  },
]);

export default routes;
