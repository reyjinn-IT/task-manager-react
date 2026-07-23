import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md p-4">
            <div className="max-w-6xl mx-auto flex gap-6">
            <Link to="/" className="text-blue-600 font-semibold hover:underline">
                Home
            </Link>
            <Link to="/posts" className="text-gray-600 hover:text-blue-600">
                Posts
            </Link>
            </div>
        </nav>
        <main className="max-w-6xl mx-auto p-4">
            <Outlet />
        </main>
        <TanStackRouterDevtools />
        </div>
    );
}