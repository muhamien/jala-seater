import { getProviders, signIn } from "next-auth/react"
import { motion } from "framer-motion";

export default function SignIn({ providers }) {
    return (
        <>
        <div className="bg-gray-900">
            <motion.div
                className=" min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <p className="text-gray-900 dark:text-gray-300">
                            Please login with your company mail @jala.tech,
                            Don't have Jala Email?, please contact IT Support.
                        </p>
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <button onClick={() => signIn(provider.id)} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Sign in with @jala.tech
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}