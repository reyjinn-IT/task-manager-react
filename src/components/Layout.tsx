import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    const isAuthenticated = !!localStorage.getItem('user');

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
                <Link to="/" className="text-blue-600 font-semibold hover:underline">
                Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
                Dashboard
                </Link>
            </div>
            <div>
                {isAuthenticated ? (
                <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-700"
                >
                    Logout
                </button>
                ) : (
                <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                </Link>
                )}
            </div>
            </div>
        </nav>

        {/* Konten halaman (Outlet) */}
        <main className="max-w-6xl mx-auto p-4">
            <Outlet />
        </main>
        </div>
    );
}