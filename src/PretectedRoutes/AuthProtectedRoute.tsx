import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const HomeProtectedRoute: React.FC<{children: ReactNode}> = ({ children }) => {
  if (localStorage.getItem("userToken")) {
    return <Navigate to={'/home'}/>
  }

  return children
};

export default HomeProtectedRoute;
