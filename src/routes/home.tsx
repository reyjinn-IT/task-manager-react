import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';

export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/',
    component: function Home() {
        return (
        <div>
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="mt-2 text-gray-600">Selamat datang di aplikasi dengan TanStack Router!</p>
            <p className="mt-2 text-sm text-gray-500">
            Klik <strong>Posts</strong> untuk melihat daftar postingan.
            </p>
        </div>
        );
    },
});