import { createBrowserRouter, RouteObject } from 'react-router-dom';
import UserLayout from './UserLayout';
import SignIn from '../components/signIn/SignIn';
import Auth from '../pages/Auth/Auth';
import SignUp from '../components/signUp/SignUp';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <UserLayout />,
    children: [
      
    ],
  },
  {
    path: 'auth',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
