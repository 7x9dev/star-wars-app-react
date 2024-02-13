import React, { useState } from "react";
import "./About.css";
import prevBtn from "./slider-prev.svg";
import nextBtn from "./slider-next.svg";
import { dataPosters } from "../../data/dataPosters";

export default function About() {
   const [filmPoster, setFilmPoster] = useState(0);
   const { poster } = dataPosters[filmPoster];

   const aboutContents = [
      "In a distant galaxy filled with mystical forces, epic battles between the forces of good and evil unfold. Star Wars, a legendary saga created by George Lucas, has captured the hearts and imaginations of fans across generations. From the iconic lightsabers to the powerful Jedi, and the menacing Sith Lords, Star Wars has become a cultural phenomenon.",
      "Embark on a journey through the stars, where brave rebels stand against the tyrannical Galactic Empire, and ancient prophecies shape the destinies of heroes and villains alike. With its rich lore, diverse planets, and unforgettable characters like Luke Skywalker, Princess Leia, and Darth Vader, Star Wars has become more than just a film series; it's a timeless tale of heroism, redemption, and the enduring battle between the light and the dark sides of the Force.",
      "Explore the vast universe of Star Wars, where the Force binds us all, and every step is a part of an epic adventure that continues to captivate audiences and inspire new generations. May the Force be with you on this journey into the heart of Star Wars lore!",
   ];

   const nextFilmPoster = () => {
      setFilmPoster((filmPoster) => {
         filmPoster++;
         if (filmPoster > dataPosters.length - 1) {
            filmPoster = 0;
         }
         return filmPoster;
      });
   };

   const prevFilmPoster = () => {
      setFilmPoster((filmPoster) => {
         filmPoster--;
         if (filmPoster < 0) {
            return dataPosters.length - 1;
         }
         return filmPoster;
      });
   };

   return (
      <div className="page-wrapper _container _about-container">
         <h3 className="header">May the Force be with you</h3>
         <div className="film-slider-container">
            <button
               onClick={prevFilmPoster}
               className="slider-button button-outline"
            >
               <img src={prevBtn} alt="prev" />
            </button>
            <img src={poster} alt="poster" className="slider-img" />
            <button
               onClick={nextFilmPoster}
               className="slider-button button-outline"
            >
               <img src={nextBtn} alt="next" />
            </button>
         </div>

         {aboutContents.map((content, index) => (
            <div key={index} className="about-content">
               <p>{content}</p>
            </div>
         ))}

         <div className="about-btn">
            <button
               onClick={() =>
                  window.open(
                     "https://www.starwars.com/",
                     "_blank",
                     "noopener noreferrer"
                  )
               }
               className="button-outline"
            >
               Official website
            </button>

            <button
               onClick={() =>
                  window.open(
                     "https://starwars.fandom.com/wiki/Main_Page",
                     "_blank",
                     "noopener noreferrer"
                  )
               }
               className="button-outline"
            >
               Wookieepedia
            </button>
         </div>
      </div>
   );
}
