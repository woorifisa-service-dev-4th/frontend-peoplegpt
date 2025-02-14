'use client';
import { useState } from 'react';
import { tagsData } from '../lib/data';

export default function Chat({onSubmit, isComment, activeMenu, setActiveMenu}) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");

    const [currentTag, setCurrentTag] = useState("");
    const isQnA = activeMenu === "qna";

    const handleSubmit = () => {
        if (content.trim() !== "") {
            onSubmit(content);
            setContent("");
        }
    };  

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return (
        <div className="h-1/5 flex flex-col ">
            {/* 메시지 입력 영역 */}
            <div className="flex-1 px-2">
                <textarea
                    className="w-full h-full resize-none p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message here"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            {/* 하단 영역 */}
            <div className={`flex items-center ${isComment ? 'justify-end' : 'justify-between'} p-4 bg-white`}>
                {/* 해시태그 버튼 */}

                <div className="flex gap-2">
                    {(!isComment && isQnA) && 
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center w-10 h-10 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        >
                            #
                        </button>
                    }
                
                    {/* 태그 선택 */}
                    {isOpen && (
                        <div className="flex flex-row mb-2 w-50 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {tagsData.map((tag, index) => (
                                <p
                                    key={index}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
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
                    {(currentTag && !isOpen) && (
                        <div className="flex items-center gap-2">
                            <p className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg">
                                {currentTag}
                            </p>
                        </div>
                    )}
                </div>
                

                {/* 전송 버튼 */}
                <button 
                  className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                    Send
                </button>
            </div>

        </div>
    );
}
