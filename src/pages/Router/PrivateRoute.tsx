import React, { ReactElement } from 'react';
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return isAuthenticated ? element : <Navigate to="/signup" />;
};

export default PrivateRoute;
