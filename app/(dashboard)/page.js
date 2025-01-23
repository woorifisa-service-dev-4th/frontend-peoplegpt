'use client'

import { postType } from "@/app/lib/data";
import Cards from "@/app/ui/dashboard/cards";

export default function Page() {


    return (
        <div className="relative">
            <Cards whatClass={postType[0]}/>
        </div>
    );
}

