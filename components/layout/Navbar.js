import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="#" className="flex items-center">
                        <Image src="./icon.png" className="h-12 mr-3" alt="Flowbite Logo"/>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Leave</button>
                    </div>
                </div>
            </nav>
        </>
    )
}