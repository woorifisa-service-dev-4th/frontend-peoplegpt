// src/components/Chat.jsx
import { useState } from "react";
import { useCreatePost, useCreateComment } from "../hooks/usePosts";
import { TAGS } from "../lib/constants";

export default function Chat({
    onSubmit,
    isComment,
    activeMenu,
    postId,
}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [currentTag, setCurrentTag] = useState("");
    const [isTagOpen, setIsTagOpen] = useState(false);

    const createPost = useCreatePost();
    const createComment = useCreateComment(postId);

    const handleSubmit = async () => {
        if (content.trim() === "") return;

        try {
            if (isComment) {
                await createComment.mutateAsync({ content });
            } else {
                await createPost.mutateAsync({
                    title: title.trim(),
                    content: content.trim(),
                    tag: currentTag,
                    type: activeMenu.toLowerCase(),
                });
            }
            
            setTitle("");
            setContent("");
            setCurrentTag("");
        } catch (error) {
            console.error("Error submitting:", error);
        }
    };

    return (
        <div className="h-1/5 flex flex-col">
            {!isComment && (
                <input
                    type="text"
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            )}
            
            <textarea
                className="w-full flex-1 p-2 border rounded resize-none"
                placeholder={isComment ? "Write a comment..." : "Write your post..."}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            
            <div className="flex justify-between items-center mt-2">
                {!isComment && (
                    <div className="relative">
                        <button
                            onClick={() => setIsTagOpen(!isTagOpen)}
                            className="px-3 py-1 bg-gray-100 rounded"
                        >
                            {currentTag || "#Tags"}
                        </button>
                        
                        {isTagOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg">
                                {Object.values(TAGS).map((tag) => (
                                    <button
                                        key={tag}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                        onClick={() => {
                                            setCurrentTag(tag);
                                            setIsTagOpen(false);
                                        }}
                                    >
                                        #{tag}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={(!isComment && !title.trim()) || !content.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}