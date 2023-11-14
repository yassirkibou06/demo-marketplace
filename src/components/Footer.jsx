import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    const categories = [
        { title: "Design", href: "/design" },
        { title: "Marketing & Business", href: "/marketing-business" },
        { title: "Writing", href: "/writing" },
        { title: "Fashion", href: "/fashion" },
        { title: "Music & Audio", href: "/music-audio" },
        { title: "Craft", href: "/craft", span: "SALE", },
        { title: "Photography & Video", href: "/photography-video" },
        { title: "Web & App design", href: "/web-app-design" },
    ];
    // list ==>
    const Lists = [
        { title: "New courses", href: "/new-courses" },
        { title: "Top rated", href: "/top-rated" },
        { title: "Courses on sale", href: "/courses-on-sale" },
        { title: "Course bundles", href: "/course-bundles" },
        { title: "Blog", href: "/blog", span: "POPULAR" },
        { title: "Ebooks", href: "/ebooks", span: "NEW" },
        { title: "Events", href: "/events" },
    ];
    // Company ==>
    const Company = [
        { title: "About us", href: "/about-us" },
        { title: "Security", href: "/security" },
        { title: "Contact us", href: "/contact-us" },
        { title: "Careers", href: "/careers", span: "HIRING" },
        { title: "Become a Teacher", href: "/become-a-teacher" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Accessibility", href: "/accessibility" },
    ];
    // Feature ==>
    const Feature = [
        { title: "User Management", href: "/user-management" },
        { title: "Learn Management", href: "/learn-management" },
        { title: "Reporting", href: "/reporting" },
        { title: "Forums", href: "/forums" },
        { title: "Language", href: "/language" },
    ];


    return (
        <>
            <div className='footer'>
                <div className='mb-5 lg:mb-0'>
                    <div className='w-[190px] h-[40px] mb-7'>
                        <img className='w-full' src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2019/02/logo-footer.svg" alt="" />
                    </div>
                    <Button className="bg-white p-5 rounded-lg text-black border-2 border-gray-900 hover:text-white" >Contact Sale</Button>
                </div>
                <ul>
                    <h2 className='footer-h'>Categories</h2>
                    {categories.map(category => (
                        <li className='mb-4 pl-5 lg:pl-0'><Link className='text-gray-700 hover:text-blue-500 mr-4' to={"/"}>{category.title}</Link><span className={`${category.span === "SALE" ? "bg-[#ffdf9e] text-orange-400 font-semibold py-[2px] px-3 text-xs rounded-sm" : ""}`}>{category.span}</span></li>
                    ))}
                </ul>
                <ul>
                    <h2 className='footer-h'>Lists</h2>
                    {Lists.map(list => (
                        <li className='mb-4 pl-5 lg:pl-0'><Link className='text-gray-700 hover:text-blue-500 mr-4' to={"/"}>{list.title}</Link><span className={`font-semibold py-[2px] px-3 text-xs rounded-sm ${list.span === "POPULAR" ? "bg-[#d4f5e7] text-green-500" : list.span === "NEW" ? "bg-[#e1e9fd] text-blue-600" : ""}`}>{list.span}</span></li>
                    ))}
                </ul>
                <ul>
                    <h2 className='footer-h'>Company</h2>
                    {Company.map(item => (
                        <li className='mb-4 pl-5 lg:pl-0'><Link className='text-gray-700 hover:text-blue-500 mr-4' to={"/"}>{item.title}</Link><span className={`font-semibold py-[2px] px-3 text-xs rounded-sm ${item.span === "HIRING" ? "bg-[#ffdaf5] text-pink-500" : ""}`}>{item.span}</span></li>
                    ))}
                </ul>
                <ul>
                    <h2 className='footer-h'>Feature</h2>
                    {Feature.map(item => (
                        <li className='mb-4 pl-5 lg:pl-0'><Link className='text-gray-700 hover:text-blue-500 mr-4' to={"/"}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center px-16 py-5 bg-[#eff3f4]'>
                <p>@ 2023 Eduma. All rights reserved</p>
                <div className='flex items-center space-x-3 lg:space-x-5'>
                    <p>Connect with us</p>
                    <a href="https://web.facebook.com/?_rdc=1&_rdr"><FaFacebook className='text-2xl hover:text-blue-600' /></a>
                    <a href="https://www.youtube.com/"><FaYoutube className='text-2xl hover:text-blue-600' /></a>
                    <a href="https://www.instagram.com/?hl=en"><FaInstagram className='text-2xl hover:text-blue-600' /></a>
                    <a href="https://twitter.com/"><FaXTwitter className='text-2xl hover:text-blue-600' /></a>
                    <a href="https://www.linkedin.com/"><FaLinkedin className='text-2xl hover:text-blue-600' /></a>
                </div>
            </div>
        </>
    )
}

export default Footer