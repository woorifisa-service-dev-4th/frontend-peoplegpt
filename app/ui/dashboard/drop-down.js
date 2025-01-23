"use client";

export default function Dropdown({ isOpen, items = [] }) {
    if (!isOpen) return null;

    return (
        <div className="flex flex-col items-end space-y-2 ml-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="text-black bg-[#F4F4F4] h-14 w-52 rounded-2xl flex items-center justify-center cursor-pointer"
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
