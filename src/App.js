import React, { useState, useEffect } from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
} from "react-router-dom";
import Home from "./Home";
import Films from "./films/Films";
import About from "./about/About";
import bgVideo from "./space.mp4";
import backToTop from "./up-arrow.svg";
import Footer from "./footer/Footer";
import Grogu from "./grogu/Grogu";

export default function App() {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

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
               <NavLink to="/">Home</NavLink>
               <NavLink to="/Films">Films</NavLink>
               <NavLink to="/About">About</NavLink>
            </nav>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Films" element={<Films />} />
               <Route path="/About" element={<About />} />
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
