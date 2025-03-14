import { useState } from "react";
import { useCreatePost, useCreateComment } from "../hooks/usePosts";
import { POST_TYPES, TAGS, USER_ROLES } from "../lib/constants";
import { useAuth } from "../hooks/useAuth";

export default function Chat({
    activeMenu,
    setActiveMenu,
    postId = null,
    isComment = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [currentTag, setCurrentTag] = useState("");
    
    const { user } = useAuth();
    const createPostMutation = useCreatePost();
    const createCommentMutation = useCreateComment();

    // Determine if user can create posts in current category
    const canCreatePost = () => {
        if (activeMenu === String(POST_TYPES.QNA).toLowerCase()) {
            return true;
        }
        
        // Only MENTOR and ADMIN can create posts in CODESHARE and DAILY
        if (
            (activeMenu === String(POST_TYPES.CODESHARE).toLowerCase() || 
             activeMenu === String(POST_TYPES.DAILY).toLowerCase()) && 
            (user?.role === USER_ROLES.MENTOR || user?.role === USER_ROLES.ADMIN)
        ) {
            return true;
        }
        
        return false;
    };

    const handleSubmit = () => {
        if (isComment) {
            // Submit as a comment
            if (content.trim() !== "" && postId) {
                const commentData = {
                    postId: postId,
                    userId: user.id,
                    content: content
                };
                
                createCommentMutation.mutate({
                    postId: postId,
                    commentData: commentData
                }, {
                    onSuccess: () => {
                        setContent("");
                    }
                });
            }
        } else if (canCreatePost()) {
            // Submit as a post
            if (title.trim() === "" || content.trim() === "") return;
            
            const category = activeMenu.toUpperCase();
            
            if (category === String(POST_TYPES.QNA)) {
                const postData = {
                    userId: user.id,
                    title: title,
                    content: content,
                    category: category,
                    tag: currentTag || TAGS.OTHER,
                    filter: null // Will default to ALL
                };
                
                createPostMutation.mutate(postData, {
                    onSuccess: () => {
                        setTitle("");
                        setContent("");
                        setCurrentTag("");
                    }
                });
            } else {
                // For CODESHARE or DAILY
                const postData = {
                    userId: user.id,
                    title: title,
                    content: content,
                    category: category
                };
                
                createPostMutation.mutate(postData, {
                    onSuccess: () => {
                        setTitle("");
                        setContent("");
                    }
                });
            }
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // If user can't create posts in this category, don't show the chat component
    if (!isComment && !canCreatePost()) {
        return null;
    }

    return (
        <div className="h-1/5 flex flex-col ">
            {/* 메시지 입력 영역 */}
            <div className="flex-1 px-2">
                {!isComment && (
                    <textarea
                        className="w-full h-1/4 resize-none pl-4 pt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></textarea>
                )}
                <textarea
                    className="w-full h-4/6 resize-none p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isComment ? "Add a comment..." : "Type your message here"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            {/* 하단 영역 */}
            <div
                className={`flex items-center ${
                    isComment ? "justify-end" : "justify-between"
                } p-4 bg-white`}
            >
                {/* 해시태그 버튼 */}
                <div className="flex gap-2">
                    {!isComment && activeMenu === String(POST_TYPES.QNA).toLowerCase() && (
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center w-10 h-10 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            #
                        </button>
                    )}

                    {/* 태그 선택 */}
                    {isOpen && (
                        <div className="flex flex-row mb-2 w-50 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {Object.values(TAGS).map((tag, index) => (
                                <p
                                    key={index}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setCurrentTag(tag);
                                        setIsOpen(false);
                                    }}
                                >
                                    #{tag}
                                </p>
                            ))}
                        </div>
                    )}
                    
                    {/* 선택된 태그 */}
                    {currentTag && !isOpen && (
                        <div className="flex items-center gap-2">
                            <p className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg">
                                #{currentTag}
                            </p>
                        </div>
                    )}
                </div>

                {/* 전송 버튼 */}
                <button
                    className={`px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 ${
                        (isComment && content.trim() === "") || 
                        (!isComment && (title.trim() === "" || content.trim() === ""))
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    onClick={handleSubmit}
                    disabled={
                        (isComment && content.trim() === "") || 
                        (!isComment && (title.trim() === "" || content.trim() === ""))
                    }
                >
                    {createPostMutation.isPending || createCommentMutation.isPending 
                        ? "Sending..." 
                        : "Send"}
                </button>
            </div>
        </div>
    );
}