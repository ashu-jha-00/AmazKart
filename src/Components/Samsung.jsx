import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70";
const img2 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70";
const img3 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70";
const img5 =
  "https://rukminim1.flixcart.com/image/612/612/l5ld8y80/headphone/e/8/o/ga03201-google-original-imagg8d7bhxjduze.jpeg?q=70";
const img4 = "https://m.media-amazon.com/images/I/61VVeNXaw4L._SX679_.jpg";
const img6 =
  "https://m.media-amazon.com/images/I/41X2rqy8WEL._AC_UY327_FMwebp_QL65_.jpg";
const Samsung = () => {
  const productList = [
    {
      name: "Google Pixel 7a (Sea, 128 GB)",
      price: 43999,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Google Pixel 7a (Charcoal, 128 GB)",
      price: 44000,
      imgSrc: img2,
      id: "asdjsdbhjabhsjdfdfv",
    },
    {
      name: "Google Pixel 7a (Sea, 256 GB)",
      price: 53999,
      imgSrc: img1,
      id: "asdhajsdjabhsjdfdfv",
    },
    {
      name: "Google Pixel 7a (Charcoal, 256 GB)",
      price: 44000,
      imgSrc: img2,
      id: "asdjsdbhjasjdfdfv",
    },
    {
      name: "Google Pixel 7 Pro (Snow, 128 GB)",
      price: 80999,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfdfv",
    },
    {
      name: "Google Pixel 7 Pro (Snow, 256 GB)",
      price: 99999,
      imgSrc: img3,
      id: "sdjfdlaajdbhjabhsjdfdfv",
    },
    {
      name: "Google Pixel 7 Pro (Snow, 512 GB)",
      price: 119099,
      imgSrc: img3,
      id: "sdjfdlaajdbhjabhsjdfdfv",
    },
    {
      name: "Pixel Buds Pro",
      price: 19990,
      imgSrc: img5,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Pixel Watch",
      price: 49972,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfffv",
    },
    {
      name: "Pixel Watch",
      price: 49972,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabffhsjdfdfffv",
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

export default Samsung;
