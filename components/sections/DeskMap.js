import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BookModal from "./modals/BookModal";

export default function DeskMap() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return(
        <>
            <div className="flex flex-col my-8 gap-6">
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div onClick={openModal} className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border bg-orange-300 w-full h-8 rounded-lg grid grid-cols-1 place-content-center">
                            <div className="flex flex-col justify-center">
                                <div className="mx-auto">
                                    Desk D
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border bg-orange-300 w-full h-8 rounded-lg grid grid-cols-1 place-content-center">
                            <div className="flex flex-col justify-center">
                                <div className="mx-auto">
                                    Desk C
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border bg-orange-300 w-full h-8 rounded-lg grid grid-cols-1 place-content-center">
                            <div className="flex flex-col justify-center">
                                <div className="mx-auto">
                                    Desk B
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border bg-orange-300 w-full h-8 rounded-lg grid grid-cols-1 place-content-center">
                            <div className="flex flex-col justify-center">
                                <div className="mx-auto">
                                    Desk A
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <div className="flex justify-center gap-4">
                        <div className="flex justify-center flex-col">
                            <div className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <span>Unavailable</span>
                        </div>
                        <div>
                            <div className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                <div className="flex flex-col justify-center">
                                    <div className="mx-auto">
                                        <XMarkIcon className="h-3 w-3 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <span>Available</span>
                        </div>
                    </div>
                </div>
            </div>
            <BookModal
                isOpen={isOpen}
            />
        </>
    )
}