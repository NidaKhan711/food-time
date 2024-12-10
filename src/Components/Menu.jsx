import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Food } from '../assets/Data.js';
import Del from '../assets/del.png'
import Add from '../assets/add.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Style/Menu.scss';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Menu = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>


            <div className="pizza">
                <h1>Pizza</h1>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {Food.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="mains">
                                <img src={item.Image} alt={`Food ${item.id}`} />
                                <div className="btc">
                                    <img src={Add} className='del' alt="button" />
                                    <p className='para'>0</p>
                                    <img src={Del} alt="button" />
                                </div>
                                <p>{item.discription}</p>

                                <p className="price">Price:${item.price}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper >
            </div>
        </>
    );
};

export default Menu;
