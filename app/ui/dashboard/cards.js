import { fetchCommentByPostId, fetchQnAData } from "@/app/lib/data";
import { comment } from "postcss";

export default function Cards() {
    const cardsData = fetchQnAData();
    return (
        <div className="grid gap-4">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    tags={card.tags}
                    createAt={card.createAt}
                    commentCount={fetchCommentByPostId(card.id).length}
                />
            ))}
        </div>
    );
}

function Card({title, content, tags, createdAt, commentCount}) {
    return (
        <div>
            <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-3">
                <h3 className="ml-2 text-3xl font-medium">{title}</h3>
            </div>
            <div className="gap-3 grid">
                <p
                    className={`rounded-xl bg-white px-5 py-8  text-xl`}
                >
                    {content}
                </p>
                <div className="px-3 flex justify-start gap-2">
                    {tags.map((tag,index) => (
                        <p
                            key={index}
                            className={`flex rounded-xl px-2 py-1 bg-pink-500 text-m`}
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <p
                    className={`px-3 text-gray-500 text-m`}
                >
                    {createdAt}
                </p>            
                <p
                    className={`px-3 text-blue-500 text-m`}
                >
                    {commentCount} comment
                </p>
            </div>
            </div>            
        </div>
    );    
}