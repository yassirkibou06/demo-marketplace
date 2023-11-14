import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { ClockIcon, Crosshair2Icon } from "@radix-ui/react-icons"


const CardForm = () => {
    return (
        <Card className="bg-gray-100">
            <div className="px-2 py-1 rounded-md bg-green-400 absolute left-2 top-2">
                <span className=" text-white text-sm">30 September</span>
            </div>
            <CardHeader className="w-full h-[200px] p-0 m-0">
                <img className="rounded-lg" src="/assets/courses-14-666x372.png" alt="" />
            </CardHeader>
            <CardTitle>
                <h2 className="mt-4 text-lg md:text-xl text-start ml-3">Education Autumn Tour</h2>
            </CardTitle>
            <CardContent className="p-0">
                <p className="px-3 mt-3 text-sm text-start leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit....</p>
            </CardContent>
            <CardFooter className="px-3 pt-3 pb-3">
                <ClockIcon className="h-4 w-4 text-gray-700" />
                <span className="ml-3 text-sm text-gray-700">8:00 am - 5:00 pm</span>
            </CardFooter>
            <CardFooter className="px-3">
                <Crosshair2Icon className="h-4 w-4 text-gray-700" />
                <span className="ml-3 text-sm text-gray-700">8:00 am - 5:00 pm</span>
            </CardFooter>
        </Card>
    )
}

export default CardForm