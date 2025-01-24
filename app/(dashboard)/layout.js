"use client";

import { useState, useEffect } from "react";
import Chat from "../ui/chat";
import MobileNav from "../ui/dashboard/mobile-nav";
import SideNav from "../ui/dashboard/sidenav";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const [activeMenu, setActiveMenu] = useState("Q&A");
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 화면 크기 변경 감지
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobile(false); // 데스크톱 상태
                setIsMobileNavVisible(false); // 모바일 메뉴 닫기
            } else {
                setIsMobile(true); // 모바일 상태
            }
        };

        handleResize(); // 첫 로드 시 화면 크기 반영
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 리스너 제거
        };
    }, []);

    // 햄버거 메뉴 클릭 시 표시 토글
    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    // 메뉴 클릭 시 페이지 이동 + 메뉴 닫기
    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // 현재 활성화된 메뉴 업데이트
        setIsMobileNavVisible(false); // 모바일 네비게이션 닫기
    };

    return (
        <div className="flex h-screen">
            {/* 사이드바 (lg 이상에서만 보임) */}
            <div className="hidden lg:block lg:w-[25%] bg-[#F0F0F0]">
                <SideNav
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>

            {/* 메인 콘텐츠 영역 */}
            <div className="flex-grow flex flex-col lg:w-[75%]">
                {/* 상단바 (모바일 전용) */}
                {isMobile && (
                    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
                        <button
                            onClick={toggleMobileNav}
                            className="p-2 bg-gray-200 rounded-md"
                        >
                            ☰
                        </button>
                        {/* 현재 활성화된 메뉴 표시 */}
                        <div className="text-lg font-semibold">
                            {activeMenu}
                        </div>
                        {/* 오른쪽 여백을 맞추기 위한 빈 요소 */}
                        <div className="w-8"></div>
                    </div>
                )}

                {/* 모바일 네비게이션 (햄버거 메뉴 선택 시 표시) */}
                {isMobileNavVisible && isMobile && (
                    <div className="bg-white p-4 border-b shadow-sm">
                        <MobileNav
                            activeMenu={activeMenu}
                            setActiveMenu={(menu) =>
                                handleMenuClick(menu, `/${menu.toLowerCase()}`)
                            }
                        />
                    </div>
                )}

                {/* 메인 콘텐츠 */}
                <div className="flex-grow overflow-y-auto p-6 md:p-12">
                    {children}
                </div>

                {/* 하단 채팅 영역 */}
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
