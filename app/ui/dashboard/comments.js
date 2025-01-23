"use client";

import { useEffect, useRef, useState } from "react";
import Chat from "../chat";
import { fetchCommentByPostId } from "@/app/lib/data";

export default function CommentsBox({ onClose, postId }) {
    const comments = fetchCommentByPostId(postId);
    const commentsRef = useRef(null);

    const addComment = (newComment) => {
        // 각 게시물 별로 받아야 하니까 배열에 게시물 id 추가
        const timestamp = new Date().toLocaleString("ko-KR", {
            // 시간 표시
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
        // 댓글 입력한 사용자 id까지 받는 걸로 수정
        setComments((prev) => [
            ...prev,
            { content: newComment, time: timestamp },
        ]);
    };

    return (
        <div className="flex flex-col bg-white border w-[25%] h-[100%] fixed top-0 left-0">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
                X
            </button>

            {/* 댓글 목록 */}
            <div
                className="flex-1 overflow-y-auto space-y-5 mt-12 ml-4 w-80"
                ref={commentsRef}
            >
                {comments.map((comment, index) => (
                    // 댓글 화면
                    <div key={index} className="bg-gray-100 p-2 rounded-2xl">
                        <p className="text-sm font-semibold">
                            사용자 이름{/* comment.userid로 고치기 */}
                        </p>
                        <p className="text-sm text-gray-700 break-all">
                            {comment.content}
                        </p>
                        <p className="text-xs text-gray-400">{comment.time}</p>
                    </div>
                ))}
            </div>

            {/* 댓글 입력창 */}
            <Chat onSubmit={addComment} isComment={true} />
        </div>
    );
}
