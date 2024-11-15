import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./Container";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const AuthenticatedLayout = () => {
  const {isAuthenticated,isCheckingAuth,checkAuth} = useAuthStore()

  useEffect(() => {
		checkAuth();
	}, [checkAuth]);

  if (isCheckingAuth) {
    return <div className="w-full h-screen flex justify-center items-center">
      <Loader className="animate-spin" size={54}/>
    </div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/provider/login" replace />;
  }

  return (
    <>
    {isAuthenticated &&(
        <div className="w-full h-screen flex overflow-hidden">
        <Header />
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          {/* Renders the child route components */}
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
    )}
    </>
  );
};

export default AuthenticatedLayout;
