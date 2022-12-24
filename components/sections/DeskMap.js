import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import BookModal from "./modals/BookModal";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieNotFound from "../../assets/lottiefile/not-found.json"
import { Dropdown } from "flowbite-react";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { GrStatusGood, GrCalendar } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

export default function DeskMap(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('bottom')
    // const [isOpen, setIsOpen] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [deskSelected, setDeskSelected] = useState();
    const [deskSelectedAvailale, setDeskSelectedAvailale] = useState(true);
    const [desks, setDesks] = useState(props.desks);
    const [deskA, setDeskA] = useState(props.deskA);
    const [deskB, setDeskB] = useState(props.deskB);
    const [deskC, setDeskC] = useState(props.deskC);
    const [deskD, setDeskD] = useState(props.deskD);

    const showDeskDetail = (item) => {
        // console.log(item)
        setDeskSelected(item.fields.id)
        setDeskSelectedAvailale(item.fields.avalability === 'Available' ? true : false);
        onOpen();
    }

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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                                        <button type="button" className="border bg-green-600 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
                                            <div className="flex flex-col justify-center">
                                                <div className="mx-auto">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button type="button" className="border border-gray-400 w-8 h-8 rounded-lg grid grid-cols-1 place-content-center" onClick={() => { showDeskDetail(item) }}>
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
                    <div className="w-full pt-20">
                        <div className="border bg-gray-300 w-full h-8 rounded-lg grid grid-cols-1 place-content-center">
                            <div className="flex flex-col justify-center">
                                <div className="mx-auto">
                                    <span className="font-bold text-white">{"/// Front Wall ///"}</span>
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
                                        <XMarkIcon className="h-3 w-3 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <span>Available</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BookModal
                isOpen={isOpen}
            /> */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className="flex justify-between">
                            <div>
                                Desk Detail
                            </div>
                            <button onClick={onClose} type="button" class="ease-out duration-300 inline-flex relative items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100">
                                <IoMdClose width={24} height={24} />
                            </button>
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        <div className="h-96">
                            {deskSelectedAvailale ? (
                                <div className="flex flex-col h-full justify-between py-3">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <p className="text-xs text-gray-400">Seat Number</p>
                                                <h1 className="font-bold leading-none text-gray-900 dark:text-white text-3xl">
                                                    <a href="#">{deskSelected}</a>
                                                </h1>
                                            </div>
                                            <div>
                                                <span className="inline-flex relative items-center py-4 px-8 text-sm font-medium text-center text-blue-900 bg-blue-200 rounded-full">
                                                    <h2>Available</h2>
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mb-3 text-sm font-normal">
                                            <span className="text-base text-gray-400">No Booked</span>
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <button className="ease-out duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">
                                            Take Out
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col h-full justify-between py-3">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <p className="text-xs text-gray-400">Seat Number</p>
                                                <h1 className="font-bold leading-none text-gray-900 dark:text-white text-3xl">
                                                    <a href="#">{deskSelected}</a>
                                                </h1>
                                            </div>
                                            <div>
                                                <span className="inline-flex relative items-center py-4 px-8 text-sm font-medium text-center text-green-900 bg-green-200 rounded-full">
                                                    <h2>Booked</h2>
                                                </span>
                                            </div>
                                        </div>
                                        {/* <p className="mb-3 text-sm font-normal">
                                            <span className="text-base text-gray-400">No Booked</span>
                                        </p> */}
                                        <div className="rounded-lg bg-gray-100 h-auto w-full p-3">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex gap-3">
                                                    <div>
                                                        <Image src="https://lh3.googleusercontent.com/a/AEdFTp7fr2N2Vb3se7HyHme7PuTeaiQolw5jcmTxm-Er=s96-c" className="w-10 h-10 rounded-full" width={40} height={40} alt="Picture" />
                                                    </div>
                                                    <div>
                                                        <h4 class="text-lg font-semibold leading-none text-gray-900 dark:text-white">
                                                            <a href="#">Muhammad Amien Rauf</a>
                                                        </h4>
                                                        <p class="mb-3 text-sm font-normal">
                                                            <span class="hover:underline">amien@jala.tech</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="p-2 w-max h-max bg-blue-300 text-blue-700 text-xl rounded-full">
                                                        <GrCalendar width={20} height={20} />
                                                    </div>
                                                    <div className="flex items-center w-full">
                                                        <h4 class="text-lg font-medium leading-none text-gray-700 dark:text-white">
                                                            <span>25/12/2022</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="p-2 w-max h-max bg-blue-300 text-blue-700 text-xl rounded-full">
                                                        <GrStatusGood width={20} height={20} />
                                                    </div>
                                                    <div className="flex items-center w-full">
                                                        <h4 class="text-lg font-medium leading-none text-gray-700 dark:text-white">
                                                            <span>Waiting to confirm</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex">
                                        <button className="ease-out duration-300 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 w-full">
                                            Cancel
                                        </button>
                                        <button className="ease-out duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}