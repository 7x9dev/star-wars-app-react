import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./CharacterModal.css";

const CharacterInfo = ({ character }) => (
   <Popup
      trigger={<button className="button-outline">More info</button>}
      modal
      nested
   >
      {(close) => (
         <div className="modal">
            <button className="close" onClick={close} aria-label="close">
               &times;
            </button>
            <div className="character-modal">
               <img
                  className="character-img modal-img"
                  src={`/img/${character.name
                     .toLowerCase()
                     .replace(/ /g, "-")}.jpg`}
                  alt={character.name}
               />
               <h4>{character.name}</h4>
               <p>Birth year: {character.birth_year}</p>
               <p>Gender: {character.gender}</p>
               <p>Height: {character.height}</p>
               <p>Weight: {character.mass}</p>
               <p>Hair color: {character.hair_color}</p>
               <p>Skin color: {character.skin_color}</p>
               <p>Eye color: {character.eye_color}</p>
            </div>
         </div>
      )}
   </Popup>
);

export default CharacterInfo;
