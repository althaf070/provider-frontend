import { useSideBar } from "@/store/useSidebar";
import { ArrowLeftFromLine, ArrowRightToLine } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {sidebarLinks} from "@/lib/constants";
import { Link, useLocation } from "react-router-dom";
import { Hint } from "./Hint";

const Sidebar = () => {
  const { collapsed, onCollapsed, onExpanded } = useSideBar();
  const location = useLocation();
  const label  = collapsed ? "Expand" : "Collapse";
  return (
    <aside
      className={cn(
        "bg-primarydarkgrey w-48 pt-24 fixed h-full border-primarygrey",
        collapsed && "w-[70px]"
      )}
    >
      <div className="flex gap-3 items-center justify-around">
        {collapsed ? (
          <Button size={"icon"} onClick={onExpanded} className="hidden md:block">
            <Hint label={label} side="right">
            <ArrowRightToLine />
            </Hint>
          </Button>
        ) : (
          <>
            <p className="font-semibold text-sm">For You</p>
            <Button size={"icon"} onClick={onCollapsed}>
            <Hint label={label} side="left"aschild>
              <ArrowLeftFromLine/>
            </Hint>
            </Button>
          </>
        )}
      </div>

      <nav className="mt-5">
        {sidebarLinks.map((link) => (
          <div
            key={link.title}
            className={cn(
              "flex items-center gap-2 p-2 text-silver rounded-md",
              collapsed && "justify-center",
              location.pathname == link.path && "bg-vibrantPurple"
            )}
          >
            {/* Show icon only if collapsed, else show icon with title */}
            {collapsed ? (
              <Link to={link.path}>
                <Hint label={link.title} side="right">
                <link.icon className="text-lg" />
                </Hint>
              </Link>
            ) : (
              <>
                <Link
                  to={link.path}
                  className={cn(
                    "flex gap-2",
                    location.pathname == link.path && "bg-vibrantPurple"
                  )}
                >
                  <link.icon className="text-lg" />
                  <span>{link.title}</span>
                </Link>
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
