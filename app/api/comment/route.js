// app/api/comment/route.js
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// GET: Fetch comments for a post
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const client = await db.connect();

  try {

    const comments = await client.sql`
      SELECT * FROM COMMENT c
      WHERE c.post_id = ${postId} AND c.status = 0
      ORDER BY c.created_at DESC
    `;
    return NextResponse.json(comments.rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Create a comment
export async function POST(request) {
  const { userId, postId, content } = await request.json();
  const client = await db.connect();

  try {
    const result = await client.sql`
      INSERT INTO COMMENT (user_id, post_id, content, status)
      VALUES (${userId}, ${postId}, ${content}, 0)
      RETURNING *
    `;
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update a comment
export async function PUT(request) {
  const { id, userId, content } = await request.json();
  const client = await db.connect();

  try {
    // const comment = await client.sql`
    //   SELECT * FROM COMMENT WHERE id = ${id}
    // `;

    // if (comment.rows[0].user_id !== userId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const result = await client.sql`
      UPDATE COMMENT 
      SET content = ${content}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `;
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Soft delete a comment
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const userId = searchParams.get('userId');
  const client = await db.connect();

  try {
    // const comment = await client.sql`
    //   SELECT * FROM COMMENT WHERE id = ${id}
    // `;

    // if (comment.rows[0].user_id !== parseInt(userId)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    await client.sql`
      UPDATE COMMENT 
      SET status = 1, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;
    return NextResponse.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}