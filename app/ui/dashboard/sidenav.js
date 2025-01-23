"use client";

import { useState } from "react";
import Logo from "../logo";
import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex h-full flex-col px-3 py-4">
            <div className="flex flex-col justify-between space-y-4">
                {/* 로고 섹션 */}
                <div className="text-white bg-[#0067AC] h-48 flex items-end justify-center rounded-2xl p-4">
                    <Link href="/dashboard">
                        <Logo />
                    </Link>
                </div>

                {/* Q&A 메뉴 섹션 */}
                <div className="text-black bg-[#F4F4F4] h-20 rounded-2xl flex items-center justify-between px-4">
                    <Link
                        href="/dashboard/qna"
                        className="flex-grow text-center"
                    >
                        <span>❓ Q&A</span>
                    </Link>

                    {/* 드롭다운 버튼 (이미지 사용) */}
                    <button
                        onClick={toggleDropdown}
                        className="bg-transparent p-2"
                    >
                        <Image
                            src="/dropdown-icon.png" // 버튼에 사용할 이미지 경로
                            alt="Dropdown"
                            width={10} // 이미지 크기
                            height={15} // 이미지 크기
                        />
                    </button>
                </div>
                {/* 카테고리 선택 */}
                {isDropdownOpen && (
                    <div className="flex flex-col items-end space-y-2 ml-auto">
                        <div className="text-black bg-[#F4F4F4] h-14 w-52 rounded-2xl flex items-center justify-center">
                            전체
                        </div>
                        <div className="text-black bg-[#F4F4F4] h-14 w-52 rounded-2xl flex items-center justify-center">
                            AI
                        </div>
                        <div className="text-black bg-[#F4F4F4] h-14 w-52 rounded-2xl flex items-center justify-center">
                            서비스
                        </div>
                        <div className="text-black bg-[#F4F4F4] h-14 w-52 rounded-2xl flex items-center justify-center">
                            클라우드
                        </div>
                    </div>
                )}

                {/* Code Share 메뉴 섹션 */}
                <Link href="/dashboard/codeshare">
                    <div className="text-black bg-[#F4F4F4] h-20 rounded-2xl flex items-center justify-center">
                        🖥️ Code Share
                    </div>
                </Link>

                {/* Daily Summary 메뉴 섹션 */}
                <Link href="/dashboard/daily">
                    <div className="text-black bg-[#F4F4F4] h-20 rounded-2xl flex items-center justify-center">
                        📄 Daily Summary
                    </div>
                </Link>
            </div>
        </div>
    );
}
