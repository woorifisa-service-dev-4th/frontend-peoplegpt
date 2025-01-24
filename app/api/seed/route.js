// app/api/seed/route.js
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

async function dropTables(client) {
  const tables = [
    'COMMENT',
    'POST',
    'USERS',
    'POST_TYPE',
    'TAG_TYPE',
    'CLASS_TYPE'
  ];
  
  for (const table of tables) {
    await client.sql`DROP TABLE IF EXISTS ${table} CASCADE`;
  }
}

async function seedConstants(client) {
  // Seed CLASS_TYPE
  await client.sql`
    INSERT INTO CLASS_TYPE (name) VALUES 
    ('클라우드 서비스 개발'),
    ('AI 엔지니어링'),
    ('클라우드 엔지니어링');
  `;

  // Seed TAG_TYPE
  await client.sql`
    INSERT INTO TAG_TYPE (name) VALUES 
    ('이론'),
    ('실습'),
    ('프로젝트'),
    ('기타');
  `;

  // Seed POST_TYPE
  await client.sql`
    INSERT INTO POST_TYPE (name) VALUES 
    ('QnA'),
    ('CodeShare'),
    ('Daily');
  `;
}

async function createTables(client) {
  // Create constant tables
  await client.sql`
    CREATE TABLE CLASS_TYPE (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL
    );

    CREATE TABLE TAG_TYPE (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL
    );

    CREATE TABLE POST_TYPE (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL
    );

    CREATE TABLE USERS (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role INTEGER NOT NULL,
      status INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE POST (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES USERS(id),
      class_id INTEGER REFERENCES CLASS_TYPE(id),
      title VARCHAR(200) NOT NULL,
      content TEXT NOT NULL,
      tag_id INTEGER REFERENCES TAG_TYPE(id),
      type_id INTEGER REFERENCES POST_TYPE(id),
      status INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE COMMENT (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES USERS(id),
      post_id INTEGER REFERENCES POST(id),
      content TEXT NOT NULL,
      status INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

async function seedData(client) {

  // Seed Users
  await client.sql`
    INSERT INTO USERS (name, email, password, role, status) VALUES 
    ('Admin User', 'admin@example.com', 'admin123', 0, 0),
    ('Normal User', 'user@example.com', 'user123', 1, 0);
  `;

  // Seed Posts
  await client.sql`
    INSERT INTO POST (user_id, class_id, title, content, tag_id, type_id, status) VALUES 
    (1, 1, 'First Daily Post', 'Daily post content', 1, 3, 0),
    (1, 2, 'Code Share Example', 'Code content', 2, 2, 0),
    (2, 3, 'QnA Question', 'Question content', 3, 1, 0);
  `;

  // Seed Comments (only for QnA and Daily posts)
  await client.sql`
    INSERT INTO COMMENT (user_id, post_id, content, status) VALUES 
    (1, 3, 'Answer to question', 0),
    (2, 1, 'Daily comment', 0);
  `;
}

export async function POST() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;
    // await dropTables(client);
    await createTables(client);
    // await seedConstants(client);
    await seedData(client);
    await client.sql`COMMIT`;
    
    return NextResponse.json({ message: 'Database initialized successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error initializing database', error: error.message }, { status: 500 });
  } finally {
    await client.end();
  }
}