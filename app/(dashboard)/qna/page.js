'use client'

import { postType } from "@/app/lib/data";
import Cards from "@/app/ui/dashboard/cards";
import { Suspense } from "react";
import { PostSkeleton } from "@/app/ui/skeleton";
import { useState } from "react";

export default function Page() {
    const [isCommentsOpen, setIsCommentsOpen,] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);


    return (
        <div className="relative">
            <Suspense fallback={<PostSkeleton />}>
                <Cards 
                    postType={0} 
                    isCommentsOpen={isCommentsOpen} 
                    setIsCommentsOpen={setIsCommentsOpen} 
                    openPostId={openPostId}
                    setOpenPostId={setOpenPostId}
                />
            </Suspense>
        </div>
    );
}

