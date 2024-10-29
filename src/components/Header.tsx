import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";

const Header = () => {
  const {logout} = useAuthStore()
  const handleLogout = ()=> {
    logout();
  }
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] flex justify-between items-center bg-primarygrey shadow-md px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Navigation Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8 text-silver font-semibold items-center">
        <Link to="/provider/dashboard" className="hover:text-white transition">
          Dashboard
        </Link>
        <Link to="/provider/bookings" className="hover:text-white transition">
          Bookings
        </Link>
        <Link to="/provider/services" className="hover:text-white transition">
          My Services
        </Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-5">
           <Button className="hidden md:block text-md font-semibold" variant={"destructive"} onClick={handleLogout}>
            Logout
          </Button>
        {/* Mobile Menu (Visible on Mobile) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="md:hidden" variant="ghost" size="icon">
              <FiMenu size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-primarydarkgrey mt-2 rounded-lg shadow-lg">
            <DropdownMenuGroup className="text-silver">
              <DropdownMenuItem>
                <Link
                  to="/provider/dashboard"
                  className="block w-full py-2 hover:bg-primarygrey rounded"
                >
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/provider/bookings"
                  className="block w-full py-2 hover:bg-primarygrey rounded"
                >
                  Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/provider/services"
                  className="block w-full py-2 hover:bg-primarygrey rounded"
                >
                  My Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                to="/provider/auth"
                className="block w-full py-2 hover:bg-primarygrey rounded"
              >
                <Button className="w-full text-md font-semibold" onClick={handleLogout} variant={"destructive"}>
                 Logout
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
