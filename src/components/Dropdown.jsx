// src/components/Dropdown.jsx
import { useCallback } from 'react';

export default function Dropdown({ isOpen, items = [], onItemClick }) {
    if (!isOpen) return null;

    const handleItemClick = useCallback((item) => {
        onItemClick?.(item);
    }, [onItemClick]);

    return (
        <div className="flex flex-col items-end space-y-2 w-full ml-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="text-black bg-[#E1E1E1] h-14 w-4/5 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                    onClick={() => handleItemClick(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
