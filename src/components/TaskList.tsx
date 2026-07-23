import { useState, useMemo, useCallback } from 'react';
import { useTasks } from '../contexts/TaskContext';
import { SearchInput } from './SearchInputs';
import TaskItem from './Taskitems';

export function TaskList() {
    const { tasks, dispatch } = useTasks();
    const [searchTerm, setSearchTerm] = useState('');
    const [newTaskText, setNewTaskText] = useState('');
    const filteredTasks = useMemo(() => {
    console.log('Menghitung ulang filteredTasks...');
    return tasks.filter((t) =>
        t.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }, [tasks, searchTerm]);

    const handleAddTask = useCallback(() => {
        if (newTaskText.trim() === '') return;
        dispatch({ type: 'ADD', payload: newTaskText.trim() });
        setNewTaskText('');
    }, [newTaskText, dispatch]);

    return (
        <div className="space-y-4">
        <SearchInput onSearch={setSearchTerm} placeholder="Cari tugas..." />

        <div className="flex gap-2">
            <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Tambah tugas baru"
            className="border p-2 rounded flex-1"
            />
            <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">
            Tambah
            </button>
        </div>

        <ul>
            {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
            ))}
        </ul>
        </div>
    );
}