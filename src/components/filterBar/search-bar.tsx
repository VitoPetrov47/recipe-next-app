"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onSearch(value);
    };

    return (
        <div className="relative">
            <Input
                type="text"
                placeholder="Search meal..."
                onChange={handleChange}
                value={inputValue}
                className="w-[320px] pr-8"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" /> {/* Иконка лупы */}
        </div>
    );
}