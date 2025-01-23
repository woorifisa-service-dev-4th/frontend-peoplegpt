import { db } from '@vercel/postgres';

export async function createAndSeedDatabase() {
    const client = await db.connect();

    await client.sql`DROP TABLE IF EXISTS comments, posts, users;`;

    await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            role VARCHAR(50),
            status VARCHAR(50)
        );
    `;
    await client.sql`
        CREATE TABLE IF NOT EXISTS posts (
            id INT PRIMARY KEY,
            "userId" INT,
            class VARCHAR(255),
            title VARCHAR(255),
            content TEXT,
            tags VARCHAR(255),
            type VARCHAR(50),
            status VARCHAR(50),
            "createdAt" VARCHAR(50)
        );
    `;
    await client.sql`
        CREATE TABLE IF NOT EXISTS comments (
            id INT PRIMARY KEY,
            "userId" INT,
            "postId" INT,
            content TEXT,
            "createdAt" VARCHAR(50)
        );
    `;

    await client.sql`
        INSERT INTO users (id, name, email, password, role, status)
        VALUES
        (0, '정호쌤', 'admin@admin.com', 'admin', 'admin', 'active'),
        (1, '김코딩', 'test01@test.com', 'test01', 'user', 'active'),
        (2, '이코딩', 'test02@test.com', 'test02', 'user', 'active');
    `;

    await client.sql`
        INSERT INTO posts (id, "userId", class, title, content, tags, type, status, "createdAt")
        VALUES
        (1, 2, '클라우드 서비스 개발', 'What is React?', 'React is a front-end library...', '이론', 'QnA', 'active', '2024.12.12'),
        (2, 1, 'AI 엔지니어링', 'Introduction to Node.js', 'Node.js is a JavaScript runtime...', '실습', 'QnA', 'active', '2024.12.13'),
        (3, 0, '클라우드 엔지니어링', 'Understanding Angular', 'Angular is a platform...', '프로젝트', 'CodeShare', 'active', '2024.12.14'),
        (4, 0, NULL, 'Getting Started with Vue.js', 'Vue.js is a progressive...', NULL, 'Daily', 'active', '2024.12.15'),
        (5, 1, NULL, 'Exploring Svelte', 'Svelte is a radical...', NULL, 'QnA', 'active', '2024.12.16');
    `;

    await client.sql`
        INSERT INTO comments (id, "userId", "postId", content, "createdAt")
        VALUES
        (1, 1, 1, 'This is a comment', '2024.12.12'),
        (2, 1, 1, 'This is a comment', '2024.12.12'),
        (3, 4, 1, 'This is a comment', '2024.12.12');
    `;

    console.log('Database created and seeded successfully');
    await client.end();
}

export async function seedExtraData() {
    const client = await db.connect();
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
        CREATE TABLE IF NOT EXISTS sample_table (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(255),
            description TEXT
        );
    `;

    await client.sql`
        INSERT INTO sample_table (title, description)
        VALUES
            ('Example Title', 'Example Description'),
            ('Another Title', 'Another Description');
    `;

    console.log('Additional data seeded');
    await client.end();
}
