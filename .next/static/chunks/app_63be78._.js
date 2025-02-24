(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_63be78._.js", {

"[project]/app/lib/actions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createComment": (()=>createComment),
    "createPost": (()=>createPost),
    "deleteComment": (()=>deleteComment),
    "deletePost": (()=>deletePost),
    "fetchPostByPostId": (()=>fetchPostByPostId),
    "getCodeSharePosts": (()=>getCodeSharePosts),
    "getComments": (()=>getComments),
    "getDailyPosts": (()=>getDailyPosts),
    "getPosts": (()=>getPosts),
    "updateComment": (()=>updateComment),
    "updatePost": (()=>updatePost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$index$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/postgres/dist/index-node.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@vercel/postgres/dist/chunk-7IR77QAQ.js [app-client] (ecmascript) <locals>");
;
async function getPosts(type, classType) {
    const isAll = Number(classType) === Number(0);
    let sqlQuery = null;
    try {
        if (type === 0) {
            if (isAll) {
                sqlQuery = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                    SELECT * FROM POST WHERE type_id = 1 AND status = 0
                    ORDER BY POST.created_at DESC
                `;
            } else {
                sqlQuery = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                    SELECT * FROM POST WHERE class_id = ${classType} AND type_id = 1 AND status = 0
                    ORDER BY POST.created_at DESC
                `;
            }
        } else if (type === 1) {
            sqlQuery = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                SELECT * FROM POST WHERE type_id = 2 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        } else if (type === 2) {
            sqlQuery = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
                SELECT * FROM POST WHERE type_id = 3 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        } else {
            return new Error("Invalid type");
        }
        return query.rows;
    } catch (error) {
        console.log("QNA DB tester:", error);
        return error;
    }
}
async function getDailyPosts() {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            SELECT * FROM POST WHERE type_id = 3 AND status = 0
            ORDER BY POST.created_at DESC
        `;
        return query1.rows;
    } catch (error) {
        console.log("Daily DB tester:", error);
        return error;
    }
}
async function getCodeSharePosts() {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            SELECT * FROM POST WHERE type_id = 2 AND status = 0
            ORDER BY POST.created_at DESC
        `;
        return query1.rows;
    } catch (error) {
        console.log("CodeShare DB tester:", error);
        return error;
    }
}
async function getComments(postId) {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            SELECT * FROM COMMENT WHERE post_id = ${postId} AND status = 0
            ORDER BY COMMENT.created_at DESC
        `;
        return query1.rows;
    } catch (error) {
        console.log("Comment DB tester:", error);
        return error;
    }
}
async function createPost(preState, formData) {
    const { title, content, tag, type, classType } = formData;
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            INSERT INTO POST (user_id, class_id, title, content, tag_id, type_id, status)
            VALUES (1, ${classType}, ${title}, ${content}, ${tag}, ${type}, 0)
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Create Post DB tester:", error);
        return error;
    }
}
async function createComment(postId, formData) {
    const { content } = formData;
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            INSERT INTO COMMENT (user_id, post_id, content, status)
            VALUES (1, ${postId}, ${content}, 0)
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Create Comment DB tester:", error);
        return error;
    }
}
async function fetchPostByPostId(postId) {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            SELECT * FROM POST WHERE id = ${postId}
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Post DB tester:", error);
        return error;
    }
}
async function deletePost(postId) {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            UPDATE POST SET status = 1 WHERE id = ${postId}
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Delete Post DB tester:", error);
        return error;
    }
}
async function deleteComment(commentId) {
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            UPDATE COMMENT SET status = 1 WHERE id = ${commentId}
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Delete Comment DB tester:", error);
        return error;
    }
}
async function updatePost(postId, formData) {
    const { title, content, tag, type, classType } = formData;
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            UPDATE POST SET title = ${title}, content = ${content}, tag_id = ${tag}, type_id = ${type}, class_id = ${classType}
            WHERE id = ${postId}
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Update Post DB tester:", error);
        return error;
    }
}
async function updateComment(commentId, formData) {
    const { content } = formData;
    try {
        const query1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$7IR77QAQ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"]`
            UPDATE COMMENT SET content = ${content}
            WHERE id = ${commentId}
            RETURNING *
        `;
        return query1.rows[0];
    } catch (error) {
        console.log("Update Comment DB tester:", error);
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
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    setComments((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCommentByPostId"])(postId));
    const postDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostByPostId"])(postId);
    const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addComment = (newComment)=>{
        const timestamp = new Date().toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        setComments((prev)=>[
                ...prev,
                {
                    content: newComment,
                    time: timestamp
                }
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col bg-white  w-full md:w-[25%] h-full md:border  md:top-0 md:left-0  transition-all duration-700 ease-in-out",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-12 flex items-center justify-end p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-500 hover:text-gray-800",
                    children: "X"
                }, void 0, false, {
                    fileName: "[project]/app/ui/dashboard/comments.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden h-auto p-2 pt-0 rounded-xl bg-gray-50 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold",
                            children: postDetail.title
                        }, void 0, false, {
                            fileName: "[project]/app/ui/dashboard/comments.js",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ui/dashboard/comments.js",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gap-3 grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `rounded-xl bg-white p-3 text-sm text-gray-700 break-all`,
                                children: postDetail.content
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 flex justify-start gap-2",
                                children: postDetail.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `flex rounded-xl px-2 py-1 bg-pink-500 text-sm`,
                                        children: [
                                            "#",
                                            tag
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/ui/dashboard/comments.js",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `px-3 text-gray-500 text-sm`,
                                children: postDetail.createdAt
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ui/dashboard/comments.js",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-5 flex flex-col items-center py-4",
                ref: commentsRef,
                children: comments.map((comment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-2xl w-5/6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                children: comment.userId
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 break-all",
                                children: comment.content
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: comment.createdAt
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/comments.js",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/ui/dashboard/comments.js",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-auto border-t pt-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSubmit: addComment,
                    isComment: true
                }, void 0, false, {
                    fileName: "[project]/app/ui/dashboard/comments.js",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/comments.js",
                lineNumber: 94,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/dashboard/comments.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(CommentsBox, "Kf7H2VMZSUGZ6S1vAEi/TLqa6Iw=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$comments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/dashboard/comments.js [app-client] (ecmascript)");
;
;
;
async function Cards({ postType, isCommentsOpen, setIsCommentsOpen, openPostId, setOpenPostId, classType }) {
    const cardsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosts"])(postType, classType);
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
            cardsData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    postId: card.id,
                    title: card.title,
                    content: card.content,
                    tag: card.tag_id,
                    createAt: card.created_at,
                    commentCount: 1,
                    isCommentsOpen: isCommentsOpen,
                    toggleOpen: toggleOpen,
                    setOpenPostId: setOpenPostId,
                    postType: postType
                }, card.id, false, {
                    fileName: "[project]/app/ui/dashboard/cards.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)),
            isCommentsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$comments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: toggleClose,
                postId: openPostId
            }, void 0, false, {
                fileName: "[project]/app/ui/dashboard/cards.js",
                lineNumber: 34,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/dashboard/cards.js",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_c = Cards;
function Card({ postId, title, content, tag, createdAt, commentCount, toggleOpen, setOpenPostId, postType }) {
    const isCodeShare = Number(postType) === Number(1);
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
                            lineNumber: 48,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ui/dashboard/cards.js",
                        lineNumber: 47,
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
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        !isCodeShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 flex justify-start gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `flex rounded-xl px-2 py-1 bg-pink-500 text-m`,
                                        children: [
                                            "#",
                                            tag
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ui/dashboard/cards.js",
                                        lineNumber: 62,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `px-3 text-gray-500 text-m`,
                                    children: createdAt
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 68,
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
                                        lineNumber: 75,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/cards.js",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/dashboard/cards.js",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/ui/dashboard/cards.js",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ui/dashboard/cards.js",
        lineNumber: 43,
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
"[project]/app/ui/skeleton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// app/components/ui/skeleton
__turbopack_esm__({
    "PostSkeleton": (()=>PostSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PostSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 bg-gray-200 rounded-md w-2/3 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/ui/skeleton.js",
                lineNumber: 6,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded-md w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/skeleton.js",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded-md w-5/6"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/skeleton.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded-md w-4/6"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/skeleton.js",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/skeleton.js",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-16 bg-gray-200 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/skeleton.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-20 bg-gray-200 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/ui/skeleton.js",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/skeleton.js",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ui/skeleton.js",
        lineNumber: 5,
        columnNumber: 7
    }, this);
}
_c = PostSkeleton;
;
var _c;
__turbopack_refresh__.register(_c, "PostSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(dashboard)/codeshare/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/dashboard/cards.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/skeleton.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
function Page() {
    _s();
    const [isCommentsOpen, setIsCommentsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openPostId, setOpenPostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostSkeleton"], {}, void 0, false, {
                fileName: "[project]/app/(dashboard)/codeshare/page.js",
                lineNumber: 14,
                columnNumber: 33
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$dashboard$2f$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                postType: 1,
                isCommentsOpen: isCommentsOpen,
                setIsCommentsOpen: setIsCommentsOpen,
                openPostId: openPostId,
                setOpenPostId: setOpenPostId
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/codeshare/page.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(dashboard)/codeshare/page.js",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(dashboard)/codeshare/page.js",
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
"[project]/app/(dashboard)/codeshare/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_63be78._.js.map