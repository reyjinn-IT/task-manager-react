import React from 'react';
import type { Task } from '../types/task';
import { useTaskStore } from '../stores/useTaskStore';

interface TaskItemProps {
  task: Task;
}

const TaskItem = React.memo(({ task }: TaskItemProps) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <li className="task-enter group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
      />
      <span
        className={`flex-1 text-gray-700 ${
          task.done ? 'line-through text-gray-400' : ''
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-danger-500 transition-all duration-200"
        title="Hapus tugas"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
});

export default TaskItem;