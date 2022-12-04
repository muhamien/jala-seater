import { ArrowRightOnRectangleIcon, BuildingLibraryIcon, BuildingOfficeIcon, SpeakerWaveIcon, UserIcon } from '@heroicons/react/24/outline'

export default function MenuSection() {
    
    return(
        <>
            <div class="flex flex-col gap-4 sm:flex-row">
                <div class="flex-auto sm:flex-1">
                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight">Hello, Muhammad Amien</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div class="flex-auto sm:flex-1">
                    <div class="lg:grid lg:grid-cols-6 gap-2 flex justify-between">
                        <div class="bg-blue-200 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <div class="flex flex-col justify-center">
                                <div class="mx-auto">
                                    <BuildingOfficeIcon class="h-6 w-6 text-black"/>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 text-center">Rooms</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-blue-200 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <div class="flex flex-col justify-center">
                                <div class="mx-auto">
                                    <SpeakerWaveIcon class="h-6 w-6 text-black"/>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 text-center">Info</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-blue-200 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <div class="flex flex-col justify-center">
                                <div class="mx-auto">
                                    <UserIcon class="h-6 w-6 text-black"/>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 text-center">Profile</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-blue-200 w-16 h-16 rounded-lg grid grid-cols-1 place-content-center">
                            <div class="flex flex-col justify-center">
                                <div class="mx-auto">
                                    <ArrowRightOnRectangleIcon class="h-6 w-6 text-black"/>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 text-center">Log Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}