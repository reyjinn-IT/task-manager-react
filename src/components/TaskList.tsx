import { useState, useMemo, useCallback } from 'react';
import { useTaskStore } from '../stores/useTaskStore';
import { SearchInput } from './SearchInputs';
import { Button } from './Button';
import TaskItem from './Taskitems';

export function TaskList() {
    const tasks = useTaskStore((state) => state.tasks);
    const addTask = useTaskStore((state) => state.addTask);

    const [searchTerm, setSearchTerm] = useState('');
    const [newTaskText, setNewTaskText] = useState('');

    const filteredTasks = useMemo(() => {
        return tasks.filter((t) =>
        t.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [tasks, searchTerm]);

    const handleAddTask = useCallback(() => {
        if (newTaskText.trim() === '') return;
        addTask(newTaskText.trim());
        setNewTaskText('');
    }, [newTaskText, addTask]);

    return (
        <div className="space-y-4">
        <SearchInput onSearch={setSearchTerm} placeholder="Cari tugas..." />

        <div className="flex gap-2">
            <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            placeholder="Tambah tugas baru..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        bg-white text-gray-700 placeholder-gray-400
                        transition-all duration-200"
            />
            <Button onClick={handleAddTask} variant="primary">
            <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* ← w-4 h-4 */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah
            </Button>
        </div>

        {filteredTasks.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">Belum ada tugas</p>
            <p className="text-sm">Tambahkan tugas baru di atas</p>
            </div>
        ) : (
            <ul className="space-y-2">
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            </ul>
        )}

        {tasks.length > 0 && (
            <div className="text-sm text-gray-400 text-center pt-2 border-t border-gray-100">
            Menampilkan {filteredTasks.length} dari {tasks.length} tugas
            </div>
        )}
        </div>
    );
}