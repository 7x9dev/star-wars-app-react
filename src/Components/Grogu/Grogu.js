import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Grogu.css";
import groguPic from "./grogu.png";
import { Tooltip } from "react-tooltip";
import { dataQuotes } from "../../data/dataQuotes";

const Grogu = () => {
   const groguFloat = useRef();
   const [adviceToShow] = useState(dataQuotes);
   const [currentIndex, setCurrentIndex] = useState(0);

   useGSAP(
      () => {
         gsap.to(groguFloat.current, {
            y: -20,
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "power1.inOut",
         });
      },
      { scope: groguFloat }
   );

   const showNextAdvice = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === adviceToShow.length - 1 ? 0 : prevIndex + 1
      );
   };

   return (
      <div className="tooltip-container">
         <img
            ref={groguFloat}
            className="grogu"
            src={groguPic}
            alt="grogu"
            data-tooltip-id="grogu-tooltip"
            onMouseEnter={showNextAdvice}
         />
         <Tooltip
            id="grogu-tooltip"
            opacity={1}
            className="tooltip"
            place="right"
         >
            <div>
               <p>{adviceToShow[currentIndex].quote}</p>
            </div>
         </Tooltip>
      </div>
   );
};

export default Grogu;
