import React, { useState } from "react";
import "./Films.css";
import { dataFilms } from "../../data/dataFilms";

export default function Films() {
   const [films] = useState(dataFilms);

   return (
      <div className="page-wrapper _container">
         <h3 className="header">
            A long time ago in a galaxy far, far away...
         </h3>
         <div className="film-list">
            {films.map((item) => {
               const { id, image, film, year, link } = item;
               return (
                  <div key={id} className="film-info">
                     <img
                        src={image}
                        alt="film poster"
                        className="film-poster"
                     />
                     <h5>{film}</h5>
                     <p>Release year: {year}</p>
                     <button
                        onClick={() =>
                           window.open(link, "_blank", "noopener noreferrer")
                        }
                        className="button-outline"
                     >
                        View details
                     </button>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
