// src/pages/dashboard/daily/_page.jsx
import { usePosts } from '../../../hooks/usePosts';
import Cards from '../../../components/Cards';
import { POST_TYPES } from '../../../lib/constants';

export default function DailyPage() {
    const { data: posts, isLoading, error } = usePosts(POST_TYPES.DAILY);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts</div>;

    return <Cards posts={posts} />;
}