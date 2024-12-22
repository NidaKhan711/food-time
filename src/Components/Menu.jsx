import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Food, burger, sandi } from '../assets/Data.js';
import Del from '../assets/del.png';
import Add from '../assets/add.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Style/Menu.scss';
import { Pagination, Navigation } from 'swiper/modules';
import {CartContext} from '../Context/ContProvide.jsx'

const Menu = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const {cartItems,addToCart, removeFromCart }=useContext(CartContext)
    
    const categories = [
        { title: "Pizza", items: Food },
        { title: "Burger", items: burger },
        { title: "Sandwich", items: sandi },
    ];

    return (
        <>
            {categories.map((category) => (
                <div className="pizza" key={category.title}>
                    <h1>{category.title}</h1>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{ type: 'fraction' }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {category.items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="mains">
                                    <img src={item.Image} alt={`${category.category} ${item.id}`} />
                                    <div className="btc">
                                        <img onClick={()=>addToCart(item.id)} src={Add} className="del" alt="Add" />
                                        <p className="para">{cartItems[item.id]||0}</p>
                                        <img onClick={()=>removeFromCart(item.id)}  src={Del} alt="Remove" />
                                    </div>
                                    <h2>{item.name}</h2>
                                    <p>{item.discription}</p>
                                    <p className="price">Price: ${item.price}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            ))}
        </>
    );
};

export default Menu;
