import { Navigate, Outlet } from "react-router-dom";
import { getUserFromLocalStorage } from "../Utils/functions/getLocalStorage";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.User.isLoggedIn);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
