import { createRoute, redirect } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { useTaskStore } from '../stores/useTaskStore';

export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/dashboard',
    beforeLoad: () => {
        const isAuthenticated = !!localStorage.getItem('user');
        if (!isAuthenticated) {
        throw redirect({ to: '/login' as any });
        }
    },
    component: function Dashboard() {
        const tasks = useTaskStore((state) => state.tasks);

        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((t) => t.done).length;
        const pendingTasks = totalTasks - completedTasks;

        return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Total Tugas</h3>
                <p className="text-3xl font-bold text-blue-600">{totalTasks}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Selesai</h3>
                <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Belum Selesai</h3>
                <p className="text-3xl font-bold text-red-600">{pendingTasks}</p>
            </div>
            </div>
        </div>
        );
    },
});