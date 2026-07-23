export default function About() {
    return (
        <div className="prose max-w-none">
        <h1 className="text-3xl font-bold">Tentang Aplikasi Ini</h1>
        <p className="text-gray-600 mt-2">
            Aplikasi Task Manager dibangun sebagai proyek pembelajaran React Intermediate.
        </p>
        <ul className="list-disc list-inside mt-4">
            <li>React 18 + TypeScript</li>
            <li>State Management: Context API + useReducer</li>
            <li>Styling: Tailwind CSS</li>
            <li>Routing: React Router v6</li>
        </ul>
        </div>
    );
}