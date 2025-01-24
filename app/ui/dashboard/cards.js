import { fetchPostByTypeDB } from "@/app/lib/actions";
import { fetchCommentByPostId, fetchPostByType } from "@/app/lib/data";
import { getQnATester } from "@/app/lib/actions";
import CommentsBox from "@/app/ui/dashboard/comments";

export default async function Cards({postType,
    isCommentsOpen, setIsCommentsOpen, openPostId, setOpenPostId
}) {

    const cardsData = await getQnATester(postType);
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
                    tag={card.tag_id}
                    createAt={card.created_at}
                    commentCount={1}
                    isCommentsOpen={isCommentsOpen}
                    toggleOpen={toggleOpen}
                    setOpenPostId={setOpenPostId}
                    postType={postType}
                />
            ))}
            {isCommentsOpen && <CommentsBox onClose={toggleClose} postId={openPostId}/>}
        </div>
        
    );
}

function Card({postId, title, content, tag, createdAt, commentCount, toggleOpen, setOpenPostId, postType}) {
    const isCodeShare = Number(postType) === Number(1);
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
                                <p
                                    className={`flex rounded-xl px-2 py-1 bg-pink-500 text-m`}
                                >
                                    #{tag}
                                </p>
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
