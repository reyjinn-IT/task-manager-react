import { createRoute } from '@tanstack/react-router';
import { Route as PostsRoute } from '../posts';
import { fetchPostById } from '../../api/post';
import { Link } from '@tanstack/react-router';
import type { Post } from '../../api/post';

export const Route = createRoute({
    getParentRoute: () => PostsRoute,
    path: '/$postId',
    loader: async ({ params }): Promise<{ post: Post }> => {
        const post = await fetchPostById(Number(params.postId));
        return { post };
    },
    component: function PostDetail() {
        const { post } = Route.useLoaderData();

        return (
        <div>
            <Link to="/posts" className="text-blue-600 hover:underline block mb-4">
            ← Kembali ke daftar
            </Link>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-600 mt-4">{post.body}</p>
            <p className="text-sm text-gray-400 mt-6">ID: {post.id}</p>
        </div>
        );
    },
});