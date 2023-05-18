import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/f/j/d/-original-imagfdequ9yzecg6.jpeg?q=70";
const img3 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70";
const img4 =
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481";
const img5 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70";
//i phone

const img6 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70";
const img7 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70";
const img8 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70";
const img9 =
  "https://rukminim1.flixcart.com/image/612/612/l5ld8y80/headphone/e/8/o/ga03201-google-original-imagg8d7bhxjduze.jpeg?q=70";
const img101 = "https://m.media-amazon.com/images/I/61VVeNXaw4L._SX679_.jpg";
const img10 =
  "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/l/o/a/mnwc3hn-a-laptop-apple-original-imagmfhegkrgcnhp.jpeg?q=70";
const Home = () => {
  const productList = [
    {
      name: "MacBook Air",
      price: 85000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "MacBook Pro",
      price: 195000,
      imgSrc: img2,
      id: "asdjsdbhjabhsjdfdfv",
    },
    {
      name: "Pixel 7 pro",
      price: 95000,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfdfv",
    },
    {
      name: "Pixel Watch",
      price: 49000,
      imgSrc: img101,
      id: "sdjfdfflaajsdbhjabhsjdfdfv",
    },
    {
      name: "MacBook Pro M1",
      price: 120000,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Iphone 13 128",
      price: 99999,
      imgSrc: img5,
      id: "sdjfdlaajdbhjabhsjdfdfv",
    },
    {
      name: "MacBook Pro M2",
      price: 295000,
      imgSrc: img10,
      id: "sdjfdlaasdbhjabhsjdfdfv",
    },
    {
      name: "Google",
      price: 94999,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhjdfdfv",
    },
    {
      name: "Pixel",
      price: 81999,
      imgSrc: img7,
      id: "sdjfdlaajsdbhjabhsjdffv",
    },
    {
      name: "MacBook Pro M2 MAX",
      price: 395000,
      imgSrc: img10,
      id: "sdjfdlaasdbhjabhsjdfdfv",
    },
    {
      name: "Pixel",
      price: 10000,
      imgSrc: img8,
      id: "sdjfdlaajsdbhjabhsjdfv",
    },
    {
      name: "Pixel Buds",
      price: 49999,
      imgSrc: img9,
      id: "sdjfdlaajsdbhjabhsjdfv",
    },
    {
      name: "Google",
      price: 100000,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhjdfdf",
    },
    {
      name: "Pixel 256",
      price: 101999,
      imgSrc: img7,
      id: "sdjfdlaajsdbhjabhsjdfv",
    },
    {
      name: "Pixel 7 Pro",
      price: 95000,
      imgSrc: img3,
      id: "asdhsdbjabhsjdfdfva",
    },
    {
      name: "MacBook Pro M1 MAX",
      price: 320000,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfvv",
    },
    {
      name: "Iphone 13 256",
      price: 89999,
      imgSrc: img5,
      id: "sdjfdlaajdbhjabhsjdfdfvbv",
    },
    {
      name: "MacBook Pro M2 512",
      price: 395000,
      imgSrc: img10,
      id: "sdjfdlaasdbhjabhsjdfdfvc",
    },
    {
      name: "Pixel",
      price: 149999,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhjdfdfssv",
    },
    {
      name: "Pixel 512",
      price: 149999,
      imgSrc: img7,
      id: "sdjfdlaajsdbhjabhsssjdffv",
    },
    {
      name: "MacBook Pro M2 MAX",
      price: 395000,
      imgSrc: img10,
      id: "sdjfdlaasdbhjabhsjdfdfv",
    },
    {
      name: "Pixel Pro",
      price: 20000,
      imgSrc: img8,
      id: "sdjfdlaajsdbhjabhsjdfv",
    },
    {
      name: "Pixel Buds",
      price: 39999,
      imgSrc: img9,
      id: "sdjfdlaajsdbhjabhsjdfv",
    },
    {
      name: "Pixel Pro",
      price: 106000,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhjdfdf",
    },
    {
      name: "Pixel 7Pro 512",
      price: 201999,
      imgSrc: img7,
      id: "sdjfdlaajsdbhdfjabhsjdfv",
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

export default Home;
