import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookingManagement from "./pages/BookingManagement";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import AuthenticatedLayout from "./AuthenticatedLayout";
import PublicLayout from "./PublicLayout"
import ServiceManagemen from "./pages/ServiceManagemen";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (without Sidebar/Header) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/provider/register" element={<Registration isRegister/>} />
          <Route path="/provider/login" element={<Registration />} />
        </Route>

        {/* Authenticated Routes (with Sidebar/Header) */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/provider/dashboard" element={<Dashboard />} />
          <Route path="/provider/services" element={<ServiceManagemen />} />
          <Route path="/provider/bookings" element={<BookingManagement />} />
          <Route path="/provider/reviews" element={<Reviews />} />
          <Route path="/provider/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


//  <Route path="/provider/settings" element={<Settings />} />
// <Route path="/provider/notifications" element={<Notifications />} />
// <Route path="/provider/messages" element={<MessageCenter />} 
