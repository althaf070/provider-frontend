import { useEffect } from "react";
import { cn } from "./lib/utils"
import { useSideBar } from "./store/useSidebar"
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
    children:React.ReactNode
}
const Container = ({children}:ContainerProps) => {
    const {collapsed,onCollapsed,onExpanded} = useSideBar(state =>state)
    const matches=useMediaQuery("(max-width:1024px)")
   
    useEffect(() => {
    if (matches) {
        onCollapsed()
    }else{
        onExpanded()
    }
    }, [matches,onCollapsed,onExpanded])
  return (
    <div className={cn("mt-28 ml-[80px]",!collapsed && "ml-52" )}>
        {children}
    </div>
  )
}

export default Container