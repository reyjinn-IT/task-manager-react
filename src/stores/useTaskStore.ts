import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Task } from '../types/task';

interface TaskStore {
    tasks: Task[];
    
    addTask: (text: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
        tasks: [],

        addTask: (text) =>
            set((state) => ({
            tasks: [...state.tasks, { id: Date.now(), text, done: false }],
            })),
        toggleTask: (id) =>
            set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            ),
            })),
        deleteTask: (id) =>
            set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
            })),
        clearTasks: () =>
            set(() => ({
            tasks: [],
            })),
        }),
        {
        name: 'task-storage',
        }
    )
);