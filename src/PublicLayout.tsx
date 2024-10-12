import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full h-screen">
      {/* Renders the child route components */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
