import { createRootRoute, Link, Outlet, redirect, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
    beforeLoad: ({ location }) => {
        const isAuthenticated = !!localStorage.getItem('user');
        if (!isAuthenticated && location.pathname !== '/login') {
            throw redirect({ to: '/login' });
        }
    },
    component: RootComponent,
    });

    function RootComponent() {
    const router = useRouter();
    const isAuthenticated = !!localStorage.getItem('user');

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.navigate({ to: '/login' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4 border-b">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
                <Link to="/" className="text-blue-600 font-semibold hover:underline">
                    Home
                </Link>
                <Link to="/posts" className="text-gray-600 hover:text-blue-600">
                    Posts
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
                    Dashboard
                </Link>
            </div>
            {isAuthenticated && (
                <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-700"
                >
                    Logout
                </button>
            )}
            </div>
        </nav>

        <main>
            <Outlet />
        </main>

        <TanStackRouterDevtools />
        </div>
    );
}