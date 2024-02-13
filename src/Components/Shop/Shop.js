import React from "react";
import Products from "./Products";
import "./Shop.css";
import AllCategories from "./Filter/AllCategories";

export default function Shop() {
   return (
      <div className="page-wrapper _container">
         <div className="header">
            <h3>Jawa Junkyard</h3>
            <p className="subtitle">
               Through the stars, journey you shall: Star Wars treasures, find
               here!
            </p>
         </div>
         <div className="shop-block">
            <div className="sidebar">
               <AllCategories />
            </div>
            <div className="product-container">
               <Products />
            </div>
         </div>
      </div>
   );
}
