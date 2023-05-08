import React, { useEffect, useState } from 'react'
import UserContext from '../auth/UserContext';
import { useContext } from 'react';
import { Card, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import KitchenApi from '../api';

function VariationCard({ id, title, image }) {


   return (
      <div>
         <div className="VariationCard">
            <Card className="card-body">
               <Link to={`/variation/${id}`}>
                  <CardTitle className="card-title">{title}</CardTitle>
               </Link>
               <img
                  alt={title}
                  src={image}
               />


            </Card>
         </div>
      </div>
   )
}

export default VariationCard;