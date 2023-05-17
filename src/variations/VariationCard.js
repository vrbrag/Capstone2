import React from 'react'
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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