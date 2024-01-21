import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className="modal">
                <form className="form">
                    <div className="payment">
                       <h1>contact with us from here</h1>
                    </div>
                    <div className="separator">
                        <hr className="line" />
                        <p>fill all this fields</p>
                        <hr className="line" />
                    </div>
                    <div className="credit-card-info--form">
                        <div className="input_container">
                            <label htmlFor="password_field" className="input_label">
                                full name
                            </label>
                            <input
                                id="password_field"
                                className="input_field"
                                type="text"
                                name="input-name"
                                title="Inpit title"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="input_container">
                            <label htmlFor="password_field" className="input_label">
                                email
                            </label>
                            <input
                                id="password_field"
                                className="input_field"
                                type="email"
                                name="input-name"
                                title="Inpit title"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="input_container">
                            <label htmlFor="password_field" className="input_label">
                                subject
                            </label>
                            <input
                                id="password_field"
                                className="input_field"
                                type="text"
                                name="input-name"
                                title="Inpit title"
                                placeholder="enter your subject"
                            />
                        </div>
                        <div className="input_container">
                            <label htmlFor="password_field" className="input_label">
                                message
                            </label>
                            <textarea className="input_field" id="" cols="30" rows="10" placeholder="message..."></textarea>
                        </div>
                    </div>
                    <button className="purchase--btn">send</button>
                </form>
            </div>

        </div>
    )
}
