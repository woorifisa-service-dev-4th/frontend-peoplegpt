"use client";

import { useEffect, useRef, useState } from "react";
import Chat from "../chat";
import { fetchCommentByPostId} from "@/app/lib/data";

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
        });
        // 댓글 입력한 사용자 id까지 받는 걸로 수정
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
            <div className="md:hidden h-auto p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold">게시글{/*post.title*/}</h3>
                <p className="text-xl">React is a front-end library developed by Facebook.
                    It is used for handling the view layer for web and mobile apps.
                    React was created by Jordan Walke, a software engineer at Facebook.
                    The first deployment was on Facebook's newsfeed in 2011 and on Instagram.com
                    in 2012.{/*post.content*/}</p>
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
