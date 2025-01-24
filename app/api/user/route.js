// app/api/user/route.js
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// GET: Fetch user
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const client = await db.connect();

  try {
    const result = await client.sql`
      SELECT * FROM USERS
      WHERE email = ${email} AND status = 0
    `;
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Create user
export async function POST(request) {
  const { name, email, password, role = 1 } = await request.json();
  const client = await db.connect();

  try {
    const result = await client.sql`
      INSERT INTO USERS (name, email, password, role, status)
      VALUES (${name}, ${email}, ${password}, ${role}, 0)
      RETURNING *
    `;
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// // PUT: Update user
// export async function PUT(request) {
//   const { id, name, password } = await request.json();
//   const client = await db.connect();

//   try {
//     const result = await client.sql`
//       UPDATE USERS 
//       SET name = ${name},
//           password = ${password},
//           updated_at = CURRENT_TIMESTAMP
//       WHERE id = ${id}
//       RETURNING *
//     `;
//     return NextResponse.json(result.rows[0]);
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // DELETE: Soft delete user
// export async function DELETE(request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id');
//   const client = await db.connect();

//   try {
//     await client.sql`
//       UPDATE USERS 
//       SET status = 1,
//           updated_at = CURRENT_TIMESTAMP
//       WHERE id = ${id}
//     `;
//     return NextResponse.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }