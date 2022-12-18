import { Player } from "@lottiefiles/react-lottie-player";
import LottieComingSoon from "../assets/lottiefile/coming-soon.json"
import Layout from "../components/Layout";

export default function Room() {
    return (
        <>
            <div className="grid grid-cols-1 place-content-center h-screen">
                <Player
                    src={LottieComingSoon}
                    className="player"
                    autoplay
                    loop
                    style={{ height: '350px', width: '350px' }}
                />
                <div className="flex-col flex justify-center gap-3">
                    <div>
                        <h2 className="text-center text-gray-600 font-semibold text-2xl">Coming Soon</h2>
                        <p className="text-center text-gray-400">This page is under development, stay tune-up for this feature 😁👌</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="/" className="text-center text-sm rounded-md hover:bg-blue-900 bg-blue-800 py-2 px-8 w-max text-white">Back to Home</a>
                    </div>
                </div>
            </div>
        </>
    )
}