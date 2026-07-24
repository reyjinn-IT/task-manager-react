import { createRoute, useNavigate } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { useState, type FormEvent } from 'react';

export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/login',
    component: function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
            navigate({ to: '/dashboard' as any});
        } else {
            setError('Username atau password salah!');
        }
        };

        return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {error}
                </div>
            )}

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan username"
                    required
                />
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan password"
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                Login
                </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
                * Gunakan <strong>admin / admin123</strong> untuk login
            </p>
            </div>
        </div>
        );
    },
});