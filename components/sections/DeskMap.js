import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BookModal from "./modals/BookModal";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieNotFound from "../../assets/lottiefile/not-found.json"

export default function DeskMap(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [desks, setDesks] = useState(props.desks);
    const [deskA, setDeskA] = useState(props.deskA);
    const [deskB, setDeskB] = useState(props.deskB);
    const [deskC, setDeskC] = useState(props.deskC);
    const [deskD, setDeskD] = useState(props.deskD);

    if (!desks) {
        return (
            <>
                <div className="grid grid-cols-1 place-content-center h-80">
                    <Player
                        src={LottieNotFound}
                        className="player grayscale "
                        autoplay
                        loop
                        style={{ height: '150px', width: '150px' }}
                    />
                    <h4 className="text-center text-gray-400">Uups, something went wrong</h4>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex flex-col my-8 gap-6">
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            {deskD.filter((f) => (f.fields.seatNumber > 5 && f.fields.seatNumber <= 10)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
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
                            {deskD.filter((f) => (f.fields.seatNumber >= 1 && f.fields.seatNumber < 6)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            {deskC.filter((f) => (f.fields.seatNumber > 5 && f.fields.seatNumber <= 10)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability === "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
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
                            {deskC.filter((f) => (f.fields.seatNumber >= 1 && f.fields.seatNumber < 6)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            {deskB.filter((f) => (f.fields.seatNumber > 5 && f.fields.seatNumber <= 10)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
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
                            {deskB.filter((f) => (f.fields.seatNumber >= 1 && f.fields.seatNumber < 6)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            {deskA.filter((f) => (f.fields.seatNumber > 5 && f.fields.seatNumber <= 10)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
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
                            {deskA.filter((f) => (f.fields.seatNumber >= 1 && f.fields.seatNumber < 6)).map((item, index) => (
                                <div key={item.id}>
                                    {item.fields.avalability == "Unavailable" ? (
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center">
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    <XMarkIcon className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
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
                                        <XMarkIcon className="h-3 w-3 text-gray-400" />
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