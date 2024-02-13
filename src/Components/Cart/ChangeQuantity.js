import React from "react";
import addQty from "./qty-plus.svg"
import removeQty from "./qty-minus.svg";

const ChangeQuantity = ({ quantity, setQuantity }) => {
   const addQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
   };

   const removeQuantity = () => {
      if (quantity <= 1) return;
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
   };

   return (
      <div className="quantity-block">
         <button onClick={removeQuantity} className="button-outline-secondary">
            <img className="qtyIcon" src={removeQty} alt="minus" />
         </button>
         <p>{quantity}</p>
         <button onClick={addQuantity} className="button-outline-secondary">
            <img className="qtyIcon" src={addQty} alt="plus" />
         </button>
      </div>
   );
};

export default ChangeQuantity;
