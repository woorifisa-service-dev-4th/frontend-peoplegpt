import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const client = await db.connect();
    const type_id = 2;

    try {
        const post = await client.sql`
            SELECT * FROM POST WHERE type_id = ${type_id} AND status = 0
            ORDER BY POST.created_at DESC
        `;
        return NextResponse.json(post.rows[0]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    const { classId, title, content, tagId } = await request.json();
    const client = await db.connect();
    const typeId = 2;
    const userId = 1;

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
    const { id, classId, title, content, tagId } = await request.json();
    const client = await db.connect();

    try {
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
        const result = await client.sql`
            UPDATE POST 
            SET status = 1
            WHERE id = ${id}
            RETURNING *
        `;
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}