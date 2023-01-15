import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductListing from "../Routes/ProductListing";
import ShoppingCart from "../Routes/ShoppingCart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
};

export default AllRoutes;
