// components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If logged in, render the child component (like Dashboard)
  return children;
};

export default ProtectedRoute;
