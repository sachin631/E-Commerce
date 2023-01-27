import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./Navbar/Home";
import Contact from "./Navbar/Contact";
import About from "./Navbar/About";
import Cart from "./Navbar/Cart";
import Product from "./Navbar/Product";
import SingleProduct from "./Navbar/SingleProduct";
import Error from "./Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Home />{" "}
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
