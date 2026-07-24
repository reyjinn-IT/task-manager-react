import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { fetchPosts } from '../api/post';
import { Link } from '@tanstack/react-router';


export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/posts',
    loader: async () => {
        const posts = await fetchPosts();
        return { posts };
    },
    component: function Posts() {
        const { posts } = Route.useLoaderData();

        return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Daftar Posts</h1>
            <ul className="space-y-4">
            {posts.map((Post) => (
                <li key={Post.id} className="bg-white p-4 rounded shadow">
                <Link
                    to="/posts/$postId"
                    params={{ postId: String(Post.id) }}
                    className="text-blue-600 hover:underline text-xl font-semibold"
                >
                    {Post.title}
                </Link>
                <p className="text-gray-600 mt-1">{Post.body.substring(0, 60)}...</p>
                </li>
            ))}
            </ul>
        </div>
        );
    },
});