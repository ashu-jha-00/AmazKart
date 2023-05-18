import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to={"/"}>
        <h2>AmazKart</h2>
      </Link>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/google"}>Google Store</Link>
        <Link to={"/apple"}>Apple Store</Link>
        <Link to={"/electronics"}>Electronics</Link>
        <Link to={"/clothing"}>Clothing</Link>
        <Link to={"/sneakers"}>Sneakers</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
