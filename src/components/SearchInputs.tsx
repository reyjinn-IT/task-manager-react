import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface SearchInputProps {
    onSearch: (term: string) => void;
    placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = 'Cari tugas...' }: SearchInputProps) {
    const [term, setTerm] = useState('');
    const debouncedTerm = useDebounce(term, 500);

    useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm, onSearch]);

    return (
        <div className="relative">
        <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                    bg-white text-gray-700 placeholder-gray-400
                    transition-all duration-200"
        />
        {term && (
            <button
            onClick={() => setTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        )}
        </div>
    );
}