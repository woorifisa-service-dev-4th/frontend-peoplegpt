import { sql } from '@vercel/postgres';

export async function getQnATester(type) {
    const isAll = Number(type) === Number(0);
    try {
        const query = isAll
            ? await sql`
                SELECT * FROM POST WHERE type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            `
            :
            await sql`
                SELECT * FROM POST WHERE class_id = ${type} AND type_id = 1 AND status = 0
                ORDER BY POST.created_at DESC
            `;
        return query.rows;
    } catch (error) {
        console.log("QNA DB tester:", error);
        return error;
    }
}
