import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-end h-full ">
            <Image src="/logo.png" alt="Logo" width={40} height={49} />
            <p className="text-[36px] ml-2 leading-none text-white">
                peopleGPT
            </p>
        </div>
    );
}
