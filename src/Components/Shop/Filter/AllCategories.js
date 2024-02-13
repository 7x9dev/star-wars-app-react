import React from "react";
import Filter from "./Filter";

const AllCategories = () => {
   return (
      <div className="sidebar-items">
         {[
            "All",
            "Apparel",
            "Collectibles",
            "Home Decor",
            "Tech & Gadgets",
         ].map((category) => (
            <Filter category={category} />
         ))}
      </div>
   );
};

export default AllCategories;
