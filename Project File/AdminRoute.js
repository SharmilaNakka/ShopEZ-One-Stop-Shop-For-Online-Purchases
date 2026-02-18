import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const usertype = localStorage.getItem("usertype");

  if (usertype !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
