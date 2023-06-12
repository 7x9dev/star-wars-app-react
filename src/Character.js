import React, { useState, useEffect } from "react";
import "./Character.css";
import CharacterDetails from "./CharacterDetails";
import BeatLoader from "react-spinners/BeatLoader";

export default function Character() {
   const [people, setCharacters] = useState([]);
   const [selectedCharacter, setSelectedCharacter] = useState(null);
   let [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("https://swapi.dev/api/people/")
         .then((response) => response.json())
         .then((data) => {
            setCharacters(data.results);
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error loading characters", error);
            setLoading(false);
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
      <div className="character-wrapper _container">
         {loading && (
            <BeatLoader
               color="#fff"
               loading={loading}
               speedMultiplier={0.5}
               size={17}
            />
         )}
         {!loading && (
            <>
               <ul className="character-list">
                  {people.map((person) => (
                     <li key={person.url}>
                        <img
                           className="character-img character-click"
                           src={getCharacterImageUrl(person.name)}
                           alt={person.name}
                           onClick={() => handleCharacterClick(person)}
                        />
                        <h4>{person.name}</h4>
                        <button
                           className="button-outline"
                           onClick={() => handleCharacterClick(person)}
                        >
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
            </>
         )}
      </div>
   );
}