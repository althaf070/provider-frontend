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
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between w-full h-[80px] p-4 bg-primarydarkgrey ">
        <div className="ml-6">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={"150px"} height={"150px"} />
          </Link>
        </div>
        <div className="m-0">
          <ul className="hidden md:flex gap-5 text-silver font-semibold justify-center items-center mt-2">
            <li>
              <Link to={"/provider/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/provider/services"}>My Services</Link>
            </li>
            <li>
              <Link to="/provider/bookings">Bookings</Link>
            </li>
          
          </ul>
        </div>
        <div className="mr-6 flex gap-5">
          <Link to={"/auth"}>
            <Button className="hidden md:block text-md fonbt-semibold">
              Sign in
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="md:hidden" variant={"link"} size={"icon"}>
                <FiMenu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-primarydarkgrey">
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                <Link to={"/provider/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to={"/provider/services"}>My Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="/provider/bookings">Bookings</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/provider/auth"}>
                  <Button className="text-md fonbt-semibold">Register Now</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Header;
