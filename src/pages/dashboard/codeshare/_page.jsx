// src/pages/dashboard/codeshare/_page.jsx
import { usePosts } from '../../../hooks/usePosts';
import Cards from '../../../components/Cards';
import { POST_TYPES } from '../../../lib/constants';

export default function CodeSharePage() {
    const { data: posts, isLoading, error } = usePosts(POST_TYPES.CODE_SHARE);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts</div>;

    return (
        <div className="grid gap-4">
            {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow p-4">
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                        <code>{post.content}</code>
                    </pre>
                </div>
            ))}
        </div>
    );
}
