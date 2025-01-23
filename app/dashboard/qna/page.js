'use client'

import { useState } from "react";
import CommentsBox from "@/app/ui/dashboard/comments";

export default function Page() {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    const toggleComments = () => {
        setIsCommentsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <div className="p-10">
                <h1 className="text-2xl font-bold">Q&A</h1>
            </div>

            <button
                className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg z-50"
                onClick={toggleComments}
            >
                {isCommentsOpen ? "사이드창 닫기" : "사이드창 보기"}
            </button>

            {/* 댓글 사이드 창 */}
            {isCommentsOpen && <CommentsBox onClose={toggleComments} />}
        </div>
    );
}

