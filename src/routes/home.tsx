import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import { TaskList } from '../components/TaskList';
import { TaskStats } from '../components/TaskStats';

export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/',
    component: function Home() {
        return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Task Manager
            </h1>
            <p className="text-gray-500">Kelola tugas harianmu dengan mudah</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <TaskStats />
            <TaskList />
            </div>
            <div className="text-center text-sm text-gray-400 mt-6">
            Made by using React + Zustand
            </div>
        </div>
        );
    },
});