import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./Container";

const AuthenticatedLayout = () => {
  return (
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
  );
};

export default AuthenticatedLayout;
