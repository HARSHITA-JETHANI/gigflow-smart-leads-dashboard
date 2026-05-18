import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function PublicRoute({ children }: Props) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default PublicRoute;