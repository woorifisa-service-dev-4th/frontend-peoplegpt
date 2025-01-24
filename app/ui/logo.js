"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ setActiveMenu }) {
    // Trigger active menu change when logo is clicked
    const handleLogoClick = () => {
        setActiveMenu("qna");
    };

    return (
        <div className="flex items-center justify-center h-full overflow-hidden">
            {/* 이미지: 크기 및 위치 */}
            <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={40} height={49} />
            </div>
            {/* 텍스트: 로고와 나란히 정렬 */}
            <div className="ml-2">
                <Link href="/qna" passHref>
                    <p
                        className="text-white text-4xl md:text-3xl lg:text-4xl truncate cursor-pointer"
                        onClick={handleLogoClick}
                    >
                        peopleGPT
                    </p>
                </Link>
            </div>
        </div>
    );
}
