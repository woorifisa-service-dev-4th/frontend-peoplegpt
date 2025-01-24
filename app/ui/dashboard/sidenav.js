"use client";

import { useState } from "react";
import Logo from "../logo";
import NavItem from "./nav-item";
import Dropdown from "./drop-down";
import Image from "next/image";

export default function SideNav({ activeMenu, setActiveMenu }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const btn = (
        <button onClick={toggleDropdown} className="bg-transparent p-2">
            <Image
                src="/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={15}
            />
        </button>
    );

    return (
        <div className="flex h-full flex-col px-3 py-4">
            <div className="flex flex-col justify-between space-y-4">
                {/* 로고 섹션 */}
                <div className="text-white bg-[#72B2DE] h-48 flex items-center justify-center rounded-2xl p-4">
                    <Logo setActiveMenu={setActiveMenu} />{" "}
                </div>

                {/* Q&A 메뉴 섹션 */}
                <NavItem
                    href="/qna"
                    icon="❓"
                    label="Q&A"
                    active={activeMenu === "qna"}
                    onClick={() => handleMenuClick("qna")}
                    button={btn}
                />

                {/* 드롭다운 메뉴 */}
                <Dropdown
                    isOpen={isDropdownOpen}
                    items={["전체", "AI", "서비스", "클라우드"]}
                />

                {/* Code Share 메뉴 섹션 */}
                <NavItem
                    href="/codeshare"
                    icon="🖥️"
                    label="Code Share"
                    active={activeMenu === "codeshare"}
                    onClick={() => handleMenuClick("codeshare")}
                />

                {/* Daily Summary 메뉴 섹션 */}
                <NavItem
                    href="/daily"
                    icon="📄"
                    label="Daily Summary"
                    active={activeMenu === "daily"}
                    onClick={() => handleMenuClick("daily")}
                />
            </div>
        </div>
    );
}
