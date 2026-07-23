import { TaskList } from './components/TaskList';
import { TaskStats } from './components/TaskStats';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-500">
            Kelola tugas dengan mudah
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <TaskStats />
          <TaskList />
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          Made using React + Zustand
        </div>
      </div>
    </div>
  );
}

export default App;