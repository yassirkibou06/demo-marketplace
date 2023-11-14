import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { ChevronDownIcon } from '@radix-ui/react-icons';


const SideBar = ({ location, isOpen, setIsOpen, categories, pages }) => {
    const [showCourses, setShowCourses] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [showBlog, setShowBlog] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AnimatePresence>
            <div onClick={() => setIsOpen(!isOpen)} className={`bg-black/50 fixed left-0 top-0 z-10 w-full h-full ${isOpen ? "visible" : "invisible"}`} ></div>
            {isOpen && (
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: isOpen ? 0 : -300 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-white overflow-y-scroll fixed z-20 left-0 top-0 w-[300px] h-[100vh] shadow-lg p-5"
                >
                    <IoClose onClick={toggleSidebar} className='absolute right-2 top-2 text-2xl' />
                    <ul className='flex flex-col space-y-5 mt-10'>
                        <li className={location.pathname === '/' ? 'Hover' : ''}>
                            <Link className="navLink" to="/">Home</Link>
                        </li>
                        <li className="flex items-center justify-between Hover">
                            <Link className="navLink" to="/courses">Courses</Link>
                            <ChevronDownIcon onClick={() => setShowCourses(!showCourses)} className='cursor-pointer w-5 h-5' />
                        </li>
                        {showCourses && (
                            <ul className='pl-2 flex flex-col space-y-3'>
                                {categories.map((item) =>
                                    <li>
                                        <Link to={item.href}>{item.title}</Link>
                                    </li>
                                )}
                            </ul>
                        )}
                        <li className="flex items-center justify-between Hover">
                            <Link className="navLink" to="/pages">Pages</Link>
                            <ChevronDownIcon onClick={() => setShowPages(!showPages)} className='cursor-pointer w-5 h-5' />
                        </li>
                        {showPages && (
                            <ul className='pl-2 flex flex-col space-y-3'>
                                {pages.map((item) =>
                                    <li>
                                        <Link to={item.href}>{item.title}</Link>
                                    </li>
                                )}
                            </ul>
                        )}
                        <li className={location.pathname === '/' ? 'Hover' : ''}>
                            <Link className="navLink" to="/events">Events</Link>
                        </li>
                        <li className="flex items-center justify-between Hover">
                            <Link className="navLink" to="/blog">Blog</Link>
                            <ChevronDownIcon onClick={() => setShowBlog(!showBlog)} className='cursor-pointer w-5 h-5' />
                        </li>
                        {showBlog && (
                            <ul className='pl-2 flex flex-col space-y-3'>
                                {pages.map((item) =>
                                    <li>
                                        <Link to={item.href}>{item.title}</Link>
                                    </li>
                                )}
                            </ul>
                        )}
                        <li className={location.pathname === '/' ? 'Hover' : ''}>
                            <Link className="navLink" to="/events">Become an Instructor</Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SideBar;
