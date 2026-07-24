import { api } from "./axiosInstance";

export type Post = {
    id: number;
    title: string;
    body: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
    const res = await api.get<Post[]>(`/posts`, {params: {_limit : 10}})
    return res.data;
}
export const fetchPostById = async (id: number): Promise<Post> => {
    const res = await api.get<Post>(`/posts/${id}`)
    return res.data;
};
