import React from "react";
import { Route, Link } from "react-router-dom";
import "./styles.css";

function Product() {
  const proStyle = {
    color: "Black"
  };
  return (
    <div>
      <ul className="prodList">
        <li>
          <Link to="/shop/product/mobiles">Mobiles</Link>
        </li>
        <li>
          <Link to="/shop/product/watches">Watches</Link>
        </li>
        <li>
          <Link to="/shop/product/books">Books</Link>
        </li>
      </ul>
    </div>
  );
}

export default Product;
