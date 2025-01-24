import Link from "next/link";

export default function MobileNav({ setActiveMenu }) {
    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // 메뉴 상태 업데이트
    };

    return (
        <div className="flex flex-col bg-white p-4 shadow-lg">
            <Link href="/qna" onClick={() => handleMenuClick("❓ Q&A")}>
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    ❓ Q&A
                </span>
            </Link>
            <Link
                href="/codeshare"
                onClick={() => handleMenuClick("🖥️ Code Share")}
            >
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    🖥️ Code Share
                </span>
            </Link>
            <Link
                href="/daily"
                onClick={() => handleMenuClick("📄 Daily Summary")}
            >
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    📄 Daily Summary
                </span>
            </Link>
        </div>
    );
}
