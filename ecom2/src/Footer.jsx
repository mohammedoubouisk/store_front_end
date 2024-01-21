import React from 'react'
import './Footer.css'
import { IoMdSend } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="grp1">
                <div className="once">
                    <h1>OUBOUISK</h1>
                    <ul>
                        <Link to='/about' className='li'><li>About Oubouisk</li></Link>
                        <Link className='li'><li>Career</li></Link>
                        <Link className='li'><li>Press</li></Link>
                        <Link className='li'><li>Customer Care</li></Link>
                        <Link className='li'><li>Services</li></Link>
                    </ul>
                </div>
                <div className="twoce">
                    <h5 style={{ 'fontSize': "15px" }}>Get the frehest OUBOUISK news</h5>
                    <div className="ipt">
                        <input type="text" placeholder='your email here...' />
                        <button>Subscribe &nbsp;<IoMdSend /></button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="info">
                <p>Terms & Conditions</p>
                <p>Privacy</p>
                <p>CA Transparency in Supply Act</p>
            </div>
            <p className='copy'>© 2024 (copyright) by oubouisk mohamed</p>
        </div>
    )
}
