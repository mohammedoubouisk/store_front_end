import React, { useState } from 'react'
import './Nav.css'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { CiLogin } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'

import { useAuth0 } from "@auth0/auth0-react";
import { FaHeart } from "react-icons/fa";


import logo from './logo.png'

export const Nav = ({ counter, saves }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [menu, setmenu] = useState(false);

    const handlemenu = () => {
        setmenu(!menu)
    }

    return (
        <>
            <div className='free'>
                <div className="icon">
                    <FaTruckMoving />
                </div>
                <p> Free shipping when shopping upto $1000</p>
            </div>
            <div className="main_header">

                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="icon">
                        {
                            isAuthenticated && (
                                <>
                                    <div className="account">
                                        <div className="user_icon">
                                            <AiOutlineUser />
                                        </div>
                                        <p>hello, {user.name}</p>
                                    </div>
                                </>
                            )

                        }
                        <div className="second_icon">
                            {
                                Object.keys(saves).length === 0 ? (
                                    <Link to='/save' className='linkh'><FaHeart /></Link>
                                ) :
                                    <Link to='/save' className='linkh'><FaHeart style={{ color: "#fd384f" }} /></Link>
                            }
                            <Link to='/cart' className='link'><LiaShoppingBagSolid /> <span>{counter}</span></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='header'>
                <div className="container">
                    <div className="menu">
                        <input type="checkbox" id="checkbox" onClick={handlemenu} />
                        <label for="checkbox" class="toggle">
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
                        </label>
                    </div>
                    {
                        menu && (
                            <>
                            <div className="nav" style={{display:"block"}}>
                                <ul>
                                    <li><Link to='/' className='link'>Home</Link></li>
                                    <li><Link to='/product' className='link'>Product</Link></li>
                                    <li><Link to='/about' className='link'>About</Link></li>
                                    <li><Link to='/contact' className='link'>Contact</Link></li>
                                </ul>
                            </div>
                            </>
                            
                        )
                    }
                    <div className="auth">
                        {
                            isAuthenticated ?

                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                                :
                                <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
