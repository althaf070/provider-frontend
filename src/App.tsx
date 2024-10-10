import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ServiceManagemen from "./pages/ServiceManagemen";
import BookingManagement from "./pages/BookingManagement";
import Reviews from "./pages/Reviews";
import ServiceDetail from "./pages/ServiceDetail";
import Home from "./pages/Home";
import Header from "./components/Header"
import Auth from "./pages/Auth";
const App = () => {
  return (
    <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/provider/dashboard" element={<Dashboard />} />
          <Route path="/provider/services" element={<ServiceManagemen />} />
          <Route path="/provider/bookings" element={<BookingManagement />} />
          <Route path="/provider/reviews" element={<Reviews />} />
          <Route path="/provider/servicer/:id" element={<ServiceDetail />} />
          <Route path="/provider/auth" element={< Auth/>} />


          {/* <Route path="/provider/profile" element={<Profile />} /> */}
          {/* <Route path="/provider/settings" element={<Settings />} />
          <Route path="/provider/notifications" element={<Notifications />} />
          <Route path="/provider/messages" element={<MessageCenter />} />
          <Route path="/provider/analytics" element={<AnalyticsDashboard />} /> */}

        </Routes>
    </BrowserRouter>
  );
};

export default App;
