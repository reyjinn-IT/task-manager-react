import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { fetchPosts } from '../api/post';
import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { postsQueryOptions } from '../api/queries';


export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/posts',
    loader: async () => {
        const posts = await fetchPosts();
        return { posts };
    },
    component: function Posts() {
        const { data:posts, isLoading, isError, error} = useQuery(postsQueryOptions());
        if(isLoading){
            return(
                <p className='text-center text-gray-500 py-8'>Loading data...</p>
            )
        }

        if(isError){
            return(
                <p className='text-center text-red-500 py-8'>gagal memuat data {error.message}</p>
            )
        }

        return (
            <div>
                <div className="space-y-4">
                    {posts?.map((post) => (
                        <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <Link
                                to="/posts/$postId"
                                params={{ postId: String(post.id) }}
                                className="text-xl font-semibold text-blue-600 hover:underline"
                            >
                                {post.title}
                            </Link>
                            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
                            <p className="text-sm text-gray-400 mt-2">ID: {post.id}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
});