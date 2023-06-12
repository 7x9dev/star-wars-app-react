import React, { useState, useEffect } from "react";
import "./Character.css";
import CharacterDetails from "./CharacterDetails";
import BeatLoader from "react-spinners/BeatLoader";

export default function Character() {
   const [people, setCharacters] = useState([]);
   const [selectedCharacter, setSelectedCharacter] = useState(null);
   const [loading, setLoading] = useState(true);
   const [searchQuery, setSearchQuery] = useState("");
   const [filteredPeople, setFilteredPeople] = useState([]);

   useEffect(() => {
      fetch("https://swapi.dev/api/people/")
         .then((response) => response.json())
         .then((data) => {
            setCharacters(data.results);
            setLoading(false);
            setFilteredPeople(data.results);
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

   const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
   };

   useEffect(() => {
      const filteredPeople = people.filter((person) =>
         person.name.toLowerCase().includes(searchQuery)
      );
      setFilteredPeople(filteredPeople);
   }, [people, searchQuery]);

   return (
      <div className="character-wrapper _container">
         <form className="search-box" onSubmit={(e) => e.preventDefault()}>
            <img
               className="search-icon"
               src="/img/search.svg"
               alt="search icon"
            />
            <input
               className="search-input"
               type="text"
               placeholder="Search for your favorite character..."
               value={searchQuery}
               onChange={handleSearchInputChange}
            />
         </form>
         {loading && (
            <BeatLoader
               className="spinner-container"
               color="#fff"
               loading={loading}
               speedMultiplier={0.5}
               size={17}
            />
         )}
         {!loading && (
            <>
               <ul className="character-list">
                  {filteredPeople.length > 0 ? (
                     filteredPeople.map((person) => (
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
                     ))
                  ) : (
                     <h3 className="no-results">No results found</h3>
                  )}
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