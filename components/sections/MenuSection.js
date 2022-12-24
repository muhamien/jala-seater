import { ArrowRightOnRectangleIcon, BuildingOfficeIcon, CalendarDaysIcon, ClipboardDocumentListIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'
import moment from 'moment/moment'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiBuildingOffice2,HiCalendarDays,HiExclamationCircle,HiClipboardDocumentList } from "react-icons/hi2";

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
                        <div className='flex flex-col w-max'>
                            <button onClick={() => router.push('/room')} type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center w-16 h-16 bg-blue-200 hover:bg-blue-300 ease-out duration-300 rounded-lg">
                                <div className="mx-auto text-blue-800">
                                    <HiBuildingOffice2 className="h-6 w-6" />
                                </div>
                            </button>
                            <p className='text-center'>Room</p>
                        </div>
                        <div className='flex flex-col w-max'>
                            <button onClick={() => router.push('/info')} type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center w-16 h-16 bg-blue-200 hover:bg-blue-300 ease-out duration-300 rounded-lg">
                                <div className="mx-auto text-blue-800">
                                    <HiExclamationCircle className="h-6 w-6" />
                                </div>
                            </button>
                            <p className='text-center'>Info</p>
                        </div>
                        <div className='flex flex-col w-max'>
                            <button onClick={() => router.push('/calendar')} type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center w-16 h-16 bg-blue-200 hover:bg-blue-300 ease-out duration-300 rounded-lg">
                                <div className="mx-auto text-sm text-blue-800">
                                    <HiCalendarDays className="h-6 w-6" />
                                </div>
                            </button>
                            <p className='text-center'>Calendar</p>
                        </div>
                        <div className='flex flex-col w-max'>
                            <button type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center w-16 h-16 bg-blue-200 hover:bg-blue-300 ease-out duration-300 rounded-lg">
                                <div className="mx-auto text-blue-800">
                                    <HiClipboardDocumentList className="h-6 w-6" />
                                </div>
                            </button>
                            <p className='text-center'>My Book</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}