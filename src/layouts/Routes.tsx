import { createBrowserRouter, RouteObject } from 'react-router-dom';
import UserLayout from './UserLayout.tsx';
import SignIn from '../Components/SignIn/SignIn.tsx';
import Auth from '../Pages/Auth/Auth';
import SignUp from '../Components/SignUp/SignUp';
import UserHomePage from '../Pages/UserHomePage/UserHomePage';
import HomeProtectedRoute from '../PretectedRoutes/HomeProtectedRoute'
import AuthProtectedRoute from '../PretectedRoutes/AuthProtectedRoute';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <UserLayout />,
    children: [

    ],
  },
  {
    path: 'auth',
    element:
    <AuthProtectedRoute>
     <Auth />
     </AuthProtectedRoute>,
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
    path: 'home',
    element:
      <HomeProtectedRoute>
        <UserHomePage />
      </HomeProtectedRoute>

  },
];

export const router = createBrowserRouter(routes);
