import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://m.media-amazon.com/images/I/71mtw+e95QL._AC_UL480_FMwebp_QL65_.jpg";
const img2 =
  "https://m.media-amazon.com/images/I/61go-GPfLXL._AC_UL480_FMwebp_QL65_.jpg";
const img3 =
  "https://m.media-amazon.com/images/I/71yM0xUAetL._AC_UL480_FMwebp_QL65_.jpg";
const img4 =
  "https://m.media-amazon.com/images/I/718US5SiUpL._AC_UL480_FMwebp_QL65_.jpg";
const img5 =
  "https://m.media-amazon.com/images/I/71fjO2Z-NZL._AC_UL480_FMwebp_QL65_.jpg";
const img6 = "https://m.media-amazon.com/images/I/714k6aWQHML._AC_AA180_.jpg";
const img7 =
  "https://m.media-amazon.com/images/I/61irHgsl-vL._AC_UL480_FMwebp_QL65_.jpg";
const img8 = "https://m.media-amazon.com/images/I/61XFeJTj5iL._UX679_.jpg";
const img9 = "https://m.media-amazon.com/images/I/61xtLDtkjeL._AC_AA220_.jpg";
const img10 =
  "https://m.media-amazon.com/images/I/411l3u9emdL._AC._SR180,230.jpg";

const Clothing = () => {
  const productList = [
    {
      // name: "MacBook Air",
      price: 850,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      // name: "MacBook Pro",
      price: 1950,
      imgSrc: img2,
      id: "asdjsdbhjabhsjdfdfv",
    },
    {
      // name: "MacBook Air M2",
      price: 950,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfdfv",
    },
    {
      // name: "MacBook Pro M1",
      price: 1200,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      // name: "Iphone 13 128",
      price: 999,
      imgSrc: img5,
      id: "sdjfdlaajdbhjabhsjdfdfv",
    },
    {
      // name: "MacBook Air",
      price: 850,
      imgSrc: img6,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      // name: "MacBook Pro",
      price: 5000,
      imgSrc: img7,
      id: "asdjsdbhjabhsjdfdfv",
    },
    {
      // name: "MacBook Air M2",
      price: 950,
      imgSrc: img8,
      id: "asdhsdbjabhsjdfdfv",
    },
    {
      // name: "MacBook Pro M1",
      price: 1200,
      imgSrc: img9,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      // name: "Iphone 13 128",
      price: 999,
      imgSrc: img10,
      id: "sdjfdlaajdbhjabhsjdfdfv",
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

export default Clothing;
