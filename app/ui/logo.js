import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex items-end h-full ">
            <Image src="/logo.png" alt="Logo" width={40} height={49} />
            <Link href="/qna">
                <p className="text-[36px] ml-2 leading-none text-white">
                    peopleGPT
                </p>
            </Link>
        </div>
    );
}
