// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import CardForm from './CardEvent';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';


const SlideEvent = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-2'>
                <h2 className='font-bold text-2xl md:text-4xl'><span className='text-blue-600'>Upcoming</span> Events</h2>
                <a className='mt-2 md:mt-0 font-medium text-xs md:text-sm flex items-center gap-2 hover:text-blue-500' href="/">See More<ArrowRightIcon /></a>
            </div>
            <p className="text-xs md:text-sm mb-8">Upcoming Education Events to feed your brain.</p>
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
                        el: '.custom-pagination',
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
                <div className="custom-pagination-container">
                    <div className="custom-pagination"></div>
                </div>
            </div >
        </>
    );
};

export default SlideEvent;
