// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Home2 from "./Home2";
import Header from "../Header/Header";

const Routing = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </>
  );
};

export default Routing;
