import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface searchInputsProps{
    onSearch : (term:string) => void;
    placeholder ?: string;
}

export function SearchInput({onSearch, placeholder = 'ketik sesuatu...'}: searchInputsProps){
    const [term, setTerm] = useState('');
    const debouncedTerm = useDebounce(term, 500);

    useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm, onSearch]);

    return (
        <input
            type="text"
            value={term}
            placeholder={placeholder}
            onChange={(e) => setTerm(e.target.value)}
            className="border p-2 rounded w-full"
        />
    );
}