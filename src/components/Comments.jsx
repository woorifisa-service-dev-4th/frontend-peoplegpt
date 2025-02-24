// src/components/Comments.jsx
import { useEffect, useRef, useState } from "react";
import { useComments, usePosts } from "../hooks/usePosts";
import Chat from "./Chat";

export default function Comments({ onClose, postId }) {
    const commentsRef = useRef(null);
    const { data: comments, isLoading: commentsLoading } = useComments(postId);
    const { data: postDetail, isLoading: postLoading } = usePosts(postId);

    if (commentsLoading || postLoading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col bg-white w-full md:w-[25%] h-full md:border md:top-0 md:left-0">
                <div className="p-4">Loading...</div>
            </div>
        );
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex flex-col bg-white 
                w-full md:w-[25%] h-full md:border 
                md:top-0 md:left-0 
                transition-all duration-700 ease-in-out"
        >
            {/* Close Button */}
            <div className="relative h-12 flex items-center justify-end p-4">
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800"
                >
                    X
                </button>
            </div>

            {/* Mobile Post Detail */}
            <div className="md:hidden h-auto p-2 pt-0 rounded-xl bg-gray-50 shadow-sm">
                <div className="flex p-3">
                    <h3 className="text-sm font-semibold">{postDetail?.title}</h3>
                </div> 
                <div className="gap-3 grid">
                    <p className="rounded-xl bg-white p-3 text-sm text-gray-700 break-all">
                        {postDetail?.content}
                    </p>
                    <div className="px-3 flex justify-start gap-2">
                        {postDetail?.tag_id && (
                            <p className="flex rounded-xl px-2 py-1 bg-pink-500 text-sm">
                                #{postDetail.tag_id}
                            </p>
                        )}
                    </div>
                    <p className="px-3 text-gray-500 text-sm">
                        {postDetail?.created_at}
                    </p>
                </div>
            </div>

            {/* Comments List */}
            <div 
                className="flex-1 overflow-y-auto space-y-5 flex flex-col items-center py-4" 
                ref={commentsRef}
            >
                {comments?.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-gray-100 p-4 rounded-2xl w-5/6"
                    >
                        <p className="text-sm font-semibold">
                            {comment.user_id}
                        </p>
                        <p className="text-sm text-gray-700 break-all">
                            {comment.content}
                        </p>
                        <p className="text-xs text-gray-400">
                            {comment.created_at}
                        </p>
                    </div>
                ))}
            </div>

            {/* Comment Input */}
            <div className="h-auto border-t pt-6 bg-white">
                <Chat postId={postId} isComment={true} />
            </div>
        </div>
    );
}