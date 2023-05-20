import React, { useEffect, useState } from 'react';
import KitchenApi from '../api';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import './RecipeLogInfo.css'

function RecipeLogInfo({ id }) {

   const [recipe, setRecipe] = useState([]);

   // console.log("RecipeLogInfo", "id type", typeof (id))

   async function getRecipeInfo(id) {
      let r = await KitchenApi.getRecipe(id)
      setRecipe(r)
   }

   // console.debug("Recipe-logged", "logged", recipe)

   useEffect(() => {
      getRecipeInfo(id);
   }, []);

   return (
      <div className="RecipeLogInfo">
         <Table className="RecipeLogInfo-table">
            <tbody>
               <tr>
                  <th scope="row" className="RecipeLogInfo-table-title">
                     <Link to={`/recipe/${recipe.id}`}>
                        {recipe.title}
                     </Link>
                  </th>
                  <td className="RecipeLogInfo-table-cal">
                     {recipe.avgCal} cal
                  </td>
               </tr>
            </tbody>
         </Table>
      </div >
   )
}

export default RecipeLogInfo;