import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   filterCategory,
   getSelectedCategory,
} from "../../../redux/productsSlice";

const Filter = ({ category }) => {
   const selectedCategory = useSelector(getSelectedCategory);
   const dispatch = useDispatch();

   return (
      <div
         onClick={() => {
            dispatch(filterCategory(category));
         }}
         className={
            selectedCategory === category
               ? "categoryButtonSelected"
               : "categoryButton"
         }
      >
         {category}
      </div>
   );
};

export default Filter;
