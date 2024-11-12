import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminVerification = () => {
  const { provider, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    
    checkAuth();
    const runagain = setInterval(() => {
      checkAuth();
    }, 10000); // Check every 10 seconds

    return () => clearInterval(runagain); 
  }, [checkAuth]);

  useEffect(() => {
    if (provider?.verified) {
      navigate('/provider/profilepic');
    }
  }, [provider, navigate]);

  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
      <LoadingSpinner />
      <h1 className="text-center text-4xl font-bold text-fieryOrange">
        Admin Verification Pending...
      </h1>
      <Button disabled={!provider?.verified}>
        {provider?.verified ? <Link to="/">Go to Home</Link> : <span>Pending verification...</span>}
      </Button>
      <p>Please wait here for admin to accept your request.</p>
    </div>
  );
};

export default AdminVerification;
