// src/pages/dashboard/_layout.jsx
import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Chat from "../../components/Chat";
import MobileNav from "../../components/MobileNav";
import SideNav from "../../components/SideNav";

export default function DashboardLayout() {
    const [activeMenu, setActiveMenu] = useState("qna");
    const [classType, setClassType] = useState(0);
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();

    // Update active menu based on current route
    useEffect(() => {
        const path = location.pathname.split('/').pop();
        if (path) {
            setActiveMenu(path);
        }
    }, [location]);

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMobileNavVisible(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    const handleMenuChange = (menu) => {
        setActiveMenu(menu);
        navigate(`/dashboard/${menu}`);
        setIsMobileNavVisible(false);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="hidden lg:block lg:w-[25%] bg-[#F0F0F0]">
                <SideNav
                    activeMenu={activeMenu}
                    setActiveMenu={handleMenuChange}
                    setClassType={setClassType}
                    user={user}
                />
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col lg:w-[75%]">
                {/* Mobile Header */}
                {isMobile && (
                    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
                        <button
                            onClick={toggleMobileNav}
                            className="p-2 bg-gray-200 rounded-md"
                        >
                            ☰
                        </button>
                        <div className="text-lg font-semibold">
                            {activeMenu.toUpperCase()}
                        </div>
                        <div className="w-8"></div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMobileNavVisible && isMobile && (
                    <MobileNav
                        activeMenu={activeMenu}
                        setActiveMenu={handleMenuChange}
                    />
                )}

                {/* Page Content */}
                <div className="flex-grow overflow-y-auto p-6 md:p-12">
                    <Outlet context={{ classType }} />
                </div>

                {/* Chat Component */}
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