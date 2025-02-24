import { Navigate } from 'react-router-dom';
import useAuthStore from '../lib/auth';

export const PrivateRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};