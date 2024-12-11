import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useStore } from '../store';



export default function Services() {

    const servicesObj =  useStore((store) => store.servicesObj);
    const reviewObj = useStore((store) => store.reviewObj);

    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <div id='services' className="services-block flex flex-col">
            <div className="section-subtitle site-section">
                <h2 className="title">SERVICES WE OFFER</h2>
                <h3 className="subtitle">Exceptional level of service</h3>
            </div>
            <div className="services overflow-hidden bg-[#F6F6F6]">

                <div className="services-swapper-navigation">
                    <div className="rectangle" onClick={() => swiperRef.current?.slidePrev()}>
                        <FaChevronLeft />
                    </div>
                    <div className="rectangle" onClick={() => swiperRef.current?.slideNext()}>
                        <FaChevronRight />
                    </div>
                </div>

                <div className="services-tabs-block container" style={{ gridTemplateColumns: `repeat(${servicesObj.length},1fr)` }}>
                    {servicesObj.map((item, index) => (
                        <div key={item.pagination.id} className={`services-tabs-item ${activeTab === index ? 'services-tabs-item-active' : ''} `} onClick={() => handleTabClick(index)}>
                            <div className='rectangle'>
                                {item.pagination.icon}
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                <Swiper className="site-section"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    speed={600}
                    loop={false}
                    onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
                >
                    {servicesObj.map(item => (
                        <SwiperSlide className="services-item" key={item.id}>
                            <div className="services-left">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                                {item.subtext && <p>{item.subtext}</p>}
                            </div>
                            <div className="services-right">
                                <img className="w-full" src={item.img} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='flex flex-col gap-[50px]'>
                <div className="section-subtitle site-section">
                    <h2 className="title">Client Reviews</h2>
                    <h3 className="subtitle">OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</h3>
                </div>
                <div className='bg-[#196fc2]
                py-[70px]'>
                    <div className='container relative overflow-hidden' >
                        <button className='review-button-prev rectangle'>
                            <FaChevronLeft />
                        </button>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.review-button-next',
                                prevEl: '.review-button-prev',
                            }}
                            
                            modules={[Navigation]}
                        >
                            {reviewObj.map((item) => (
                                <SwiperSlide key={item.id} className='review-item px-[50px]' >
                                    <div className='rectangle'>
                                        <img src={item.logo} />
                                    </div>
                                    <p>{item.review}</p>
                                    <div className='review-author'>
                                        <p>{item.name}</p>
                                        <p>{item.proficiency}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className='review-button-next rectangle right-[10px]'>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
}