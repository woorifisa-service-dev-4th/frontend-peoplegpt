// ui/chat.js
import { useState } from "react";

export default function ChatInput({ onSubmit }) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (comment.trim() !== "") {
            onSubmit(comment);
            setComment("");
        }
    };

    return (
        <div className="p-5 border-t border-gray-300 flex items-center bg-gray-100">
            <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="댓글을 입력하세요..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleSubmit}
            >
                전송
            </button>
        </div>
    );
}
