import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { FaQuoteLeft } from "react-icons/fa"


const CardFeedback = () => {
    return (
        <Card className="bg-[#e1e9fd] p-1 md:p-10">
            <div className="absolute left-2 md:left-16 top-4 md:top-10">
                <FaQuoteLeft className="w-5 h-5 md:w-10 md:h-10" />
            </div>
            <CardContent className="grid grid-cols-1 md:grid-cols-Feedback items-center gap-10">
                <CardDescription className="p-0 mt-5">
                    <p className="px-3 mt-3 text-sm md:text-xl text-black tracking-wider text-start leading-7">
                        LearnPress is a WordPress complete solution for creating a Learning Management System (LMS).
                        It can help me to create courses, lessons and quizzes and manage them as easy as I want.
                        I've learned a lot, and I highly recommend it. Thank you.
                    </p>
                </CardDescription>
                <CardHeader className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] ml-14 p-0 md:m-0">
                    <img className="rounded-full" src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/08/home-testimonial.jpg" alt="" />
                </CardHeader>
            </CardContent>
            <CardFooter href="/" className="px-3 mt-2">
                <span className="md:text-base text-sm">- Bennett Cu / Front-end Developer</span>
            </CardFooter>
        </Card>
    )
}

export default CardFeedback