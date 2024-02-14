import React from "react";
import Select from "react-select";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../../redux/productsSlice";

const AllCategories = () => {
   const options = [
      { value: "All", label: "All" },
      { value: "Apparel", label: "Apparel" },
      { value: "Collectibles", label: "Collectibles" },
      { value: "Home Decor", label: "Home Decor" },
      { value: "Tech & Gadgets", label: "Tech & Gadgets" },
   ];

   const dispatch = useDispatch();

   const customStyles = {
      control: (base) => ({
         ...base,
         backgroundColor: "#1d1e1f",
         color: "white",
         border: "none",
         borderRadius: "6px",
         height: 54,
         padding: "0 5px 0 10px",
      }),
      menu: (base) => ({
         ...base,
         backgroundColor: "#1d1e1f",
      }),
      option: (base, state) => ({
         ...base,
         backgroundColor: state.isSelected ? "#ffe81f" : "#1d1e1f", // bg color of dropdown option
         color: state.isSelected ? "#000" : "#fff", // text color of dropdown option
         padding: "10px 20px",
         "&:hover": {
            backgroundColor: state.isSelected ? "#ffe81f" : "#343535", // bg color on hover
            color: state.isSelected ? "#000" : "#fff", // text color on hover
         },
      }),
      singleValue: (base) => ({
         ...base,
         color: "#fff", // color of the selected category
      }),
   };

   const handleCategoryChange = (selectedOption) => {
      dispatch(filterCategory(selectedOption.value));
   };

   return (
      <div>
         <div className="dropdown">
            <Select
               options={options}
               isSearchable={false}
               styles={customStyles}
               theme={(theme) => ({
                  ...theme,
                  colors: {
                     ...theme.colors,
                     primary: "black", // border selected
                     primary50: "#343535", // option bg color clicked
                  },
               })}
               onChange={handleCategoryChange}
            />
         </div>
         <div className="sidebar">
            {[
               "All",
               "Apparel",
               "Collectibles",
               "Home Decor",
               "Tech & Gadgets",
            ].map((value) => (
               <Filter category={value} />
            ))}
         </div>
      </div>
   );
};

export default AllCategories;
