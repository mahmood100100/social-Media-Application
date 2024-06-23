import {Navigate } from 'react-router-dom';
import UserHomePage from '../Pages/UserHomePage/UserHomePage';
function UserLayout(){
  const token: string | null = localStorage.getItem('userToken');
  
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <UserHomePage/>
    </>
  );
}

export default UserLayout;
