import { FiHome, FiBook, FiUsers, FiMessageCircle, FiStar, FiSettings } from "react-icons/fi";
import { IconType } from "react-icons"; // Import IconType for the icon type
import { MdDashboardCustomize } from "react-icons/md";

// Define a type for the sidebar links
interface SidebarLink {
  title: string;
  path: string;
  icon: IconType;
}

// Sidebar links array with typed objects
const sidebarLinks: SidebarLink[] = [
  {
    title: "Home",
    path: "/",
    icon: FiHome,
  },
  {
    title: "Dashboard",
    path: "/provider/dashboard",
    icon: MdDashboardCustomize,
  },
  {
    title: "Services",
    path: "/provider/services",
    icon: FiBook,
  },
  {
    title: "Bookings",
    path: "/provider/bookings",
    icon: FiUsers,
  },
  {
    title: "Reviews",
    path: "/provider/reviews",
    icon: FiStar,
  },
  {
    title: "Messages",
    path: "/provider/messages",
    icon: FiMessageCircle,
  },
  {
    title: "Settings",
    path: "/provider/settings",
    icon: FiSettings,
  },
];

export default sidebarLinks;
