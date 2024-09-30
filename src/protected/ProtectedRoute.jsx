import { Navigate, Outlet } from "react-router-dom"
// import { jwtDecode } from 'jwt-decode';

export const ProtectedRoute = ({redirectTo="/login"}) => {
  const token = localStorage.getItem("token");

  if (!token){
    return <Navigate to={redirectTo}/>
  }
  return <Outlet/>
}
