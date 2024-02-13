import React, { useState, useEffect } from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
} from "react-router-dom";
import Home from "./Home";
import Films from "./Components/Films/Films";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import { getTotalQuantity } from "./redux/cartSlice";
import Footer from "./Components/Footer/Footer";
import Grogu from "./Components/Grogu/Grogu";
import bgVideo from "./space.mp4";
import backToTop from "./up-arrow.svg";
import cartImage from "./cart.svg";
import { useSelector } from "react-redux";

export default function App() {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   const totalQuantity = useSelector(getTotalQuantity);

   const [navColor, setNavColor] = useState(true);
   const [showScrollButton, setShowScrollButton] = useState(false);

   const changeNavColor = () => {
      if (window.scrollY <= 0) {
         setNavColor(true);
      } else {
         setNavColor(false);
      }
   };

   window.addEventListener("scroll", changeNavColor, true);

   const handleScroll = () => {
      if (window.scrollY > 150) {
         setShowScrollButton(true);
      } else {
         setShowScrollButton(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className="App">
         <Router>
            <nav className={navColor ? "nav" : "navbarScrolled"}>
               <div className="nav-links">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/Films">Films</NavLink>
                  <NavLink to="/About">About</NavLink>
                  <NavLink to="/Shop">Shop</NavLink>
               </div>
               <NavLink to="/Cart">
                  <div className="cart-icon-container">
                     <img
                        className="shop-cart"
                        src={cartImage}
                        alt="shopping cart"
                     />
                     <p className="cart-item-count">({totalQuantity})</p>
                  </div>
               </NavLink>
            </nav>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Films" element={<Films />} />
               <Route path="/About" element={<About />} />
               <Route path="/Shop" element={<Shop />} />
               <Route path="/Cart" element={<Cart />} />
            </Routes>{" "}
         </Router>
         <Grogu />
         {showScrollButton && (
            <button onClick={scrollToTop} className="back-to-top-button">
               <img src={backToTop} alt="up" />
            </button>
         )}
         <Footer />
         <video autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
         </video>
      </div>
   );
}
