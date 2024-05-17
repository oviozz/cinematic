



import {LiaSpinnerSolid} from "react-icons/lia";

export default function NotFound () {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[400px] py-24 space-y-4">

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Detail not found</h1>
                    <p className="text-gray-500 dark:text-gray-400">{"Sorry we weren't able to find this"}</p>
                </div>
            </div>
        </div>
    )
}
