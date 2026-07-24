export type Post = {
    id: number;
    title: string;
    body: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch(`${BASE_URL}/posts?_limit=10`);
    if (!res.ok) throw new Error('failed to fetch data posts')
    return res.json()
};

export const fetchPostById = async (id: number): Promise<Post> => {
    const res = await fetch(`${BASE_URL}/post/${id}`)
    if (!res.ok) throw new Error("Post not found");
    return res.json()
};