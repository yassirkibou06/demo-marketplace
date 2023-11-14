import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { ReaderIcon } from "@radix-ui/react-icons";
import { BsFillPlayFill } from "react-icons/bs"


const CardForm = () => {
    return (
        <Card className="bg-gray-100">
            <div className="px-2 py-0 rounded-md bg-orange-400 absolute left-2 top-2">
                <span className=" text-white text-xs">Language Learning</span>
            </div>
            <CardHeader className="w-full h-[200px] p-0 m-0">
                <img className="rounded-lg" src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2022/11/introduction-learnpress-lms-plugin-2-666x372.jpg" alt="" />
            </CardHeader>
            <CardTitle>
                <h2 className="mt-4 text-lg md:text-xl text-start ml-3">Education Autumn Tour</h2>
            </CardTitle>
            <CardTitle>
                <h4 className="mt-4 text-xs md:text-sm text-start ml-3">Keny White</h4>
            </CardTitle>
            <CardContent className="p-0">
                <p className="px-3 mt-3 text-sm text-start leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit....</p>
            </CardContent>
            <CardFooter className="px-3 pt-3 pb-3">
                <ReaderIcon className="h-4 w-4 text-gray-700" />
                <span className="ml-3 text-sm text-gray-700">0 Lessons</span>
            </CardFooter>
            <CardFooter className="px-3 mt-2">
                <span className="text-xl text-blue-600 font-semibold">$30.00</span>
            </CardFooter>
            <CardFooter href="/" className="px-3 mt-2">
                <a href="/" className="flex items-center justify-center w-full gap-1 font-semibold text-sm bg-blue-500 text-white p-2 rounded-lg"><BsFillPlayFill className="text-2xl" /> Start Learning</a>
            </CardFooter>
        </Card>
    )
}

export default CardForm