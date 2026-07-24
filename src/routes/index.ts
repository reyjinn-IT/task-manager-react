import { Route as RootRoute } from './__root';
import { Route as HomeRoute } from './home';
import { Route as PostsRoute } from './posts';
import { Route as PostIdRoute } from './posts/$postId';
import { Route as LoginRoute } from './login';
import { Route as DashboardRoute } from './dashboard';

export const routeTree = RootRoute.addChildren([
    HomeRoute,
    PostsRoute.addChildren([PostIdRoute]),
    LoginRoute,
    DashboardRoute,
]);