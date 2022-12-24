import { ArrowRightOnRectangleIcon, BuildingOfficeIcon, CalendarDaysIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'
import moment from 'moment/moment'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MenuSection() {
    const { data: session, status } = useSession()
    const [greating, setGreating] = useState('Good Morning')
    const router = useRouter();
    
    // useEffect(()=>{
    //     if(moment().format('a') === 'am'){
    //         setGreating('Good Morning')
    //     } else {
    //         setGreating('Good Evening')
    //     }
    // })

    return (
        <>
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-auto sm:flex-1">
                    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">Hello, {session && session.user.name || greating}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{!session ? 'Please sign in to book a desk or room' : 'User informarion here...'}</p>
                    </div>
                </div>
                <div className="flex-auto sm:flex-1">
                    <div className="lg:grid lg:grid-cols-6 gap-2 flex justify-between">
                        <div className="bg-blue-200 hover:bg-blue-300 ease-out duration-300 hover:text-gray-600 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <a href="#" onClick={() => router.push('/room')} className="h-full">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <BuildingOfficeIcon className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 text-center">Rooms</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-blue-200 hover:bg-blue-300 ease-out duration-300 hover:text-gray-600 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <a href="#" onClick={() => router.push('/info')} className="h-full">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <SpeakerWaveIcon className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 text-center">Info</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-blue-200 hover:bg-blue-300 ease-out duration-300 hover:text-gray-600 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <a href="#" onClick={() => router.push('/calendar')} className="h-full">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <CalendarDaysIcon className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 text-center">Calendar</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-blue-200 hover:bg-blue-300 ease-out duration-300 hover:text-gray-600 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <a href="#" className="h-full">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 text-center">Out</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}