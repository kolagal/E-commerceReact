import React from "react";
import { Route, Link } from "react-router-dom";
import "./styles.css";

function Shop() {
  return (
    <div>
      <h1>
        <Link to="/shop/product">Product</Link>
      </h1>
    </div>
  );
}

export default Shop;
