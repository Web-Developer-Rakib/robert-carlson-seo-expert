import { Navigate, useLocation } from "react-router-dom";
import UseFirebase from "./UseFirebase";

const RequireAuth = ({ children }) => {
  const { userDetails } = UseFirebase();
  console.log(userDetails);

  const location = useLocation();
  if (!userDetails) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
