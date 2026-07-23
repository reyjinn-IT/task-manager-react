// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar sederhana */}
      <nav className="bg-white shadow-sm p-4 border-b">
        <div className="max-w-6xl mx-auto flex gap-6">
          <Link to="/" className="text-blue-600 font-semibold hover:underline">
            Home
          </Link>
          <Link to="/posts" className="text-gray-600 hover:text-blue-600">
            Posts
          </Link>
        </div>
      </nav>

      {/* Konten halaman */}
      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  );
}