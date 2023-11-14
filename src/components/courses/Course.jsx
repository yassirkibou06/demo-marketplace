import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import data from '../../data/data';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { ReaderIcon } from "@radix-ui/react-icons";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Course() {
    const [currentPage, setCurrentPage] = useState(0);


    const itemsPerPage = 12;

    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Calculate the range of items to display on the current page
    const startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    if (endIndex > data.length) {
        endIndex = data.length; // Ensure endIndex doesn't exceed the data length
    }

    const displayedItems = data.slice(startIndex, endIndex);
    const totalResults = data.length;

    return (
        <div className=" mt-10">
            <p className="text-[15px] text-gray-600">
                Showing {startIndex + 1} - {endIndex} of {totalResults} results
            </p>
            <div className='grid grid-cols-3 gap-5 mt-7'>
                {displayedItems.map((item) => (
                    // Render your data items here
                    <Card className="bg-gray-100 relative" key={item.id}>
                        <div className="px-2 py-0 pb-1 rounded-md bg-orange-400 absolute left-2 top-2">
                            <span className=" text-white text-xs mb--2">{item.ads}</span>
                        </div>
                        <CardHeader className="w-full h-[200px] p-0 m-0">
                            <img className="rounded-lg" src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2022/11/introduction-learnpress-lms-plugin-2-666x372.jpg" alt="" />
                        </CardHeader>
                        <CardTitle>
                            <h2 className="mt-4 text-lg md:text-xl text-start ml-3">{item.title}</h2>
                        </CardTitle>
                        <CardTitle>
                            <h4 className="mt-4 text-xs md:text-sm text-start ml-3">{item.name}</h4>
                        </CardTitle>
                        <CardContent className="p-0">
                            <p className="px-3 mt-3 text-sm text-start leading-6">{item.desc === null ? item.descTow : item.desc}</p>
                        </CardContent>
                        <CardFooter className="px-3 pt-3 pb-3">
                            <ReaderIcon className="h-4 w-4 text-gray-700" />
                            <span className="ml-3 text-sm text-gray-700">{item.lessons} Lessons</span>
                        </CardFooter>
                        <CardFooter className="px-3 mt-2">
                            <span className="text-xl text-blue-600 font-semibold">{item.price === "Free" ? "Free" : item.prix}</span>
                        </CardFooter>
                        <CardFooter href="/" className="px-3 mt-2">
                            <a href="/" className="flex items-center justify-center w-full gap-1 font-semibold text-sm bg-blue-500 text-white p-2 rounded-lg"><BsFillPlayFill className="text-2xl" /> Start Learning</a>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Render the pagination component */}
            <ReactPaginate
                previousLabel={<FiChevronLeft />}
                nextLabel={<FiChevronRight />}
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                subContainerClassName="pages pagination"
                activeClassName="active"
                pageClassName="page"
            />
        </div>
    );
}

export default Course;
