// src/components/Cards.jsx
import { usePosts } from "../hooks/usePosts";
import Comments from "./Comments";

export default function Cards({ postType, classType }) {
    const { data: cardsData, isLoading } = usePosts(postType, classType);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const toggleOpen = (postId) => {
        setOpenPostId(postId);
        setIsCommentsOpen(true);
    };

    const toggleClose = () => {
        setIsCommentsOpen(false);
        setOpenPostId(null);
    };

    return (
        <div className="grid gap-4">
            {cardsData?.map((card) => (
                <Card
                    key={card.id}
                    postId={card.id}
                    title={card.title}
                    content={card.content}
                    tag={card.tag_id}
                    createdAt={card.created_at}
                    commentCount={card.comment_count || 0}
                    toggleOpen={toggleOpen}
                    postType={postType}
                />
            ))}
            {isCommentsOpen && (
                <Comments 
                    onClose={toggleClose} 
                    postId={openPostId}
                />
            )}
        </div>
    );
}

function Card({
    postId,
    title,
    content,
    tag,
    createdAt,
    commentCount,
    toggleOpen,
    postType
}) {
    const isCodeShare = Number(postType) === 1;

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            {!isCodeShare && (
                <div className="flex p-3">
                    <h3 className="ml-2 text-3xl font-medium">{title}</h3>
                </div>
            )}

            <div className="gap-3 grid">
                <p className="rounded-xl bg-white px-5 py-8 text-xl">
                    {content}
                </p>
                {!isCodeShare && (
                    <>
                        <div className="px-3 flex justify-start gap-2">
                            <p className="flex rounded-xl px-2 py-1 bg-pink-500 text-m">
                                #{tag}
                            </p>
                        </div>
                        <p className="px-3 text-gray-500 text-m">
                            {createdAt}
                        </p>
                        <button onClick={() => toggleOpen(postId)}>
                            <p className="px-3 text-blue-500 text-m">
                                {commentCount} comment{commentCount !== 1 ? 's' : ''}
                            </p>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}