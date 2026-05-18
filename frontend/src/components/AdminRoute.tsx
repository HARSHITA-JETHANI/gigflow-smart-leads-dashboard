import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function AdminRoute({ children }: Props) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  // If not logged in at all, go to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If logged in but not an admin, redirect to dashboard
  if (userRole !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}

export default AdminRoute;
