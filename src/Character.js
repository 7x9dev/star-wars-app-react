import React, { useEffect, useState } from "react";
import "./Character.css";

export default function Character() {
   const [people, setPeople] = useState([]);

   useEffect(() => {
      fetch("https://swapi.dev/api/people/")
         .then((response) => response.json())
         .then((data) => {
            setPeople(data.results);
         })
         .catch((error) => {
            console.error("Error loading characters", error);
         });
   }, []);

   const getCharacterImageUrl = (name) => {
      const formattedName = name.toLowerCase().replace(/ /g, "-");
      return `/img/${formattedName}.jpg`;
   };

   return (
      <div className="Character">
         <ul className="List">
            {people.map((person) => (
               <li key={person.url}>
                  <img
                     src={getCharacterImageUrl(person.name)}
                     alt={person.name}
                     style={{ width: "300px" }}
                  />
                  <h4>{person.name}</h4>
               </li>
            ))}
         </ul>
      </div>
   );
}
