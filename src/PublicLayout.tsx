import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { Loader } from "lucide-react";
import { useEffect } from "react";

const PublicLayout = () => {
  const {isAuthenticated,isCheckingAuth,checkAuth,provider} = useAuthStore()
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader className="animate-spin" size={54} />
      </div>
    ); 
  }

  // Redirect to verification if the user is not verified
  if (provider && !provider.verified) {
    return <Navigate to="/provider/verification" replace />;
  }

  // Redirect to home if the user is authenticated and verified
  if (isAuthenticated && provider?.verified) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full h-screen">
      {/* Renders the child route components */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
