import React from "react";
import "./App.css";
import Character from "./Character";
import Search from "./Search";

export default function App() {
   

   return (
      <div className="App">
         <h1>Star warS</h1>
         <h2>characters</h2>
         <Search />
         <Character />
      </div>
   );
}
