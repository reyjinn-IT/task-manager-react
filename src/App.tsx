import { useState } from 'react';
import { TaskProvider, useTasks } from './contexts/TaskContext';
import { SearchInput } from './components/SearchInputs';
import type { Task } from './types/task';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const { dispatch } = useTasks();

  return (
    <li className="flex items-center gap-2 p-2 border-b">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })}
      />
      <span className={task.done ? 'line-through' : ''}>{task.text}</span>
      <button
        onClick={() => dispatch({ type: 'DELETE', payload: task.id })}
        className="text-red-500 ml-auto"
      >
        Hapus
      </button>
    </li>
  );
}

function TaskList() {
  const { tasks, dispatch } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');
  const [newTaskText, setNewTaskText] = useState('');

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    dispatch({ type: 'ADD', payload: newTaskText.trim() });
    setNewTaskText('');
  };

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
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
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

function App() {
  return (
    <TaskProvider>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;