export type Post = {
    id: number;
    title: string;
    body: string;
};

const posts: Post[] = [
    { id: 1, title: 'Belajar React', body: 'React adalah library UI yang populer...' },
    { id: 2, title: 'Belajar TypeScript', body: 'TypeScript menambahkan tipe ke JavaScript...' },
    { id: 3, title: 'Belajar TanStack Router', body: 'Router type-safe untuk React...' },
];

export const fetchPosts = async (): Promise<Post[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return posts;
};

export const fetchPostById = async (id: number): Promise<Post> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const post = posts.find((p) => p.id === id);
    if (!post) throw new Error('Post not found');
    return post;
};