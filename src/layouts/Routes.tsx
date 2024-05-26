import { createBrowserRouter, RouteObject } from 'react-router-dom';
import UserLayout from './UserLayout';
import SignIn from '../Components/SignIn/SignIn';
import Auth from '../Pages/Auth/Auth';
import SignUp from '../Components/SignUp/SignUp';
import UserHomePage from '../Pages/UserHomePage/UserHomePage';

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
  {
    path: 'homePage',
    element: <UserHomePage/>
  },
];

export const router = createBrowserRouter(routes);
