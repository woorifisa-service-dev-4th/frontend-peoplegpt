import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('class');
    const client = await db.connect();
    const isAll = Number(type) === Number(0);
    try {
        const query = isAll
            ? await client.sql`
                SELECT * FROM POST WHERE type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            `
            :
            await client.sql`
                SELECT * FROM POST WHERE class_id = ${type} AND type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        return NextResponse.json(query.rows);
    } catch (error) {
        console.log("QNA DB:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    const { userId, classId, title, content, tagId } = await request.json();
    const client = await db.connect();
    const typeId = 1;
    try {
        const postTypeResult = await client.sql`
            SELECT name FROM POST_TYPE WHERE id = ${typeId}
        `;
        const postType = postTypeResult.rows[0].name;

        const result = await client.sql`
            INSERT INTO POST (user_id, class_id, title, content, tag_id, type_id, status)
            VALUES (${userId}, ${classId}, ${title}, ${content}, ${tagId}, ${typeId}, 0)
            RETURNING *
        `;
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    // const token = request.headers.get('Authorization')?.split('Bearer ')[1];
    // if (!token) {
    //     return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    // }    
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const userId = decoded.userId;

    const { id, classId, title, content, tagId } = await request.json();
    const client = await db.connect();

    try {
        const post = await client.sql`
            SELECT * FROM POST WHERE id = ${id}
        `;
        if (post.rows.length === 0) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        const result = await client.sql`
            UPDATE POST 
            SET class_id = ${classId},
                title = ${title},
                content = ${content},
                tag_id = ${tagId},
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ${id}
            RETURNING *
        `;
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const client = await db.connect();

    try {
        const post = await client.sql`
            SELECT * FROM POST WHERE id = ${id}
        `;
        if (post.rows.length === 0) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        await client.sql`
            UPDATE POST 
            SET status = 1, updated_at = CURRENT_TIMESTAMP
            WHERE id = ${id}
        `;
        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}