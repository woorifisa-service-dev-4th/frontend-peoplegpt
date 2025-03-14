import { useRef } from "react";
import { useComments, usePost } from "../hooks/usePosts";
import Chat from "./Chat";

export default function Comments({ postId, onClose }) {
    const commentsRef = useRef(null);
    
    const { data: postDetail, isLoading: postLoading, error: postError } = usePost(postId);
    const { data: comments, isLoading: commentsLoading, error: commentsError } = useComments(postId);

    // Loading state
    if (postLoading || commentsLoading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col bg-white 
                w-full md:w-[25%] h-full md:border 
                md:top-0 md:left-0">
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    // Error state
    if (postError || commentsError) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col bg-white 
                w-full md:w-[25%] h-full md:border 
                md:top-0 md:left-0">
                <div className="p-4 text-red-500">
                    {postError?.message || commentsError?.message || "Error loading data"}
                </div>
                <button 
                    onClick={onClose}
                    className="mx-4 mt-2 p-2 bg-gray-200 rounded"
                >
                    Close
                </button>
            </div>
        );
    }

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

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
                        {postDetail?.tag && (
                            <p className="flex rounded-xl px-2 py-1 bg-pink-500 text-white text-sm">
                                #{postDetail.tag}
                            </p>
                        )}
                    </div>
                    <p className="px-3 text-gray-500 text-sm">
                        {postDetail?.createdAt && formatDate(postDetail.createdAt)}
                    </p>
                </div>
            </div>

            {/* Comments List */}
            <div 
                className="flex-1 overflow-y-auto space-y-5 flex flex-col items-center py-4" 
                ref={commentsRef}
            >
                {comments && comments.length > 0 ? (
                    comments.map((comment) => (
                        <div
                            key={comment.commentId}
                            className="bg-gray-100 p-4 rounded-2xl w-5/6"
                        >
                            <p className="text-sm font-semibold">
                                User #{comment.userId}
                            </p>
                            <p className="text-sm text-gray-700 break-all my-2">
                                {comment.content}
                            </p>
                            <p className="text-xs text-gray-400">
                                {formatDate(comment.createdAt)}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 p-4">
                        No comments yet. Be the first to comment!
                    </div>
                )}
            </div>

            {/* Comment Input */}
            <div className="h-auto border-t pt-2 bg-white">
                <Chat postId={postId} isComment={true} />
            </div>
        </div>
    );
}