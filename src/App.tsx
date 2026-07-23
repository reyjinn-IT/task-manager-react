import { TaskProvider } from './contexts/TaskContext';
import { TaskList } from './components/TaskList';

function App() {
  console.log("🔥 App sedang berjalan!");
  
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