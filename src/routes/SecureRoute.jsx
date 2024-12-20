import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropType from "prop-types";
import { AuthContext } from "../providers/AuthProvider";

const SecureRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);
  // console.log(user);
  // console.log(loading);
  if (isLoading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center text-4xl">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};
SecureRoute.propTypes = {
  children: PropType.node,
};
export default SecureRoute;
