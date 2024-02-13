import React from "react";
import dataStore from "../../data/dataShop";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";


const Products = () => {
   const selectedCategory = useSelector(getSelectedCategory);

   return (
      <div className="product-list">
         {dataStore
            .filter((item) => {
               if (selectedCategory === "All") return true;
               return selectedCategory === item.category;
            })
            .map((item) => (
               <Product key={item.id} item={item} />
            ))}
      </div>
   );
};

export default Products;
