import {Navigate } from 'react-router-dom';
function UserLayout(){
  const token: string | null = localStorage.getItem('user_profile_token');
  
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      {/* <UserProfilePage /> */}
    </>
  );
}

export default UserLayout;
