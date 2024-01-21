import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import './HomeProduct.css';
import { AiOutlineRight } from 'react-icons/ai';
import promo1 from './images/promo1.jpg';
import promo2 from './images/promo2.jpg';
import { Timer } from './Timer';
import { Link } from 'react-router-dom';
import loading1 from './images/loading1.gif';

export const HomeProduct = ({ HandleClick, Liked ,saves}) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [filterp, setfilterP] = useState([]);

  const [loading, setloading] = useState(true);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProduct(json)
        setfilterP(json)
        setloading(false);
      })
  }, [])

  const filtre = () => {
    const filtered = product.filter((val) =>
      search.toLowerCase() === '' ? val : val.title.toLowerCase().includes(search)
    );
    setfilterP(filtered)

  };

  const filterProduct = (cat) => {
    const updateListe = product.filter((val) => val.category === cat);
    setfilterP(updateListe);
  }



  return (
    <>
      <div className="promo">
        <div className="one">
          <h2>
            <b>Time Rest Offer </b> <b className='tm'>{<Timer />}</b>
          </h2>
          <h1 className="prx">-$ 70%</h1>
          <h2>every $201.85 of bay</h2>
          <p>(max $ 49.48)</p>
          <Link to="/offers" className="link">
            <button>
              <img src={promo1} alt="" />
              <img src={promo2} alt="" />
              enjoy now<AiOutlineRight style={{ color: 'rgb(246, 23, 100)' }} />
            </button>
          </Link>
        </div>
        <div className="two">
          <img src="https://ae01.alicdn.com/kf/S096bfd26ac734555a1cb578c00bd78fbE.png_.webp" alt="" />
        </div>
      </div>
      <div className="search_box">
        <input type="tet" placeholder="search product ..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={filtre}>Search</button>
      </div>
      <div className="category">
        <p onClick={() => setfilterP(product)} >All Products</p>
        <p onClick={() => { filterProduct("men's clothing") }}>Men's clothing</p>
        <p onClick={() => { filterProduct("women's clothing") }}>Women's clothing</p>
        <p onClick={() => { filterProduct("jewelery") }}>Jewelery</p>
        <p onClick={() => { filterProduct("electronics") }}>Electronics</p>
      </div>
      <div className="all">
        {loading && <img src={loading1} className='loading' alt='photo' />
        }
        {
          Object.keys(filterp).length > 0 &&
          filterp.map((item) => (
            <div className="itmess">
              <Item id={item.id} price={item.price} image={item.image} title={item.title} category={item.category} HandleClick={HandleClick} Liked={Liked} saves={saves}/>
            </div>
          ))
          // <img src='https://fpdl.in/uploads/hand-drawn-no-data-illustration_23-2150696443.jpg'/>

        }
      </div>
    </>
  );
};
