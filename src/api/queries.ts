import { queryOptions } from "@tanstack/react-query"
import { fetchPostById, fetchPosts } from "./post"

export const postsQueryOptions = () => {
    return queryOptions({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })
}

export const postQueryOptions = (id: number) => {
    return queryOptions({
        queryKey: ['posts', id],
        queryFn: () => fetchPostById(id),
    })
}