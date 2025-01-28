import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  if (!token || !user) {
    toast.error("Please log in to access this page.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

