import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./Components/Cart";
import Clothing from "./Components/Clothing";
import Apple from "./Components/Apple";
import Samsung from "./Components/Samsung";
import Electronics from "./Components/Electronics";
import Sneakers from "./Components/Sneakers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/google" element={<Samsung />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
