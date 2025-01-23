'use client';

import { fetchCommentByPostId, fetchPostByType, postType } from "@/app/lib/data";
import CommentsBox from "@/app/ui/dashboard/comments";
import {  useState } from "react";

export default function Cards({whatClass}) {
    const cardsData = fetchPostByType(whatClass);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);

    const toggleOpen = () => {
        setIsCommentsOpen(true);
    };

    const toggleClose = () => {
        setIsCommentsOpen(false);
        setOpenPostId(null);
    }

    return (
        <div className="grid gap-4">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    postId={card.id}
                    title={card.title}
                    content={card.content}
                    tags={card.tags}
                    createAt={card.createAt}
                    commentCount={fetchCommentByPostId(card.id).length}
                    isCommentsOpen={isCommentsOpen}
                    toggleOpen={toggleOpen}
                    setOpenPostId={setOpenPostId}
                    whatClass={whatClass}
                />
            ))}
            {isCommentsOpen && <CommentsBox onClose={toggleClose} postId={openPostId}/>}
        </div>
        
    );
}

function Card({postId, title, content, tags, createdAt, commentCount, toggleOpen, setOpenPostId, whatClass}) {
    const isCodeShare = whatClass === postType[1];
    return (
        <div>
            <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                {!isCodeShare &&
                    <>
                        <div className="flex p-3">
                            <h3 className="ml-2 text-3xl font-medium">{title}</h3>
                        </div>                    
                    </>
                }

                <div className="gap-3 grid">
                    <p
                        className={`rounded-xl bg-white px-5 py-8  text-xl`}
                    >
                        {content}
                    </p>
                    {!isCodeShare && 
                        <>
                            <div className="px-3 flex justify-start gap-2">
                            {tags.map((tag, index) => (
                                <p
                                    key={index}
                                    className={`flex rounded-xl px-2 py-1 bg-pink-500 text-m`}
                                >
                                    #{tag}
                                </p>
                            ))}
                            </div>
                            <p className={`px-3 text-gray-500 text-m`}>
                                {createdAt}
                            </p>
                            <button onClick={() => {
                                toggleOpen();
                                setOpenPostId(postId);
                            } }>
                                <p
                                    className={`px-3 text-blue-500 text-m`}
                                >
                                    {commentCount} comment
                                </p>
                            </button>
                        </>
                    }
                </div>
            </div>
            
        </div>
    );    
}
