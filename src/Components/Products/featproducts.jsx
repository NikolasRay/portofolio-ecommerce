import "./featproducts.css";
import React, { useState, useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCurrencyEuro } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
const Featproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let datajs = new Array();
    const api = "https://dummyjson.com/products";
    const result = await fetch(api);
    const getResult = await result.json();
    await getResult.products.forEach((product) => datajs.push(product));
    setData(datajs);
  }

  return (
    <section className="products__container">
      <h2>Featured Products</h2>
      <p>Latest Products</p>
      <div className="card__list">
        {data.map((item) => (
          <div key={item.id} className="product__container">
            <img src={item.images[0]} alt="" />
            <div className="product__description">
              <span>{item.brand}</span>
              <h5>{item.title}</h5>
              <h3>
                {item.rating} / 5 <AiTwotoneStar className="symbol__star" />
              </h3>
              <h4>
                <BsCurrencyEuro className="symbol__euro" /> {item.price}
              </h4>
            </div>
            <a href="#" className="button__container">
              <BsFillCartPlusFill className="symbol__cart" />
              <i className="cart__button"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featproducts;
