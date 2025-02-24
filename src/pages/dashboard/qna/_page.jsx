// src/pages/dashboard/qna/_page.jsx
import { useState } from 'react';
import { usePosts } from '../../../hooks/usePosts';
import Cards from '../../../components/Cards';
import Comments from '../../../components/Comments';
import { POST_TYPES } from '../../../lib/constants';

export default function QnaPage({ classType }) {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);
    
    const { data: posts, isLoading, error } = usePosts(POST_TYPES.QNA, classType);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts</div>;

    const handleCommentClick = (postId) => {
        setOpenPostId(postId);
        setIsCommentsOpen(true);
    };

    return (
        <div className="relative">
            <Cards
                posts={posts}
                onCommentClick={handleCommentClick}
                isCommentsOpen={isCommentsOpen}
                openPostId={openPostId}
            />
            
            {isCommentsOpen && (
                <Comments
                    postId={openPostId}
                    onClose={() => {
                        setIsCommentsOpen(false);
                        setOpenPostId(null);
                    }}
                />
            )}
        </div>
    );
}
