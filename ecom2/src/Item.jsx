import React, { useState, useEffect } from 'react';
import "./Item.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Item = ({ id, image, title, category, price, HandleClick, Liked, saves }) => {
  const [heart, setheart] = useState(false);

  useEffect(() => {
    const jaim = saves.some(i => i.id === id);
    setheart(jaim);
  }, [saves, id]);

  return (
    <div className="products">
      <div className='icons'>
        {/* Link to the dynamic URL with the product id */}
        <Link to={`/${id}`}>
          <li><BiShowAlt /></li>
        </Link>
        <li className='heart' onClick={() => Liked(id, image, title, category, price)}>
          {heart ? <span style={{ color: "#fd384f" }}><FaHeart /></span> : <FaRegHeart />}
        </li>
        <li onClick={() => HandleClick(id, image, title, price)}><RiShoppingCartLine /></li>
      </div>
      <img src={image} alt="" />
      <hr />
      <div className="disc">
        <h3>{title}</h3>
        <h5>{category}</h5>
        <div className="pr">
          <p><s>{price + 10.1}$</s></p>
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
};
