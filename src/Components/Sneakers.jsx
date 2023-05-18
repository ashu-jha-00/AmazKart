import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://m.media-amazon.com/images/I/51UDX+yrWXS._AC_UL480_FMwebp_QL65_.jpg";
const img2 =
  "https://m.media-amazon.com/images/I/51+93P+26xL._AC_UL480_FMwebp_QL65_.jpg";
const img3 =
  "https://m.media-amazon.com/images/I/51FvhPa2dhL._AC_UL480_FMwebp_QL65_.jpg";
const img4 =
  "https://m.media-amazon.com/images/I/71JHSVj6S7S._AC_UL480_FMwebp_QL65_.jpg";
const img5 =
  "https://m.media-amazon.com/images/I/71IP0XgHoRL._AC_UL480_FMwebp_QL65_.jpg";
const Sneakers = () => {
  const productList = [
    {
      name: "Nike Air",
      price: 85000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjfdfdfv",
    },
    {
      name: "Air Jordans",
      price: 95000,
      imgSrc: img2,
      id: "asdjsdbhjabhsjdrfdfv",
    },
    {
      name: "Nike Jordans",
      price: 95000,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfedfv",
    },
    {
      name: "Adidas Originals",
      price: 120000,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabehsjdfdfv",
    },
    {
      name: "Nike Spider-Man",
      price: 99999,
      imgSrc: img5,
      id: "sdjfwlaajdbhjabhsjdfdfv",
    },
    {
      name: "Nike Air",
      price: 85000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjfdfdfv",
    },
    {
      name: "Air Jordans",
      price: 95000,
      imgSrc: img2,
      id: "asdjsdbhjabhsjdrfdfv",
    },
    {
      name: "Nike Jordans",
      price: 95000,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfedfv",
    },
    {
      name: "Adidas Originals",
      price: 120000,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabehsjdfdfv",
    },
    {
      name: "Nike Spider-Man",
      price: 99999,
      imgSrc: img5,
      id: "sdjfwlaajdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
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
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Sneakers;
