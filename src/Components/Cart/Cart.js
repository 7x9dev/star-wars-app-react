import React from "react";
import { useNavigate } from "react-router";
import "./Cart.css";
import emptyCart from "./empty-cart.webp";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
   const navigate = useNavigate();
   const navigateToShop = () => {
      navigate("/Shop");
   };

   const cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getTotalPrice).toFixed(2);

   return (
      <div className="page-wrapper _container">
         {cartItems.length > 0 ? (
            <div className="cart-block">
               <h3 className="header">Shopping cart</h3>
               <div className="shopping-cart">
                  <div className="cart-column-labels">
                     <div className="product-label">
                        <h6>Product</h6>
                     </div>
                     <div className="price-label">
                        <h6>Price</h6>
                     </div>
                     <div className="qty-label">
                        <h6>Qty</h6>
                     </div>
                     <div className="total-label">
                        <h6>Total</h6>
                     </div>
                  </div>

                  {cartItems.map((cartItem, index) => (
                     <CartItem key={index} cartItem={cartItem} />
                  ))}

                  <div className="cart-total-price">
                     <h5>Total:</h5>
                     <h5>${totalPrice}</h5>
                  </div>
               </div>
            </div>
         ) : (
            <div className="empty-cart-block">
               <img
                  className="empty-cart-img character-img"
                  src={emptyCart}
                  alt="empty shopping cart"
               />
               <h4>Empty, your shopping cart is. Hmm.</h4>
               <button onClick={navigateToShop} className="button-outline">
                  Start shopping
               </button>
            </div>
         )}
      </div>
   );
};

export default Cart;
