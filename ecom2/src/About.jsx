import React from 'react'
import './About.css'
import picture from './images/picture.jpg'

export const About = () => {
  return (
    <div>
      <div className="header-part">
      <h1>THE MUST STORE OF PRODUCTS</h1>

      <h5>our product number one in quality</h5>
 <div className="text">
 <p>
        Welcome to OUBOUISK, your one-stop destination for an unparalleled online shopping experience! We bring the mall to your fingertips, offering a vast array of products that cater to your every need.

        Discover the convenience of shopping from the comfort of your home with our user-friendly website and seamless navigation. Our virtual shelves are stocked with the latest trends in fashion, cutting-edge electronics, home essentials, and much more. From stylish apparel to innovative gadgets, we've curated a diverse collection to suit every taste and lifestyle.

        At OUBOUISK, we prioritize quality, ensuring that each product meets our stringent standards. Explore a world of options with our carefully selected range of brands, guaranteeing authenticity and durability. Our commitment to customer satisfaction is reflected in our hassle-free return policy, providing you with peace of mind as you shop with confidence.

        Stay in the loop with our regular promotions and exclusive deals. Sign up for our newsletter to receive updates on the latest arrivals, special discounts, and members-only offers. Shopping at OUBOUISK isn't just a transaction; it's an experience tailored to elevate your lifestyle.

        We understand the importance of security in online transactions. Rest assured, our website employs state-of-the-art encryption to safeguard your personal information, ensuring a safe and secure shopping environment.

        Join the growing community of satisfied customers who have made OUBOUISK their go-to destination for online shopping. Embrace the future of retail and indulge in a seamless, enjoyable shopping experience with us.

        Thank you for choosing OUBOUISK—where your satisfaction is our priority. Happy shopping!</p>
 </div>
      </div>

      <div className="df">
        <h1 className='titles-gros'>Our Team</h1>
        <hr className='ligne' />
      </div>

      <div className="card">
        <div className="cart">
          <img src="https://img.freepik.com/free-photo/portrait-hapy-young-smart-man-glasses-white-wall_231208-12206.jpg?size=626&ext=jpg" alt="" />
          <h4>KHALID</h4>
          <p><i>graphiste</i></p>
        </div>

        <div className="cart">
          <img src={picture} alt="" />
          <h4>MOHMAMAD</h4>
          <p><i>developper</i></p>

        </div>

        <div className="cart">
          <img src="https://img.freepik.com/free-photo/happy-woman-gray-polo-shirt-with-pink-pin-button_53876-102858.jpg?size=626&ext=jpg" alt="" />
          <h4>FARIHA</h4>
          <p><i>TESTER</i></p>

        </div>
      </div>


      <div className="df">
        <h1 className='titles-gros'>Client Says</h1>
        <hr className='ligne' />
      </div>
      <div className="card">
        <div className="cart" style={{ padding: "20px" }}>
          <img src="https://img.freepik.com/premium-vector/product-manager-woman-icon-flat-illustration-product-manager-woman-vector-icon-isolated-white-background_98396-40241.jpg?size=626&ext=jpg" alt="" />
          <h4>KATRINA</h4>

          <p>I am absolutely thrilled with my shopping experience at <i>OUBOUISK</i>. The website is so easy to navigate, and the range of products is impressive. I recently purchased a beautiful dress for a special occasion, and not only did it arrive on time, but the quality exceeded my expectations. The attention to detail and customer service make <i>OUBOUISK</i> my new favorite online shopping destination. I can't wait to shop here again!</p>
        </div>

        <div className="cart" style={{ padding: "20px" }}>
          <img src='https://img.freepik.com/premium-vector/icon-man-s-face-with-light-skin_238404-1006.jpg?size=626&ext=jpg' alt="" />
          <h4>SMITH</h4>

          <p>I've been a loyal customer of <i>OUBOUISK</i> for over a year now, and I can't recommend it enough. The variety of products is fantastic, and the prices are competitive. What really sets this store apart is their commitment to customer satisfaction. I had a minor issue with a purchase, and the support team went above and beyond to resolve it quickly and efficiently. It's refreshing to see a company that genuinely cares about its customers.</p>

        </div>

        <div className="cart" style={{ padding: "20px" }}>
          <img src="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?size=626&ext=jpg" alt="" />
          <h4>JOHN</h4>
          <p>Shopping at <i>OUBOUISK</i> is like entering a world of endless possibilities. The website is not only visually appealing but also intuitive, making it a pleasure to browse and shop. I recently redecorated my home with items from their home essentials collection, and I couldn't be happier with the result. The quality of the products is exceptional, and the delivery was prompt. [Your Store Name] has become my first choice for all my lifestyle needs.</p>

        </div>

      </div>
    </div>
  )
}
