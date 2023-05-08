import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
// import { Link } from "react-router-dom";
import KitchenApi from '../api';
import VariationCard from './VariationCard';

function VariationsList() {
   const { id } = useParams();

   const [variations, setVariations] = useState([]);
   const [title, setTitle] = useState("...")
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

   async function getByCuisine() {
      let v = await KitchenApi.varByCuisine(id)
      console.log(`${id} varByCuisine`, v)
      setVariations(v)
      setTitle("Cuisine")
   }

   async function getByIngredients() {
      let v = await KitchenApi.varByIngredients(id)
      console.log(`${id} varByIngredients`, v)
      setVariations(v)
      setTitle("Ingredients")
   }

   // useEffect(() => {
   //    getByCuisine();
   //    getByIngredients();
   // }, [])

   return (
      <div className="VariationList">
         <h1>Variations by {title}</h1>
         <div className="Variation-Dropdown">
            < Dropdown isOpen={isSearchOpen} toggle={toggleSearch} >
               <DropdownToggle color="none" className="navbar-item" caret>
                  Search by
               </DropdownToggle>
               <DropdownMenu>

                  <DropdownItem className="navbar-item" onClick={getByCuisine} >
                     cuisine
                  </DropdownItem>

                  <DropdownItem className="navbar-item" onClick={getByIngredients} >
                     ingredients
                  </DropdownItem>
               </DropdownMenu>
            </Dropdown >
         </div>


         <div className="VariationsList-list">
            {variations.map(v => (
               <VariationCard
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  image={v.image}
               />
            ))}
         </div>

      </div>
   )
}

export default VariationsList;