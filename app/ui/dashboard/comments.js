import { useEffect, useRef, useState } from "react";
import Chat from "../chat";

export default function CommentsBox({ initialComments = [] }) {
    const [comments, setComments] = useState(initialComments);
    const commentsRef = useRef(null);

    const addComment = (newComment) => {
        //각 게시물 별로 받아야 하니까 배열에 게시물id 추가
        const timestamp = new Date().toLocaleString("ko-KR", {
            // 시간 표시
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
        //댓글 입력한 사용자 id까지 받는 걸로 수정
        setComments((prev) => [...prev, { content: newComment, time: timestamp }]);
    };

    useEffect(() => {
        // 자동 스크롤
        if (commentsRef.current) {
            commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
        }
    }, [comments]);

    return (
        <div className="flex flex-col bg-white border border-gray-500 w-[34%] h-[100%] fixed top-0 left-0">
            <div className="flex-1 overflow-y-auto space-y-5" ref={commentsRef}>
                {comments.map((comment, index) => (
                    // 댓글 화면
                    <div key={index} className="border border-gray-200 p-2">
                        <p className="text-sm font-semibold">사용자 이름{/*comment.userid로 고치기*/}</p>
                        <p className="text-sm text-gray-700 break-all">{comment.content}</p>
                        <p className="text-xs text-gray-400">{comment.time}</p>
                    </div>
                ))}
            </div>

            {/* 댓글 입력창 */}
            <Chat onSubmit={addComment} />
        </div>
    );
}
