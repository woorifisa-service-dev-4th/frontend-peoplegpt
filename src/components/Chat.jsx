import { useState } from "react";
import { useCreatePost, useCreateComment } from "../hooks/usePosts";
import { TAGS } from "../lib/constants"; // Assuming you have this import

export default function Chat({
    isComment = false,
    activeMenu,
    setActiveMenu,
    postId
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [currentTag, setCurrentTag] = useState("");
    
    // Get the current path to determine post type
    let postTypeName = '';
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      postTypeName = pathname.split("/")[1]; // Extract the first part of the path
    }
    
    // Determine post type number from name
    let postType = 0;
    if (postTypeName === "qna") {
        postType = 1;
    } else if (postTypeName === "codeshare") {
        postType = 2;
    } else if (postTypeName === "daily") {
        postType = 3;
    }
    
    // Class type (assuming this is needed, set default to 1)
    const classType = 1;
    
    // Use the mutation hooks
    const createPostMutation = useCreatePost();
    const createCommentMutation = useCreateComment();
    
    const handleSubmit = () => {
        if (isComment) {
            // Handle comment submission
            if (content.trim() !== "" && postId) {
                const commentData = {
                    content: content,
                    // Add user ID - this would normally come from auth context
                    user_id: 1 
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
        } else {
            // Handle post submission
            if (content.trim() !== "" && title.trim() !== "") {
                const postData = {
                    title: title,
                    content: content,
                    type: postType,
                    category: activeMenu, // Use activeMenu as category
                    tag_id: currentTag,
                    class_id: classType,
                    // Add user ID - this would normally come from auth context
                    user_id: 1
                };
                
                createPostMutation.mutate(postData, {
                    onSuccess: () => {
                        setTitle("");
                        setContent("");
                        setCurrentTag("");
                    }
                });
            }
        }
    };
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const isQnA = activeMenu === "qna";
    
    return (
        <div className="h-1/5 flex flex-col">
            {/* Message input area */}
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
                    placeholder={isComment ? "Type your comment here" : "Type your message here"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            {/* Bottom area */}
            <div
                className={`flex items-center ${
                    isComment ? "justify-end" : "justify-between"
                } p-4 bg-white`}
            >
                {/* Tag button */}
                <div className="flex gap-2">
                    {!isComment && isQnA && (
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center w-10 h-10 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            #
                        </button>
                    )}

                    {/* Tag selection */}
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
                    
                    {/* Selected tag */}
                    {currentTag && !isOpen && (
                        <div className="flex items-center gap-2">
                            <p className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg">
                                #{currentTag}
                            </p>
                        </div>
                    )}
                </div>

                {/* Send button */}
                <button
                    className={`px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 ${
                        createPostMutation.isPending || createCommentMutation.isPending 
                            ? "opacity-70" 
                            : ""
                    }`}
                    onClick={handleSubmit}
                    disabled={createPostMutation.isPending || createCommentMutation.isPending}
                >
                    {createPostMutation.isPending || createCommentMutation.isPending 
                        ? "Sending..." 
                        : "Send"}
                </button>
            </div>
        </div>
    );
}