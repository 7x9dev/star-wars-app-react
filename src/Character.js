import React, { useState, useEffect } from "react";
import "./Character.css";
import CharacterDetails from "./CharacterDetails";

export default function Character() {
   const [people, setCharacters] = useState([]);
   const [selectedCharacter, setSelectedCharacter] = useState(null);

   useEffect(() => {
      fetch("https://swapi.dev/api/people/")
         .then((response) => response.json())
         .then((data) => {
            setCharacters(data.results);
         })
         .catch((error) => {
            console.error("Error loading characters", error);
         });
   }, []);

   const handleCharacterClick = (person) => {
      setSelectedCharacter(person);
   };

   const handleModalClose = () => {
      setSelectedCharacter(null);
   };

   const getCharacterImageUrl = (name) => {
      const formattedName = name.toLowerCase().replace(/ /g, "-");
      return `/img/${formattedName}.jpg`;
   };

   return (
      <div className="character">
         <ul className="character-list">
            {people.map((person) => (
               <li key={person.url}>
                  <img className="character-img"
                     src={getCharacterImageUrl(person.name)}
                     alt={person.name}
                     style={{ width: "300px" }}
                  />
                  <h4>{person.name}</h4>
                  <button onClick={() => handleCharacterClick(person)}>
                     View Details
                  </button>
               </li>
            ))}
         </ul>
         {selectedCharacter && (
            <CharacterDetails
               person={selectedCharacter}
               isOpen={true}
               onClose={handleModalClose}
            />
         )}
      </div>
   );
}
