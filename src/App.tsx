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
import Login from "./pages/Login";
import ProfilePicUpload from "./pages/ProfilePicUpload";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (without Sidebar/Header) */}
        <Route element={<PublicLayout />}>
          <Route path="/provider/register" element={<Registration/>} />
          <Route path="/provider/login" element={<Login />} />
        </Route>
        <Route path="/provider/profilepic" element={<ProfilePicUpload />} />
        {/* Authenticated Routes (with Sidebar/Header) */}
        <Route element={<AuthenticatedLayout />}>
        <Route path="/" element={<Home />} />
          <Route path="/provider/dashboard" element={<Dashboard />} />
          <Route path="/provider/services" element={<ServiceManagemen />} />
          <Route path="/provider/bookings" element={<BookingManagement />} />
          <Route path="/provider/reviews" element={<Reviews />} />
          <Route path="/provider/profile" element={<Profile/>} />
        </Route>
        {/* error file */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


//  <Route path="/provider/settings" element={<Settings />} />
// <Route path="/provider/notifications" element={<Notifications />} />
// <Route path="/provider/messages" element={<MessageCenter />} 
