// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import CardForm from './CardCourses';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';


const SlideCourses = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-5'>
                <h2 className='font-bold text-2xl md:text-4xl'><span className='text-blue-600'>Popular</span> Courses</h2>
                <Link className='mt-2 md:mt-0 font-medium text-xs md:text-sm flex items-center gap-2 hover:text-blue-500' to="/courses">See More<ArrowRightIcon /></Link>
            </div>
            <div className="relative">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1
                        },
                        1000: {
                            slidesPerView: 2
                        },
                        1300: {
                            slidesPerView: 3
                        }
                    }}
                    navigation={{
                        prevEl: '.prev-swiper',
                        nextEl: '.next-swiper',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination-course',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                    <SwiperSlide className='w-fit'>
                        <CardForm />
                    </SwiperSlide>
                </Swiper>
                <button className="prev-swiper">
                    <ArrowLeftIcon width={15} height={15} cursor={"pointer"} />
                </button>
                <button className="next-swiper">
                    <ArrowRightIcon width={15} height={15} cursor={"pointer"} />
                </button>
                <div className="custom-pagination-container-course">
                    <div className="custom-pagination-course"></div>
                </div>
            </div>
        </>
    );
};

export default SlideCourses;
