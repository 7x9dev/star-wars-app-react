import React from "react";
import { useDispatch } from "react-redux";
import dataShop from "../../data/dataShop";
import { removeItemFromCart } from "../../redux/cartSlice";
import deleteIcon from "./delete-icon.svg";

const CartItem = ({ cartItem }) => {
   const products = dataShop.find((product) => product.id === cartItem.itemId);
   const dispatch = useDispatch();

   return (
      <div className="cart-item">
         <span
            className="remove-btn"
            onClick={() =>
               dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
            }
         >
            <img
               className="remove-item-icon"
               src={deleteIcon}
               alt="remove product"
            />
         </span>

         <div className="item-img">
            <img
               className="cart-item-img"
               src={products.img}
               alt={products.name}
            />
         </div>

         <div className="item-description">
            <p>{products.name}</p>
         </div>

         <div className="item-price">
            <p>{products.price}</p>
         </div>

         <div className="item-quantity">
            <p>{cartItem.quantity}</p>
         </div>

         <div className="item-total-price">
            <p>${(products.price * cartItem.quantity).toFixed(2)}</p>
         </div>
      </div>
   );
};

export default CartItem;
