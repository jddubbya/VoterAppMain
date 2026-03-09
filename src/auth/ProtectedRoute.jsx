import { useAuth } from "./AuthContext";
import LoginPage from "../Pages/LoginPage";

export default function ProtectedRoute({ children }) {

  const { token } = useAuth();

  if (!token) {
    return <LoginPage />;
  }

  return children;
}
