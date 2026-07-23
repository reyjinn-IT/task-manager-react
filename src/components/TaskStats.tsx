import { useTaskStore } from '../stores/useTaskStore';

export function TaskStats() {
    const total = useTaskStore((state) => state.tasks.length);
    const completed = useTaskStore((state) => state.tasks.filter((t) => t.done).length);
    const pending = useTaskStore((state) => state.tasks.filter((t) => !t.done).length);

    const stats = [
        {
        label: 'Total Tugas',
        value: total,
        color: 'bg-primary-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* ← w-5 h-5 */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        },
        {
        label: 'Selesai',
        value: completed,
        color: 'bg-success-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        },
        {
        label: 'Belum Selesai',
        value: pending,
        color: 'bg-danger-500',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
            <div
            key={stat.label}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200"
            >
            <div className="flex items-center justify-between">
                <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-2 rounded-lg text-white`}> {/* ← p-2 (lebih kecil) */}
                {stat.icon}
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}