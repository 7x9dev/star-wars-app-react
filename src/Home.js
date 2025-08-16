import React from "react";
import Characters from "./Components/Characters/Characters";

export default function Home() {
   return (
      <div className="page-wrapper _container">
         <div className="header">
            <h1>Star warS</h1>
         </div>
         <Characters />
      </div>
   );
}
