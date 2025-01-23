"use client";

import Link from "next/link";

export default function NavItem({ href, icon, label, active, onClick }) {
    return (
        <Link href={href}>
            <div
                className={`bg-[#F4F4F4] h-20 rounded-2xl flex items-center justify-center cursor-pointer px-10 ${
                    active ? "text-[#0067AC]" : "text-black"
                }`}
                onClick={onClick}
            >
                {icon} {label}
            </div>
        </Link>
    );
}
