import Image from "next/image";

export default function NavBar() {
    return (
        <div className="py-3.5 border-b items-center flex justify-between px-4 border-gray-light">
            <Image 
                src="/navigation_icon.svg" 
                alt="logo" 
                width={17} 
                height={14} 
                className="cursor-pointer" 
            />
            <p className="text-base text-btn-col font-semibold">Dashboard</p>

            <div className="mr-2 py-1 items-center flex px-2 bg-grey rounded-md">
                <div className="gap-1 flex justify-center items-center">
                    <Image src="/search_icon.svg" alt="search" width={15} height={15} />
                    <input type="text" className="bg-grey text-sm" placeholder="Search"/>
                </div>
                <Image src="/profile_icon.svg" alt="profile" width={15} height={15} />
            </div>
        </div>
    )
}
