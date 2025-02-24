// src/components/MobileNav.jsx
import { Link } from 'react-router-dom';

export default function MobileNav({ setActiveMenu }) {
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className="flex flex-col bg-white p-4 shadow-lg">
            <Link to="/dashboard/qna" onClick={() => handleMenuClick("qna")}>
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    ❓ Q&A
                </span>
            </Link>
            <Link
                to="/dashboard/codeshare"
                onClick={() => handleMenuClick("codeshare")}
            >
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    🖥️ Code Share
                </span>
            </Link>
            <Link
                to="/dashboard/daily"
                onClick={() => handleMenuClick("daily")}
            >
                <span className="p-2 text-gray-800 hover:bg-gray-200 block">
                    📄 Daily Summary
                </span>
            </Link>
        </div>
    );
}