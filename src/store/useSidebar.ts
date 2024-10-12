import {create} from 'zustand'

interface SideBarStore {
    collapsed: boolean
    onExpanded:()=>void
    onCollapsed:()=>void
}

export const useSideBar=create<SideBarStore>((set)=>({
    collapsed:false,
    onExpanded:()=>set(()=> ({collapsed:false})),
    onCollapsed:()=>set(()=> ({collapsed:true})),
}))