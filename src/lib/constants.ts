import { FiHome, FiBook, FiUsers, FiStar } from "react-icons/fi";
import { IconType } from "react-icons"; // Import IconType for the icon type
import { MdDashboardCustomize } from "react-icons/md";
import { Services } from "./types";
import { CgProfile } from "react-icons/cg";
// Define a type for the sidebar links
interface SidebarLink {
  title: string;
  path: string;
  icon: IconType;
}

// Sidebar links array with typed objects
export const sidebarLinks: SidebarLink[] = [
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
  // {
  //   title: "Messages",
  //   path: "/provider/messages",
  //   icon: FiMessageCircle,
  // },
  {
    title: "Profile",
    path: "/provider/profile",
    icon: CgProfile,
  },
];



// Step 3: Create the services object
export const services: Services = {
  electricalServices: {
    title: "Electrical Services",
    type: "electrical",
  },
  plumbingServices: {
    title: "Plumbing Services",
    type: "plumbing",
  },
  carpentryServices: {
    title: "Carpentry Services",
    type: "carpentry",
  },
  paintingServices: {
    title: "Painting Services",
    type: "painting",
  },
  handymanServices: {
    title: "Handyman Services",
    type: "handyman",
  },
  applianceRepairServices: {
    title: "Appliance Repair Services",
    type: "appliancerepair",
  },
  roofingServices: {
    title: "Roofing Services",
    type: "roofing",
  },
  cleaningServices: {
    title: "Cleaning Services",
    type: "cleaning",
  },
};

export const keralaDistricts = [
  "alappuzha",
  "ernakulam",
  "idukki",
  "kannur",
  "kasaragod",
  "kollam",
  "kottayam",
  "kozhikode",
  "malappuram",
  "palakkad",
  "pathanamthitta",
  "thiruvananthapuram",
  "thrissur",
  "wayanad"
];
