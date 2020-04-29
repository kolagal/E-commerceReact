import React from "react";
import { Route, Link } from "react-router-dom";
import "./styles.css";

function Mobiles() {
  const proStyle = {
    color: "Black"
  };
  return (
    <div>
      <ul className="mobList">
        <li>
          <Link to="/product/mobiles/iphone">Iphone</Link>
        </li>
        <li>
          <Link to="/product/mobiles/samsung">Samsung</Link>
        </li>
        <li>
          <Link to="/product/mobiles/oneplus">OnePlus</Link>
        </li>
      </ul>
    </div>
  );
}

export default Mobiles;
