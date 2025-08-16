import React, { useState, useEffect } from "react";
import "./Characters.css";
import CharacterModal from "../Modal/CharacterModal";
import RotateLoader from "react-spinners/RotateLoader";

export default function Characters() {
   const [characters, setCharacters] = useState([]);
   const [planets, setPlanets] = useState([]);
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState("");
   const [handleSearch, setHandleSearch] = useState("");

   useEffect(() => {
      const getCharacters = async () => {
         const response = await fetch(
            `https://sw.simplr.sh/api/people/all.json`
         );
         const data = await response.json();
         setCharacters(data);
         setLoading(false);
      };
      getCharacters();
   }, [handleSearch]);

   useEffect(() => {
      const getPlanet = async () => {
         const response = await fetch(
            `https://sw.simplr.sh/api/planets/all.json`
         );
         const data = await response.json();
         setPlanets(data);
      };
      getPlanet();
   }, []);

   const characterSearch = (e) => {
      setSearch(e.target.value);
   };

   const searchSubmit = (e) => {
      e.preventDefault();
      setHandleSearch(search);
   };

   const characterImage = (characterName) => {
      const formattedName = characterName.toLowerCase().replace(/ /g, "-");
      return `/img/${formattedName}.jpg`;
   };

   const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(handleSearch.toLowerCase())
   );

   const findPlanetName = (homeworldUrl) => {
      const homeworld = planets.find((planet) => planet.url === homeworldUrl);
      return homeworld ? homeworld.name : "n/a";
   };

   return (
      <div className="_container">
         <form className="search-box" onSubmit={searchSubmit}>
            <img
               className="search-icon"
               src="/img/search.svg"
               alt="search icon"
            />
            <input
               className="search-input"
               type="text"
               placeholder="Favorite character, search for you must..."
               onChange={characterSearch}
               value={search}
            />
         </form>

         <RotateLoader
            className="spinner-container"
            color="#ffe81f"
            loading={loading}
            speedMultiplier={0.7}
            size={17}
         />

         {filteredCharacters.length === 0 && !loading ? (
            <h4 className="no-results">
               Silent is the Force. Life forms in this galaxy, found not.
            </h4>
         ) : (
            <ul className="character-list">
               {filteredCharacters.map((person, index) => (
                  <li key={index}>
                     <img
                        className="character-img"
                        src={characterImage(person.name)}
                        alt={person.name}
                     />
                     <div className="character-info">
                        <h4>{person.name}</h4>
                        <p>Planet: {findPlanetName(person.homeworld)}</p>
                        <p>Birth year: {person.birth_year}</p>
                     </div>
                     <CharacterModal character={person} />
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
