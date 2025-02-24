// src/components/SideNav.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";

export default function SideNav({ activeMenu, setActiveMenu, setClassType }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const toggleDropdown = (e) => {
        e?.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        navigate(`/dashboard/${menu}`);
    };

    const handleClassTypeSelect = (item) => {
        const classTypes = ["전체", "AI", "서비스", "클라우드"];
        setClassType(classTypes.indexOf(item));
        setIsDropdownOpen(false);
    };

    const dropdownButton = (
        <button 
            onClick={toggleDropdown} 
            className="bg-transparent p-2"
        >
            <img
                src="/dropdown-icon.png"
                alt="Dropdown"
                className="w-4 h-4"
            />
        </button>
    );

    return (
        <div className="flex h-full flex-col px-3 py-4">
            <div className="flex flex-col justify-between space-y-4">
                {/* Logo Section */}
                <div className="text-white bg-[#72B2DE] h-48 flex items-center justify-center rounded-2xl p-4">
                    <h1 className="text-2xl font-bold">peopleGPT</h1>
                </div>

                {/* Navigation Items */}
                <div className="relative">
                    <NavItem
                        href="/dashboard/qna"
                        icon="❓"
                        label="Q&A"
                        active={activeMenu === "qna"}
                        onClick={() => handleMenuClick("qna")}
                        button={dropdownButton}
                    />

                    <Dropdown
                        isOpen={isDropdownOpen}
                        items={["전체", "AI", "서비스", "클라우드"]}
                        onItemClick={handleClassTypeSelect}
                    />
                </div>

                <NavItem
                    href="/dashboard/codeshare"
                    icon="🖥️"
                    label="Code Share"
                    active={activeMenu === "codeshare"}
                    onClick={() => handleMenuClick("codeshare")}
                />

                <NavItem
                    href="/dashboard/daily"
                    icon="📄"
                    label="Daily Summary"
                    active={activeMenu === "daily"}
                    onClick={() => handleMenuClick("daily")}
                />

                {/* Logout Button */}
                <button
                    onClick={logout}
                    className="mt-auto p-4 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}