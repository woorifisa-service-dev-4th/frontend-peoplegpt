"use client";

import { useEffect, useRef, useState } from "react";
import Chat from "../chat";
import { fetchCommentByPostId, fetchPostByPostId} from "@/app/lib/data";

export default function CommentsBox({ onClose, postId }) {
    const [comments, setComments] = useState([]);
    setComments(fetchCommentByPostId(postId));
    const postDetail = fetchPostByPostId(postId);
    const commentsRef = useRef(null);

    const addComment = (newComment) => {
        const timestamp = new Date().toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
        setComments((prev) => [
            ...prev,
            { content: newComment, time: timestamp },
        ]);
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex flex-col bg-white 
            w-full md:w-[25%] h-full md:border 
            md:top-0 md:left-0 
            transition-all duration-700 ease-in-out"
        >
            {/* 닫기 버튼 */}
            <div className="relative h-12 flex items-center justify-end p-4">
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800"
                >
                    X
                </button>
            </div>

            {/* 모바일에서만 보이는 게시글 */}

            <div className="md:hidden h-auto p-2 pt-0 rounded-xl bg-gray-50 shadow-sm">
                <div className="flex p-3">
                    <h3 className="text-sm font-semibold">{postDetail.title}</h3>
                </div> 
                <div className="gap-3 grid">
                    <p
                        className={`rounded-xl bg-white p-3 text-sm text-gray-700 break-all`}
                    >
                        {postDetail.content}
                    </p>
                    <div className="px-3 flex justify-start gap-2">
                        {postDetail.tags.map((tag, index) => (
                            <p
                                key={index}
                                className={`flex rounded-xl px-2 py-1 bg-pink-500 text-sm`}
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                    <p className={`px-3 text-gray-500 text-sm`}>
                        {postDetail.createdAt}
                    </p>
                </div>
            </div>

            {/* 댓글 목록 */}
            <div 
                className="flex-1 overflow-y-auto space-y-5 flex flex-col items-center py-4" 
                ref={commentsRef}
            >
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-2xl w-5/6"
                    >
                        <p className="text-sm font-semibold">
                            {comment.userId}
                        </p>
                        <p className="text-sm text-gray-700 break-all">
                            {comment.content}
                        </p>
                        <p className="text-xs text-gray-400">
                            {comment.createdAt}
                        </p>
                    </div>
                ))}
            </div>

            {/* 댓글 입력창 */}
            <div className="h-auto border-t pt-6 bg-white">
                <Chat onSubmit={addComment} isComment={true} />
            </div>
        </div>
    );
}