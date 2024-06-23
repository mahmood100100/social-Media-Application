import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const HomeProtectedRoute: React.FC<{children: ReactNode}> = ({ children }) => {
  if (localStorage.getItem("userToken") == null) {
    return <Navigate to={"/auth"} />;
  }

  return children
};

export default HomeProtectedRoute;
