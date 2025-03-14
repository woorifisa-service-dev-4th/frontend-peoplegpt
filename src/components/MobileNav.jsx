import { Link } from 'react-router-dom';
import { POST_TYPES } from '../lib/constants';

export default function MobileNav({ activeMenu, setActiveMenu }) {
    return (
        <div className="flex flex-col bg-white p-4 shadow-lg">
            <Link 
                to="/dashboard/qna" 
                className={`p-2 ${activeMenu === String(POST_TYPES.QNA).toLowerCase() ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-200'} rounded mb-2`}
                onClick={() => setActiveMenu("qna")}
            >
                <span>❓ Q&A</span>
            </Link>
            
            <Link
                to="/dashboard/codeshare"
                className={`p-2 ${activeMenu === String(POST_TYPES.CODESHARE).toLowerCase() ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-200'} rounded mb-2`}
                onClick={() => setActiveMenu("codeshare")}
            >
                <span>🖥️ Code Share</span>
            </Link>
            
            <Link
                to="/dashboard/daily"
                className={`p-2 ${activeMenu === String(POST_TYPES.DAILY).toLowerCase() ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-200'} rounded`}
                onClick={() => setActiveMenu("daily")}
            >
                <span>📄 Daily Summary</span>
            </Link>
        </div>
    );
}