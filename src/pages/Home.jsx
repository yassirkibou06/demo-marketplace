import React from 'react';
import { motion } from 'framer-motion';
import SlideEvent from '../components/slideEvent/SlideEvent'
import SlideCourses from '../components/slideCourses/SlideCourses';
import SlideFeedback from '../components/slideFeedback/SlideFeedback';
import CategoriesGrid from '../components/categories/CategoriesGrid';
import ExpectGrid from '../components/expect/ExpectGrid';
import Hero from '../components/Hero';
import AdsOnlineLearn from '../components/AdsOnlineLearn';
import InstructorsSect from '../components/InstructorsSect';
import Footer from '../components/Footer';

const Home = () => {
    const companys = [
        {
            id: 1,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-6-150x60.png",
        },
        {
            id: 2,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-5-150x60.png",
        },
        {
            id: 3,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-4-150x60.png",
        },
        {
            id: 4,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-3.png",
        },
        {
            id: 5,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-2.png",
        },
        {
            id: 6,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-1.png",
        },
        {
            id: 7,
            img: "https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/customer-logo-6.png"
        }
    ]
    return (
        <>
            <motion.div>
                {/**container */}
                <motion.div className="px-16">
                    <Hero />
                    <div className='mt-24'>
                        <p className='font-semibold text-base lg:text-lg text-center'>MORE THAN 1,300 CUSTOMERS TRUST EDUMA</p>
                        <div className='grid grid-cols-3 gap-2 lg:flex mt-5'>
                            {companys.map(company => (
                                <img src={company.img} alt="n" />
                            ))}
                        </div>
                    </div>
                    <div className="mt-32 mb-24">
                        <SlideCourses />
                    </div>
                    <div className="mt-32 mb-24">
                        <CategoriesGrid />
                    </div>
                </motion.div>
                <div className="mt-32 mb-24">
                    <ExpectGrid />
                </div>
                {/**container */}
                <div className="mt-32 mb-36 px-16">
                    <SlideFeedback />
                </div>
                <AdsOnlineLearn />
                <div className="mt-32 px-16 mb-36">
                    <SlideEvent />
                </div>
                <InstructorsSect />
                <Footer />
            </motion.div>
        </>
    )
}

export default Home