// src/components/NavItem.jsx
import { Link } from 'react-router-dom';

export default function NavItem({
    href,
    icon,
    label,
    active,
    onClick,
    button,
}) {
    return (
        <Link to={href}>
            <div
                className={`bg-[#E1E1E1] h-20 rounded-2xl flex items-center justify-center cursor-pointer px-10 ${
                    active ? "text-[#0067AC]" : "text-black"
                }`}
                onClick={onClick}
            >
                <span className="mr-2">{icon}</span>
                <span>{label}</span>
                {button}
            </div>
        </Link>
    );
}