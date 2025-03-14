import { POST_TYPES } from "../lib/constants";

export default function Cards({ 
    posts, 
    onCommentClick,
    isCommentsOpen,
    openPostId 
}) {
    if (!posts || posts.length === 0) {
        return <div className="text-center py-10 text-gray-500">No posts found</div>;
    }

    return (
        <div className="grid gap-4">
            {posts.map((post) => (
                <Card
                    key={post.postId}
                    post={post}
                    onCommentClick={onCommentClick}
                    isActive={openPostId === post.postId && isCommentsOpen}
                />
            ))}
        </div>
    );
}

function Card({ post, onCommentClick, isActive }) {
    const isQnA = post.category === String(POST_TYPES.QNA);
    const isCodeShare = post.category === String(POST_TYPES.CODESHARE);
    
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Code copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex p-3 justify-between">
                <h3 className="ml-2 text-xl font-medium">{post.title}</h3>
                <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
            </div>                    

            <div className="gap-3 grid">
                <div className={`rounded-xl bg-white px-5 py-8 text-lg relative ${isCodeShare ? 'font-mono' : ''}`}>
                    {post.content}
                    
                    {isCodeShare && (
                        <button 
                            onClick={() => copyToClipboard(post.content)}
                            className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                        >
                            Copy Code
                        </button>
                    )}
                </div>
                
                {isQnA && (
                    <>
                        <div className="px-3 flex justify-start gap-2">
                            {post.tag && (
                                <p className="flex rounded-xl px-2 py-1 bg-pink-500 text-white text-sm">
                                    #{post.tag}
                                </p>
                            )}
                        </div>
                        
                        <div className="px-3 flex justify-between items-center">
                            <button 
                                onClick={() => onCommentClick(post.postId)}
                                className={`text-blue-500 hover:text-blue-700 ${isActive ? 'font-bold' : ''}`}
                            >
                                {post.commentCount || 0} comments
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );    
}