import { useState } from "react";
import { Link } from "react-router-dom";
import { CLASS_TYPES, POST_TYPES } from "../lib/constants";

export default function SideNav({ activeMenu, setActiveMenu, setClassType, user }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleFilterClick = (filterValue) => {
        setClassType(filterValue);
        setIsDropdownOpen(false);
    };

    const isQnA = String(activeMenu).toLowerCase() === String(POST_TYPES.QNA).toLowerCase();

    return (
        <div className="flex h-full flex-col px-3 py-4">
            <div className="flex flex-col justify-between space-y-4">
                {/* Logo Section */}
                <div className="text-white bg-[#72B2DE] h-48 flex items-center justify-center rounded-2xl p-4">
                    <Link to="/dashboard/qna" className="text-3xl font-bold">
                        PeopleGPT
                    </Link>
                </div>

                {/* Q&A Menu Section */}
                <div 
                    className={`bg-[#E1E1E1] h-20 rounded-2xl flex items-center justify-between cursor-pointer px-10 
                    ${isQnA ? "text-[#0067AC] font-bold" : "text-black"}`}
                >
                    <Link 
                        to="/dashboard/qna" 
                        className="flex-grow"
                        onClick={() => setActiveMenu("qna")}
                    >
                        ❓ Q&A
                    </Link>
                    <button onClick={toggleDropdown} className="bg-transparent p-2">
                        <span className="text-xl">▼</span>
                    </button>
                </div>

                {/* Filter Dropdown Menu */}
                {isDropdownOpen && isQnA && (
                    <div className="flex flex-col items-end space-y-2 w-full ml-auto">
                        {Object.entries(CLASS_TYPES).map(([key, value]) => (
                            <div
                                key={key}
                                className="text-black bg-[#E1E1E1] h-14 w-4/5 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#D1D1D1]"
                                onClick={() => handleFilterClick(value)}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                )}

                {/* Code Share Menu Section */}
                <div 
                    className={`bg-[#E1E1E1] h-20 rounded-2xl flex items-center justify-center cursor-pointer px-10 
                    ${activeMenu === String(POST_TYPES.CODESHARE).toLowerCase() ? "text-[#0067AC] font-bold" : "text-black"}`}
                >
                    <Link 
                        to="/dashboard/codeshare" 
                        className="w-full text-center"
                        onClick={() => setActiveMenu("codeshare")}
                    >
                        🖥️ Code Share
                    </Link>
                </div>

                {/* Daily Summary Menu Section */}
                <div 
                    className={`bg-[#E1E1E1] h-20 rounded-2xl flex items-center justify-center cursor-pointer px-10 
                    ${activeMenu === String(POST_TYPES.DAILY).toLowerCase() ? "text-[#0067AC] font-bold" : "text-black"}`}
                >
                    <Link 
                        to="/dashboard/daily" 
                        className="w-full text-center"
                        onClick={() => setActiveMenu("daily")}
                    >
                        📄 Daily Summary
                    </Link>
                </div>
            </div>
        </div>
    );
}