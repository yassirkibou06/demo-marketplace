// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import CardForm from './CardFeedback';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';


const SlideFeedback = () => {
    return (
        <>
            <div className="relative">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: '.prev-swiper',
                        nextEl: '.next-swiper',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination-feedback',
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
                </Swiper>
                <button className="prev-swiper">
                    <ArrowLeftIcon width={15} height={15} cursor={"pointer"} />
                </button>
                <button className="next-swiper">
                    <ArrowRightIcon width={15} height={15} cursor={"pointer"} />
                </button>
                <div className="custom-pagination-container-course">
                    <div className="custom-pagination-feedback"></div>
                </div>
            </div>
        </>
    );
};

export default SlideFeedback;
