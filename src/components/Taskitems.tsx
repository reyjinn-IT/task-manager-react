import { memo } from 'react';
import type { Task } from '../types/task';
import { useTasks } from '../contexts/TaskContext';

interface TaskItemProps {
    task: Task;
}

const TaskItem = memo(({ task }: TaskItemProps) => {
    const { dispatch } = useTasks();
    console.log(`render TaskItem ${task.id}`);

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
});

export default TaskItem;