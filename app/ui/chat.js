'use client';
import { useState } from 'react';
import { tagsData } from '../lib/data';

export default function Chat({onSubmit}) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
  
    const handleSubmit = () => {
        if (content.trim() !== "") {
            onSubmit(content);
            setContent("");
        }
    };  

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            {/* 메시지 입력 영역 */}
            <div className="flex-1 p-4">
                <input
                    className="w-full h-full resize-none p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message here"`
                    value={content}
                    onChange={(e) => setComment(e.target.value)}
                ></input>
            </div>

            {/* 하단 영역 */}
            <div className="flex items-center justify-between p-4 bg-white shadow-md">
                {/* 해시태그 버튼 */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-center w-10 h-10 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    >
                        #
                    </button>

                    {/* 드롭다운 */}
                    {isOpen && (
                        <div className="absolute bottom-full mb-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {tagsData.map((tag, index) => (
                                <p
                                    key={index}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                    #{tag}
                                </p>
                            ))}
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
