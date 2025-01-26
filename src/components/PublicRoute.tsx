// components/PublicRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    // If logged in, redirect to the dashboard
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
