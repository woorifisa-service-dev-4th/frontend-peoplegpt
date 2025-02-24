(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_f654f4._.js", {

"[project]/app/lib/actions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchPostByTypeDB": (()=>fetchPostByTypeDB)
});
'use client';
function formatGetPostParam(postType) {
    if (postType === 0) {
        return 'qna?class=0';
    } else if (postType === 1) {
        return 'codeshare';
    } else if (postType === 2) {
        return 'daily';
    } else {
        return new Error('Invalid post type');
    }
}
async function fetchPostByTypeDB(postType) {
    const postTypeParam = formatGetPostParam(postType);
    try {
        const url = `/api/post/${postTypeParam}`;
        const cardsData = await fetch(url, {
            method: 'GET'
        });
        console.log(JSON.stringify(cardsData));
        return cardsData.data;
    } catch (error) {
        console.error('1Error:', error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/test.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getQnATester": (()=>getQnATester)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$index$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/postgres/dist/index-node.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/postgres/dist/chunk-7IR77QAQ.js [app-client] (ecmascript) <locals>");
;
async function getQnATester(type) {
    const isAll = Number(type) === Number(0);
    try {
        const query = isAll ? await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                SELECT * FROM POST WHERE type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            ` : await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                SELECT * FROM POST WHERE class_id = ${type} AND type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        console.log("QNA DB tester:", query.rows);
        return await query.rows;
    } catch (error) {
        console.log("QNA DB tester:", error);
        return error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ui/dashboard/comments.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CommentsBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function CommentsBox({ onClose, postId }) {
    _s();
    const comments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCommentByPostId"])(postId);
    const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addComment = (newComment)=>{
        // 각 게시물 별로 받아야 하니까 배열에 게시물 id 추가
        const timestamp = new Date().toLocaleString("ko-KR", {
            // 시간 표시
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
        // 댓글 입력한 사용자 id까지 받는 걸로 수정
        setComments((prev)=>[
                ...prev,
                {
                    content: newComment,
                    time: timestamp
                }
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col bg-white border w-[25%] h-[100%] fixed top-0 left-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800",
                children: "X"
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-5 mt-12 flex flex-col items-center",
                ref: commentsRef,
                children: comments.map((comment, index)=>// 댓글 화면
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-2xl w-5/6" // 댓글 요소 중앙 정렬
                        ,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                children: "사용자 이름"
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 break-all",
                                children: comment.content
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: comment.time
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/ui/dashboard/comments.js",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: addComment,
                isComment: true
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/dashboard/comments.js",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s(CommentsBox, "aNk8AWPOtWiNkkOpxaC/RkZy+A8=");
_c = CommentsBox;
var _c;
__turbopack_refresh__.register(_c, "CommentsBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/ui/dashboard/cards.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Cards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$test$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/test.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$comments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/dashboard/comments.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
function Cards({ postType }) {
    _s();
    const cardsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostByTypeDB"])(postType);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);
    const toggleOpen = ()=>{
        setIsCommentsOpen(true);
    };
    const toggleClose = ()=>{
        setIsCommentsOpen(false);
        setOpenPostId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4",
        children: [
            cardsData.map((card)=>// console.log("FUCNTIONCARD: ", card),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    postId: card.id,
                    title: card.title,
                    content: card.content,
                    tags: card.tag,
                    createAt: card.createAt,
                    commentCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCommentByPostId"])(card.id).length,
                    isCommentsOpen: isCommentsOpen,
                    toggleOpen: toggleOpen,
                    setOpenPostId: setOpenPostId,
                    postType: postType
                }, card.id, false, {
                    fileName: "[project]/app/ui/dashboard/cards.js",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)),
            isCommentsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$comments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: toggleClose,
                postId: openPostId
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/cards.js",
                lineNumber: 41,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/dashboard/cards.js",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(Cards, "I8/+GNfdRqtQKGyGP+pXfkmZRJA=");
_c = Cards;
function Card({ postId, title, content, tags, createdAt, commentCount, toggleOpen, setOpenPostId, postType }) {
    const isCodeShare = postType === postType[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl bg-gray-50 p-2 shadow-sm",
            children: [
                !isCodeShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "ml-2 text-3xl font-medium",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/ui/dashboard/cards.js",
                            lineNumber: 55,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ui/dashboard/cards.js",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this)
                }, void 0, false),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gap-3 grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `rounded-xl bg-white px-5 py-8  text-xl`,
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/app/ui/dashboard/cards.js",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        !isCodeShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 flex justify-start gap-2",
                                    children: tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `flex rounded-xl px-2 py-1 bg-pink-500 text-m`,
                                            children: [
                                                "#",
                                                tag
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/ui/dashboard/cards.js",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `px-3 text-gray-500 text-m`,
                                    children: createdAt
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        toggleOpen();
                                        setOpenPostId(postId);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `px-3 text-blue-500 text-m`,
                                        children: [
                                            commentCount,
                                            " comment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ui/dashboard/cards.js",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/dashboard/cards.js",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/ui/dashboard/cards.js",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ui/dashboard/cards.js",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c1 = Card;
var _c, _c1;
__turbopack_refresh__.register(_c, "Cards");
__turbopack_refresh__.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(dashboard)/qna/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/dashboard/cards.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function Page() {
    _s();
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostSkeleton, {}, void 0, false, {
                fileName: "[project]/app/(dashboard)/qna/page.js",
                lineNumber: 14,
                columnNumber: 33
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                postType: 0,
                isCommentsOpen: isCommentsOpen,
                setIsCommentsOpen: setIsCommentsOpen,
                openPostId: openPostId,
                setOpenPostId: setOpenPostId
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/qna/page.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/qna/page.js",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/qna/page.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_s(Page, "JEaBevFDut+bUAUR1LzrLiP3PMo=");
_c = Page;
var _c;
__turbopack_refresh__.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(dashboard)/qna/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_f654f4._.js.map