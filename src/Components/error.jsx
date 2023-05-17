import React from "react";
// import "../styles/home.scss";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://m.media-amazon.com/images/I/31ilq3hPhEL._SY445_SX342_QL70_FMwebp_.jpg";

const img2 =
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481";

const Home = () => {
  const productList = [
    {
      name: "MacBook Air",
      price: 100000,
      imgSrc: img1,
      id: "hbahsdbjf",
    },
    {
      name: "MacBook Pro",
      price: 120000,
      imgSrc: img2,
      id: "hbahsdasdjf",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    toast.success("Added to Cart");
    dispatch({ type: "addToCart", payload: options });
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>Rs.{price}</h4>
    <button onClick={() => handler({ name, price, id, qauntity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
