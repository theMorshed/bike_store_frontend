import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentToken, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectCurrentToken);
  const user = useAppSelector(selectCurrentUser);

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (role !== undefined && role !== user.role) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

