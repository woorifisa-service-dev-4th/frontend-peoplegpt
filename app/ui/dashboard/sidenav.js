"use client";

import { useState } from "react";
import Logo from "../logo";
import NavItem from "./nav-item"; // NavItem 컴포넌트
import Dropdown from "./drop-down"; // Dropdown 컴포넌트
import Image from "next/image";

export default function SideNav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(""); // 현재 활성화된 메뉴를 추적

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // 메뉴 클릭 시 활성화된 메뉴 업데이트
    };

    return (
        <div className="flex h-full flex-col px-3 py-4">
            <div className="flex flex-col justify-between space-y-4">
                {/* 로고 섹션 */}
                <div className="text-white bg-[#0067AC] h-48 flex items-end justify-center rounded-2xl p-4">
                    <Logo />
                </div>

                {/* Q&A 메뉴 섹션 */}
                <div className="bg-[#F4F4F4] h-20 rounded-2xl flex items-center justify-center">
                    <NavItem
                        href="/dashboard/qna"
                        icon="❓"
                        label="Q&A"
                        active={activeMenu === "qna"} // 활성화된 메뉴 확인
                        onClick={() => handleMenuClick("qna")} // 클릭 시 활성화된 메뉴 변경
                    />
                    {/* 드롭다운 버튼 */}
                    <button
                        onClick={toggleDropdown}
                        className="bg-transparent p-2"
                    >
                        <Image
                            src="/dropdown-icon.png"
                            alt="Dropdown"
                            width={10}
                            height={15}
                        />
                    </button>
                </div>

                {/* 드롭다운 메뉴 */}
                <Dropdown
                    isOpen={isDropdownOpen}
                    items={["전체", "AI", "서비스", "클라우드"]}
                />

                {/* Code Share 메뉴 섹션 */}
                <NavItem
                    href="/dashboard/codeshare"
                    icon="🖥️"
                    label="Code Share"
                    active={activeMenu === "codeshare"} // 활성화된 메뉴 확인
                    onClick={() => handleMenuClick("codeshare")} // 클릭 시 활성화된 메뉴 변경
                />

                {/* Daily Summary 메뉴 섹션 */}
                <NavItem
                    href="/dashboard/daily"
                    icon="📄"
                    label="Daily Summary"
                    active={activeMenu === "daily"} // 활성화된 메뉴 확인
                    onClick={() => handleMenuClick("daily")} // 클릭 시 활성화된 메뉴 변경
                />
            </div>
        </div>
    );
}
