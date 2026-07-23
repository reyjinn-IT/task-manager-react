import { Route as RootRoute } from './__root';
import { Route as IndexRoute } from './home';
import { Route as PostsRoute } from './posts';
import { Route as PostIdRoute } from './posts/$postId';

export const routeTree = RootRoute.addChildren([
    IndexRoute,
    PostsRoute.addChildren([PostIdRoute]),
]);