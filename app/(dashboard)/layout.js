"use client";
import Chat from "../ui/chat";
import SideNav from "../ui/dashboard/sidenav";
import { useState } from "react";

export default function Layout({ children }) {
    const [activeMenu, setActiveMenu] = useState("");
    return (
        <div className="flex h-screen">
            <div className="h-screen w-[25%] bg-[#F0F0F0]">
                <SideNav
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>
            <div className="w-[75%] flex flex-col">
                <div className="flex-grow overflow-y-auto p-6 md:p-12">
                    {children}
                </div>
                <div className="p-6 border-t bg-white">
                    <Chat
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                    />
                </div>
            </div>
        </div>
    );
}
