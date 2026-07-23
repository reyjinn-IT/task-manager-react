import { Route as RootRoute } from './__root';
import { Route as HomeRoute } from './home';
import { Route as PostsRoute } from './posts';
import { Route as PostIdRoute } from './posts/$postId';

export const routeTree = RootRoute.addChildren([
    HomeRoute,
    PostsRoute.addChildren([PostIdRoute]),
]);
