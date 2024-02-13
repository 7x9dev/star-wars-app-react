import React, { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Product = ({ item }) => {
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();

   return (
      <div className="product-block">
         <img className="product-img" src={item.img} alt={item.name} />
         <div className="product-info">
            <h6>{item.name}</h6>
            <h5>${item.price}</h5>
         </div>
         <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
         <button
            onClick={() => {
               dispatch(addItemToCart({ item, quantity }));
            }}
            className="button-main"
         >
            Add to cart
         </button>
      </div>
   );
};

export default Product;
