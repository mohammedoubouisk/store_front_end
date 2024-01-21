import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';

import bijou from './images/bijou.png'
import menc from './images/menc.png'
import womenc from './images/womenc.png'
import electro from './images/electro.png'

import bak from './images/bak.png'
export const Home = () => {
    return (
        < >
            <div className='top_banner'>
                <div className="container">
                    <div className="detail">
                        <h2>Step into the future of style and technology at the Best Clothes, Electronics, and Jewelry Store of 2023</h2>
                        <Link to='/product' className='link'>Shop now <span className='flech'> <BsArrowRight /></span></Link>
                    </div>
                    <div className='img_box'>
                        <img src='https://img.freepik.com/photos-gratuite/t-shirt-bleu_125540-727.jpg?w=996&t=st=1704849398~exp=1704849998~hmac=3008e950fe2b5b2f7cafb058a9f0ff067b3617451374af460341170737c60ad4' alt="" />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box">
                            <img src={menc} alt="" />
                        </div>
                        <div className="detail">
                            <p>4 products</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src={womenc} alt="" />
                        </div>
                        <div className="detail">
                            <p>6 products</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src={bijou} alt="" />
                        </div>
                        <div className="detail">
                            <p>4 products</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src={electro} alt="" />
                        </div>
                        <div className="detail">
                            <p>6 products</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='about'>
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Order above $1000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaureny</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discout</h3>
                            <p>Oh every Order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="box"></div>
                </div>
            </div>
        </>
    )
}
