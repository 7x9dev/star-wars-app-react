import React from "react";
import "./App.css";
import Character from "./Character";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
   return (
      <div className="App">
         <div className="header">
            <h1>Star warS</h1>
            <h2>characters</h2>
         </div>
         <Search />
         <Character />
         <Footer />
      </div>
   );
}