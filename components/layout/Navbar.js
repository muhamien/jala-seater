import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(props) {

    const { data: session, status } = useSession();
    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="#" className="flex items-center">
                        <Image src="/icon.png" className="h-12 mr-3" alt="Flowbite Logo" width={48} height={48} />
                    </Link>
                    <div className="flex md:order-2">
                        {!session ? (
                            <>
                                <Link href="/api/auth/signin" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</Link>
                            </>
                        ) : (
                            <>
                                <Link href="#signout" onClick={() => signOut()} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign Out</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}