import React from "react";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingSpinner />;
  if (user && user.email) return children;
  return <Navigate to={"/login"} state={location.pathname} />;
};

export default ProtectedRoute;
