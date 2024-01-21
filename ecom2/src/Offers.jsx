import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import './Offers.css';
import { GiFireSpellCast } from "react-icons/gi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Offers = ({HandleClick,Liked, saves}) => {
    const [promotion, setPromotion] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setPromotion(json));
    }, []);

    return (
        <>
            <div className="ads">
                <div className="one">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                  
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {promotion.map((item) => (
                            <SwiperSlide key={item.id} className='swip'>
                                <img src={item.image} alt={item.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="two">
                    <h1 className='animated-text'><GiFireSpellCast/> Premium Discount Showcase -70%</h1>
                    <h2>🌟 Limited-Time Offer: Save Big with a 70% Discount! 🌟</h2>
                    <p>💸 "Unbeatable Deals Await at Oubouisk! Explore -70% promotions now!"</p>
                    <p>🎁 "Gift Joy with Oubouisk: -70% off, perfect for every occasion."</p>

                    <p>🚀 "Limited Time, Maximum Savings! Shop Oubouisk for quality, style, and more.</p>
                    <p>💎 "Discover Excellence at Oubouisk – Elevate Your Lifestyle, Save Big!</p>
                    <p>🌟 "Oubouisk: Your Gateway to Quality, Style, and Irresistible Offers."</p>
                    <p>🛍️ "Shop Smart, Shop Stylish – Oubouisk's -70% promotion awaits you!"</p>
                    <p>🎉 "This Season, Treat Yourself at Oubouisk – Where Style Meets Savings!"</p>
                    <p>⏳ "Hurry, Don't Miss Out! Limited-time offers at Oubouisk, your fashion destination."</p>
                    <h3>🛒 Shop Now and Embrace the Extraordinary!</h3>
                </div>
            </div>
            <div className='promotion'>
                {promotion.map((item) => (
                    item.price <= 50 && (
                        <Item id={item.id} price={item.price} image={item.image} title={item.title} category={item.category} HandleClick={HandleClick} Liked={Liked} saves={saves}/>
                    )
                ))}
            </div>
        </>
    );
};
