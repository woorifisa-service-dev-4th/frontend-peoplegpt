import { postType } from "@/app/lib/data";
import Cards from "@/app/ui/dashboard/cards";

export default function Page() {
    return (
        <div>
            <Cards whatClass={postType[1]}/>
        </div>
    );
}