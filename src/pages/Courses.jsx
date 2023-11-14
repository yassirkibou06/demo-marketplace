import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Course from '../components/courses/Course';
import Filter from '../components/courses/Filter';

const Courses = () => {
    return (
        <div>
            <div className='bg-[#e1e9fd] px-10 py-5 flex items-center space-x-3 mt-5'>
                <Link to='/' className='text-sm md:text-sm flex items-center hover:text-blue-500'>Home<MdKeyboardArrowRight className='text-base ml-2 text-gray-400 mt-1' /></Link>
                <h3 className='text-sm md:text-sm'>Courses</h3>
            </div>
            <div className="px-10 grid grid-cols-Courses gap-5">
                <div className="">
                    <h2 className='font-bold text-2xl md:text-4xl mt-10'>Courses</h2>
                    <Course />
                </div>
                <div className="">
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default Courses