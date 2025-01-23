import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen">
            {/* 사이드바: 20% 너비, 높이 전체, 배경색 설정 */}
            <div className="h-screen w-[20%] bg-[#ACDEF8]">
                <SideNav />
            </div>

            {/* 메인 컨텐츠: 나머지 80% 차지 */}
            <div className="w-[80%] flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
}
