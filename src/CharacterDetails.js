import React, { useState, useEffect } from "react";
import "./CharacterDetails.css";
import Modal from "react-modal";

export default function CharacterDetails({ person, isOpen, onClose }) {
   const getCharacterImageUrl = (name) => {
      const formattedName = name.toLowerCase().replace(/ /g, "-");
      return `/img/${formattedName}.jpg`;
   };

   const [vehicles, setVehicles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [selectedVehicle, setSelectedVehicle] = useState(null);

   useEffect(() => {
      const fetchVehicleDetails = async () => {
         setLoading(true);

         const vehiclePromises = person.vehicles.map((vehicleUrl) =>
            fetch(vehicleUrl).then((response) => response.json())
         );

         const vehicleDetails = await Promise.all(vehiclePromises);
         setVehicles(vehicleDetails);
         setLoading(false);
      };

      fetchVehicleDetails();
   }, [person.vehicles]);

   const handleVehicleClick = (vehicle) => {
      if (selectedVehicle && selectedVehicle.name === vehicle.name) {
         setSelectedVehicle(null);
      } else {
         setSelectedVehicle(vehicle);
      }
   };

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onClose}
         contentLabel="Character Details"
      >
         <button className="close-button" onClick={onClose}>
            <img src="/img/x-close.svg" alt="Close" />
         </button>
         <div className="modal-content">
            <div className="info-container">
               <img
                  className="character-img"
                  src={getCharacterImageUrl(person.name)}
                  alt={person.name}
               />
               <h3 className="character-name-modal">{person.name}</h3>
               <p>Birth Year: {person.birth_year}</p>
               <p>Mass: {person.mass}</p>
               <p>Height: {person.height}</p>
               <p>Gender: {person.gender}</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="vehicles-container">
               <h4>Vehicles</h4>
               {loading ? (
                  <p>Loading vehicles...</p>
               ) : vehicles.length > 0 ? (
                  vehicles.map((vehicle, index) => (
                     <div key={index}>
                        <button
                           className="vehicle-button button-outline"
                           onClick={() => handleVehicleClick(vehicle)}
                        >
                           {vehicle.name}
                        </button>
                        {selectedVehicle === vehicle && (
                           <div className="vehicle-details">
                              <p>Model: {vehicle.model}</p>
                              <p>Manufacturer: {vehicle.manufacturer}</p>
                              <p>Class: {vehicle.vehicle_class}</p>
                           </div>
                        )}
                     </div>
                  ))
               ) : (
                  <p>No vehicle details available.</p>
               )}
            </div>
         </div>
      </Modal>
   );
}