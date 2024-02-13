import React from "react";
import "./Footer.css";

export default function Footer() {
   return (
      <footer>
         <p>
            © 2024{" "}
            <a
               className="link"
               href="https://www.7x9.dev/"
               target="_blank"
               rel="noreferrer"
            >
               7x9.dev
            </a>{" "}
            | Coded and designed, by{" "}
            <a
               className="link"
               href="https://www.linkedin.com/in/valerie-di/"
               target="_blank"
               rel="noreferrer"
            >
               Valeriia&nbsp;D.
            </a>{" "}
            it was.
         </p>
      </footer>
   );
}