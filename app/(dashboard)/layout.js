import Chat from "../ui/chat";
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }) {
    const [activeMenu, setActiveMenu] = useState('');  
    return (
        <div className="flex h-screen">
            <div className="h-screen w-[20%] bg-[#ACDEF8]">
                <SideNav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            </div>
            <div className="w-[80%] flex flex-col">
                <div className="flex-grow overflow-y-auto p-6 md:p-12">
                    {children}
                </div>
                <div className="p-6 border-t bg-white">
                    <Chat activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
                    <Chat />
                </div>
            </div>
        </div>
    );
}