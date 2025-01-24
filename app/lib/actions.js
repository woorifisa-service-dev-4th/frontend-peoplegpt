import { sql } from '@vercel/postgres';

export async function getPosts(type, classType) {
    const isAll = (Number(classType) === Number(0));

    let sqlQuery = null;
    try {
        if(type === 0) {
            if(isAll) {
                sqlQuery = await sql`
                    SELECT * FROM POST WHERE type_id = 1 AND status = 0
                    ORDER BY POST.created_at DESC
                `;
            } else {
                sqlQuery = await sql`
                    SELECT * FROM POST WHERE class_id = ${classType} AND type_id = 1 AND status = 0
                    ORDER BY POST.created_at DESC
                `;
            }
        } else if(type === 1) {
            sqlQuery = await sql`
                SELECT * FROM POST WHERE type_id = 2 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        } else if(type === 2) {
            sqlQuery = await sql`
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

export async function getDailyPosts() {
    try {
        const query = await sql`
            SELECT * FROM POST WHERE type_id = 3 AND status = 0
            ORDER BY POST.created_at DESC
        `;
        return query.rows;
    } catch (error) {
        console.log("Daily DB tester:", error);
        return error;
    }
}

export async function getCodeSharePosts() {
    try {
        const query = await sql`
            SELECT * FROM POST WHERE type_id = 2 AND status = 0
            ORDER BY POST.created_at DESC
        `;
        return query.rows;
    } catch (error) {
        console.log("CodeShare DB tester:", error);
        return error;
    }
}

export async function getComments(postId) {
    try {
        const query = await sql`
            SELECT * FROM COMMENT WHERE post_id = ${postId} AND status = 0
            ORDER BY COMMENT.created_at DESC
        `;
        return query.rows;
    } catch (error) {
        console.log("Comment DB tester:", error);
        return error;
    }
}

export async function createPost(preState, formData) {

    const { title, content, tag, type, classType } = formData;

    try {
        const query = await sql`
            INSERT INTO POST (user_id, class_id, title, content, tag_id, type_id, status)
            VALUES (1, ${classType}, ${title}, ${content}, ${tag}, ${type}, 0)
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Create Post DB tester:", error);
        return error;
    }
}

export async function createComment(postId, formData) {
    const { content } = formData;

    try {
        const query = await sql`
            INSERT INTO COMMENT (user_id, post_id, content, status)
            VALUES (1, ${postId}, ${content}, 0)
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Create Comment DB tester:", error);
        return error;
    }
}

export async function fetchPostByPostId(postId) {
    try {
        const query = await sql`
            SELECT * FROM POST WHERE id = ${postId}
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Post DB tester:", error);
        return error;
    }
}

export async function deletePost(postId) {
    try {
        const query = await sql`
            UPDATE POST SET status = 1 WHERE id = ${postId}
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Delete Post DB tester:", error);
        return error;
    }
}

export async function deleteComment(commentId) {
    try {
        const query = await sql`
            UPDATE COMMENT SET status = 1 WHERE id = ${commentId}
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Delete Comment DB tester:", error);
        return error;
    }
}

export async function updatePost(postId, formData) {
    const { title, content, tag, type, classType } = formData;

    try {
        const query = await sql`
            UPDATE POST SET title = ${title}, content = ${content}, tag_id = ${tag}, type_id = ${type}, class_id = ${classType}
            WHERE id = ${postId}
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Update Post DB tester:", error);
        return error;
    }
}

export async function updateComment(commentId, formData) {
    const { content } = formData;

    try {
        const query = await sql`
            UPDATE COMMENT SET content = ${content}
            WHERE id = ${commentId}
            RETURNING *
        `;
        return query.rows[0];
    } catch (error) {
        console.log("Update Comment DB tester:", error);
        return error;
    }
}