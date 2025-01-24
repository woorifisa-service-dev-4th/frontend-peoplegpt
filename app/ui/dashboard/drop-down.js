"use client";

export default function Dropdown({ isOpen, items = [] }) {
    if (!isOpen) return null;

    return (
        <div className="flex flex-col items-end space-y-2 w-full ml-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="text-black bg-[#E1E1E1] h-14 w-4/5 rounded-2xl flex items-center justify-center cursor-pointer"
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
